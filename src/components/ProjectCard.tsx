import cn from 'clsx';

type ProjectCardProps = {
    title: string;
    link: string;
    content: string;
    stack: string;
    image: string;
};
export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <a
            href={props.link}
            className={cn(
                'flex justify-start items-start gap-4 flex-col sm:flex-row',
                'bg-gray-50 hover:bg-gray-100',
                'p-8 rounded-md',
                'border border-gray-200 hover:border-gray-300',
                'shadow-sm',
            )}
        >
            <div className="mr-4">
                <div className="w-14 rounded-md overflow-hidden bg-black">
                    <img src={props.image} alt="" className="object-cover" />
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4 mb-2">
                    <h3 className={cn('text-lg font-bold')}>{props.title}</h3>
                    <em>
                        <p className="text-gray-400 text-xs">({props.stack})</p>
                    </em>
                </div>
                <p className={cn('text-gray-700 text-md font-light leading-loose')}>
                    {props.content}
                </p>
            </div>
        </a>
    );
}
