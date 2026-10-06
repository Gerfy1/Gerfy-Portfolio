import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useApp } from '../contexts/AppContext'
import { featuredProject, projects } from '../data/projects'

function Tags({ items, dark }) {
    return (
        <ul className='flex flex-wrap gap-2' aria-label='Stack'>
            {items.map((item) => (
                <li
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        dark
                            ? 'border-blue-800 bg-blue-950/60 text-blue-100'
                            : 'border-blue-200 bg-blue-50 text-blue-900'
                    }`}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default function Projects() {
    const { t, theme } = useApp()
    const dark = theme === 'dark'
    const featured = t.projects[featuredProject.key]
    const muted = dark ? 'text-gray-300' : 'text-gray-600'
    const link =
        'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors'

    return (
        <section
            id='projects'
            tabIndex={-1}
            className={`relative px-6 py-20 ${
                dark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'
            }`}
        >
            <div className='relative z-10 mx-auto max-w-6xl'>
                <h2 className='mb-12 text-center text-3xl font-bold md:text-5xl'>
                    {t.projectsTitle}{' '}
                    <span className={dark ? 'text-blue-300' : 'text-blue-800'}>
                        {t.projectsTitleHighlight}
                    </span>
                </h2>

                <article
                    aria-labelledby='pedido-divino-title'
                    className={`mb-10 overflow-hidden rounded-2xl border ${
                        dark
                            ? 'border-blue-800 bg-gradient-to-br from-blue-950 via-gray-950 to-gray-950'
                            : 'border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white'
                    }`}
                >
                    <div className='h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-transparent' />
                    <div className='p-6 md:p-10'>
                        <div className='grid gap-8 lg:grid-cols-[1fr_1.25fr]'>
                            <div>
                                <p
                                    className={`mb-4 text-xs font-bold tracking-[0.15em] ${
                                        dark ? 'text-blue-300' : 'text-blue-800'
                                    }`}
                                >
                                    {t.featuredLabel}
                                </p>
                                <h3
                                    id='pedido-divino-title'
                                    className='mb-3 text-4xl font-bold tracking-tight md:text-5xl'
                                >
                                    {featured.title}
                                </h3>
                                <p className={`max-w-sm text-xl leading-relaxed ${muted}`}>
                                    {t.featuredHeadline}
                                </p>
                            </div>
                            <div className='space-y-6'>
                                <p className={`text-base leading-relaxed md:text-lg ${muted}`}>
                                    {featured.description}
                                </p>
                                <Tags items={featuredProject.tech} dark={dark} />
                                <a
                                    className={`${link} bg-blue-700 text-white hover:bg-blue-800`}
                                    href={featuredProject.demo}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {t.projectButtons.website}
                                    <FaArrowRight aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                        <details
                            className={`mt-8 border-t pt-4 ${
                                dark ? 'border-blue-900' : 'border-blue-200'
                            }`}
                        >
                            <summary
                                className={`min-h-[44px] cursor-pointer rounded py-3 font-semibold ${
                                    dark ? 'text-blue-200' : 'text-blue-800'
                                }`}
                            >
                                {t.projectButtons.details}
                            </summary>
                            <div className='grid gap-6 pb-2 pt-4 md:grid-cols-2'>
                                <div>
                                    <h4 className='mb-3 font-semibold'>{t.operationsTitle}</h4>
                                    <p className={`text-base leading-relaxed ${muted}`}>
                                        {featured.operations}
                                    </p>
                                </div>
                                <div>
                                    <h4 className='mb-3 font-semibold'>{t.engineeringTitle}</h4>
                                    <p className={`text-base leading-relaxed ${muted}`}>
                                        {featured.engineering}
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>
                </article>

                <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
                    {projects.map((project) => {
                        const copy = t.projects[project.key]
                        return (
                            <article
                                key={project.id}
                                className={`flex min-w-0 flex-col rounded-xl border p-6 transition-colors ${
                                    dark
                                        ? 'border-gray-800 bg-gray-950 hover:border-blue-700'
                                        : 'border-gray-200 bg-white hover:border-blue-400'
                                }`}
                            >
                                <div className='mb-4 flex flex-wrap items-start gap-3'>
                                    <h3 className='flex-1 text-xl font-semibold'>{copy.title}</h3>
                                    <span
                                        className={`rounded-full px-2 py-1 text-xs ${
                                            dark
                                                ? 'bg-green-950 text-green-200'
                                                : 'bg-green-50 text-green-800'
                                        }`}
                                    >
                                        {t.projectStatus[project.status]}
                                    </span>
                                </div>
                                <p className={`mb-6 flex-1 text-base leading-relaxed ${muted}`}>
                                    {copy.description}
                                </p>
                                <Tags items={project.tech} dark={dark} />
                                <div className='mt-6 flex flex-wrap gap-3'>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={`${t.projectButtons.github}: ${copy.title}`}
                                            className={`${link} border ${
                                                dark
                                                    ? 'border-gray-700 hover:bg-gray-800'
                                                    : 'border-gray-300 hover:bg-gray-100'
                                            }`}
                                        >
                                            <FaGithub aria-hidden='true' />
                                            {t.projectButtons.github}
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={`${
                                                t.projectButtons[project.linkLabel || 'demo']
                                            }: ${copy.title}`}
                                            className={`${link} bg-blue-700 text-white hover:bg-blue-800`}
                                        >
                                            <FaExternalLinkAlt aria-hidden='true' />
                                            {t.projectButtons[project.linkLabel || 'demo']}
                                        </a>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
