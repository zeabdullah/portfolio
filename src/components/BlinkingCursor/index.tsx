import cn from 'clsx';
import Styles from './BlinkingCursor.module.css';

type BlinkingCursorProps = {
    type: '|' | '_';
};

export default function BlinkingCursor({ type = '|' }: BlinkingCursorProps) {
    return <span className={cn(Styles.cursor)}>{type}</span>;
}
