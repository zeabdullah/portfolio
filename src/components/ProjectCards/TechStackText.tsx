import cn from 'clsx';

const TechStackText: React.FC<{ children: React.ReactNode }> = props => {
    return (
        <em>
            <p className={cn('text-neutral-400', 'text-xs', 'flex-shrink')}>
                ({props.children})
            </p>
        </em>
    );
};

export default TechStackText;
