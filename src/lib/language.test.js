import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
    getInitialLanguage,
    LANGUAGE_STORAGE_KEY,
    resolveLanguage,
    saveLanguage
} from './language.js'

test('the primary browser preference determines the initial language', () => {
    for (const [preferred, expected] of [
        ['pt-BR', 'pt-BR'],
        ['pt-PT', 'pt-BR'],
        ['pt', 'pt-BR'],
        ['PT-br', 'pt-BR'],
        ['en-US', 'en'],
        ['es', 'en'],
        [undefined, 'en']
    ])
        assert.equal(resolveLanguage(null, preferred), expected)
})

test('only a supported manual preference overrides browser language', () => {
    assert.equal(resolveLanguage('en', 'pt-BR'), 'en')
    assert.equal(resolveLanguage('pt-BR', 'en-US'), 'pt-BR')
    assert.equal(resolveLanguage('invalid', 'pt-PT'), 'pt-BR')
    assert.equal(resolveLanguage('invalid', 'es'), 'en')
})

test('manual preferences persist and blocked storage does not break detection', () => {
    const windowDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'window')
    const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator')
    try {
        const values = new Map()
        Object.defineProperty(globalThis, 'navigator', {
            configurable: true,
            value: { languages: ['pt-PT', 'en'], language: 'en-US' }
        })
        Object.defineProperty(globalThis, 'window', {
            configurable: true,
            value: {
                localStorage: {
                    getItem: (key) => values.get(key),
                    setItem: (key, value) => values.set(key, value)
                }
            }
        })
        assert.equal(getInitialLanguage(), 'pt-BR')
        saveLanguage('en')
        assert.equal(values.get(LANGUAGE_STORAGE_KEY), 'en')
        assert.equal(getInitialLanguage(), 'en')
        Object.defineProperty(globalThis.window, 'localStorage', {
            get() {
                throw new Error('Blocked')
            }
        })
        assert.equal(getInitialLanguage(), 'pt-BR')
        assert.doesNotThrow(() => saveLanguage('en'))
    } finally {
        if (windowDescriptor) Object.defineProperty(globalThis, 'window', windowDescriptor)
        else delete globalThis.window
        if (navigatorDescriptor) Object.defineProperty(globalThis, 'navigator', navigatorDescriptor)
        else delete globalThis.navigator
    }
})
