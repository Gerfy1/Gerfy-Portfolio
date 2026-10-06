export const LANGUAGE_STORAGE_KEY = 'gerfy.language'

export function resolveLanguage(saved, preferred) {
    if (saved === 'pt-BR' || saved === 'en') return saved
    return /^pt(?:-|$)/i.test(preferred || '') ? 'pt-BR' : 'en'
}

export function getInitialLanguage() {
    let saved
    try {
        saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    } catch {
        // Private browsing and storage policies must not prevent rendering.
    }
    const preferred =
        typeof navigator === 'undefined'
            ? undefined
            : navigator.languages?.[0] || navigator.language
    return resolveLanguage(saved, preferred)
}

export function saveLanguage(language) {
    try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
        // The React state still preserves the choice for this session.
    }
}
