import { useEffect, useRef, useState } from 'react'
import { FaBars, FaGlobe, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useApp } from '../contexts/AppContext'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const menuButton = useRef(null)
    const { language, theme, toggleLanguage, toggleTheme, t } = useApp()
    const dark = theme === 'dark'
    const controls = `inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg px-3 transition-colors ${
        dark
            ? 'bg-gray-900 text-gray-200 hover:bg-gray-800'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50)
            const current = ['home', 'about', 'experience', 'projects', 'skills', 'contact'].find(
                (id) => {
                    const rect = document.getElementById(id)?.getBoundingClientRect()
                    return rect && rect.top <= 140 && rect.bottom >= 140
                }
            )
            if (current) setActiveSection(current)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
                menuButton.current?.focus()
            }
        }
        const desktop = window.matchMedia('(min-width: 1024px)')
        const onResize = () => {
            if (desktop.matches) setIsMobileMenuOpen(false)
        }
        document.addEventListener('keydown', onKey)
        desktop.addEventListener('change', onResize)
        return () => {
            document.removeEventListener('keydown', onKey)
            desktop.removeEventListener('change', onResize)
        }
    }, [isMobileMenuOpen])

    const navigate = (id) => {
        setIsMobileMenuOpen(false)
        const target = document.getElementById(id)
        target?.focus({ preventScroll: true })
        target?.scrollIntoView({ behavior: 'smooth' })
    }
    const navItems = [
        ['home', t.inicio],
        ['about', t.sobre],
        ['experience', t.experiencia],
        ['projects', t.projetos],
        ['skills', t.habilidades]
    ]
    const themeLabel = dark ? t.lightMode : t.darkMode
    const ThemeIcon = dark ? FaSun : FaMoon
    const languageLabel = language === 'pt-BR' ? 'pt-BR' : 'EN'

    const settings = (
        <>
            <button
                type='button'
                onClick={toggleTheme}
                className={controls}
                title={themeLabel}
                aria-label={themeLabel}
            >
                <ThemeIcon aria-hidden='true' />
            </button>
            <button
                type='button'
                onClick={toggleLanguage}
                className={controls}
                title={t.switchLanguage}
                aria-label={t.switchLanguage}
            >
                <FaGlobe aria-hidden='true' />
                <span className='text-sm font-semibold'>{languageLabel}</span>
            </button>
        </>
    )

    return (
        <motion.nav
            aria-label={t.navigation}
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
                dark
                    ? 'border-gray-800/60 bg-black/95 text-white'
                    : 'border-gray-200/70 bg-white/95 text-gray-900'
            } ${isScrolled ? 'backdrop-blur-md shadow-sm' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6'>
                <button
                    type='button'
                    onClick={() => navigate('home')}
                    aria-label={t.inicio}
                    className='flex min-h-[44px] min-w-[44px] items-center justify-center text-4xl'
                    style={{ fontFamily: '"Edu VIC WA NT Hand Pre", cursive', fontWeight: 600 }}
                >
                    g
                </button>
                <div className='hidden items-center gap-4 lg:flex'>
                    {navItems.map(([id, label]) => (
                        <button
                            type='button'
                            key={id}
                            onClick={() => navigate(id)}
                            aria-current={activeSection === id ? 'location' : undefined}
                            className={`min-h-[44px] border-b-2 px-1 text-sm font-medium transition-colors ${
                                activeSection === id
                                    ? dark
                                        ? 'border-blue-300 text-blue-200'
                                        : 'border-blue-800 text-blue-900'
                                    : dark
                                    ? 'border-transparent text-gray-300 hover:text-white'
                                    : 'border-transparent text-gray-700 hover:text-blue-900'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                    {settings}
                    <button
                        type='button'
                        onClick={() => navigate('contact')}
                        className='min-h-[44px] rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800'
                    >
                        {t.contato}
                    </button>
                </div>
                <div className='flex items-center gap-2 lg:hidden'>
                    {settings}
                    <button
                        ref={menuButton}
                        type='button'
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className={controls}
                        aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls='mobile-navigation'
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes aria-hidden='true' />
                        ) : (
                            <FaBars aria-hidden='true' />
                        )}
                    </button>
                </div>
            </div>
            <div
                id='mobile-navigation'
                hidden={!isMobileMenuOpen}
                className={`max-h-[calc(100dvh-72px)] overflow-y-auto border-t px-4 py-4 lg:hidden ${
                    dark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'
                }`}
            >
                <div className='flex flex-col gap-2'>
                    {navItems.map(([id, label]) => (
                        <button
                            type='button'
                            key={id}
                            onClick={() => navigate(id)}
                            aria-current={activeSection === id ? 'location' : undefined}
                            className={`min-h-[44px] rounded-lg px-4 py-3 text-left ${
                                activeSection === id
                                    ? dark
                                        ? 'bg-blue-950 text-blue-200'
                                        : 'bg-blue-50 text-blue-900'
                                    : ''
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        type='button'
                        onClick={() => navigate('contact')}
                        className='min-h-[44px] rounded-lg bg-blue-700 px-4 py-3 text-left font-semibold text-white hover:bg-blue-800'
                    >
                        {t.contato}
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}
