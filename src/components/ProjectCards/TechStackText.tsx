import clsx from 'clsx';

const TechStackText: React.FC<{ children: React.ReactNode }> = props => {
    return (
        <em>
            <p
                className={clsx(
                    'text-neutral-700 dark:text-neutral-300',
                    'text-xs',
                    'flex-shrink',
                )}
            >
                ({props.children})
            </p>
        </em>
    );
};

export default TechStackText;
