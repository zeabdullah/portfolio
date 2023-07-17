import Typewriter from 'typewriter-effect'
import Section from './Section'
import Container from './layouts/Container'
import H1 from './typography/H1'
import H2 from './typography/H2'
import P from './typography/P'

export default function UnderConstruction() {
    return (
        <Container>
            <Section id='header' aria-labelledby='header-heading'>
                <H1 id='header-heading' className='mb-12 font-extrabold'>
                    Recipes
                </H1>

                <H2 aria-hidden className='font-extrabold'>
                    Under Constr
                    <Typewriter
                        options={{ delay: 80 }}
                        onInit={typewriter => {
                            typewriter
                                .pauseFor(250)
                                .typeString('uction')
                                .start()
                        }}
                    />
                </H2>
                <h2 className='sr-only'>Under Construction</h2>

                <P>Stay tuned. 🛠️ 🚧</P>
            </Section>
        </Container>
    )
}
