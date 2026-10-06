import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const randomChars = [
    ...'創造性革新技術継続的な進化未来を築く情熱成長挑戦協力学習品質効率開発設計実装最適化美学芸術精神心希望夢光'
]
const words = ['継続的な進化', '創造性', '革新', '技術', '未来を築く', '情熱', '成長', '品質']

export default function VerticalJapaneseText({ side = 'left', isBlackBackground = true }) {
    const [frame, setFrame] = useState({ chars: [...words[0]], active: -1 })

    useEffect(() => {
        let timer
        let previous = 0
        let current = [...words[0]]
        let disposed = false
        const schedule = (callback, delay) => {
            timer = window.setTimeout(() => {
                if (!disposed) callback()
            }, delay)
        }
        const start = () => {
            // A different word every cycle; each character scrambles before settling.
            previous =
                (previous + 1 + Math.floor(Math.random() * (words.length - 1))) % words.length
            const target = [...words[previous]]
            current = target.map((char, index) => current[index] || char)
            let index = 0
            let swaps = 0
            const step = () => {
                if (index >= target.length) {
                    setFrame({ chars: [...target], active: -1 })
                    schedule(start, 1200 + Math.random() * 1000)
                    return
                }
                current[index] = randomChars[Math.floor(Math.random() * randomChars.length)]
                setFrame({ chars: [...current], active: index })
                swaps++
                if (swaps >= 5) {
                    current[index] = target[index]
                    setFrame({ chars: [...current], active: index })
                    index++
                    swaps = 0
                }
                schedule(step, 25)
            }
            step()
        }
        setFrame({ chars: current, active: -1 })
        schedule(start, side === 'left' ? 300 : 500)
        return () => {
            disposed = true
            window.clearTimeout(timer)
        }
    }, [side])

    const { chars, active } = frame
    return (
        <div
            aria-hidden='true'
            className={`japanese-background japanese-background--${side}`}
            style={{ color: isBlackBackground ? 'rgba(219,234,254,0.24)' : 'rgba(30,58,138,0.17)' }}
        >
            {chars.map((char, index) => (
                <div key={index} className='japanese-character'>
                    <motion.span
                        className='block'
                        animate={{ scale: active === index ? 1.12 : 1 }}
                        transition={{ duration: 0.16 }}
                        style={{
                            textShadow: active === index ? '0 0 12px rgba(59,130,246,0.4)' : 'none'
                        }}
                    >
                        {char}
                    </motion.span>
                    {active === index && (
                        <>
                            <motion.span
                                className='japanese-scan'
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: ['0%', '100%'], opacity: [0, 0.5, 0] }}
                                transition={{ duration: 0.3, repeat: Infinity }}
                            />
                            {[0, 1, 2, 3].map((particle) => (
                                <motion.span
                                    key={particle}
                                    className='japanese-particle'
                                    style={{
                                        top: `${20 + particle * 15}%`,
                                        left: side === 'left' ? '80%' : '20%'
                                    }}
                                    animate={{
                                        x: [0, side === 'left' ? 10 : -10],
                                        y: [0, -10],
                                        opacity: [0, 0.4, 0],
                                        scale: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        delay: particle * 0.08
                                    }}
                                />
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
