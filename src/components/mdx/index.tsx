import type { MDXComponents } from 'mdx/types'
import Anchor from '@/components/typography/Anchor'
import Code from './Code'
import Heading from './Heading'
import ResponsiveImage from './ResponsiveImage'

const mdxComponents: MDXComponents = {
    h2: props => <Heading level={2} {...props} />,
    h3: props => <Heading level={3} {...props} />,
    h4: props => <Heading level={4} {...props} />,
    h5: props => <Heading level={5} {...props} />,
    a: Anchor,
    code: Code,
    img: ResponsiveImage,
}

export default mdxComponents
