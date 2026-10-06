import VerticalJapaneseText from './VerticalJapaneseText'
import { useApp } from '../contexts/AppContext'

export default function SectionAwareJapaneseText({ side }) {
    const { theme } = useApp()
    return <VerticalJapaneseText side={side} isBlackBackground={theme === 'dark'} />
}
