import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import { useApp } from '../contexts/AppContext'
import { motion } from 'framer-motion'

export default function HeroTitle() {
    const { t, theme } = useApp()
    const target = useRef(null)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (!target.current) return
        const typed = new Typed(target.current, {
            strings: t.typedStrings,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            contentType: null,
            onBegin: () => setIsTyping(true),
            preStringTyped: () => setIsTyping(true),
            onStringTyped: () => setIsTyping(false),
            onTypingPaused: () => setIsTyping(false),
            onTypingResumed: () => setIsTyping(true)
        })
        return () => typed.destroy()
    }, [t])

    return (
        <div className='relative mb-6'>
            <h1
                className={`hero-typed-heading relative z-10 font-light tracking-tight ${
                    theme === 'dark' ? 'text-blue-100' : 'text-blue-950'
                }`}
            >
                <span className='sr-only'>
                    {t.heroName} — {t.heroRole}
                </span>
                <span aria-hidden='true'>
                    <span id='typed' ref={target} />
                </span>
            </h1>
            {isTyping && (
                <motion.div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-0 rounded-2xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.55, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        boxShadow:
                            theme === 'dark'
                                ? '0 0 40px rgba(147,197,253,0.28)'
                                : '0 0 32px rgba(30,64,175,0.16)'
                    }}
                />
            )}
        </div>
    )
}
