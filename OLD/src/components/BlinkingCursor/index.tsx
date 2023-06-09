import Styles from './BlinkingCursor.module.css'

type BlinkingCursorProps = { type: '|' | '_' }
export default function BlinkingCursor({ type = '|' }: BlinkingCursorProps) {
    return <span className={Styles.cursor}>{type}</span>
}
