import type { NextPage } from 'next'

import { Box, Flex } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'
import { BasicCard } from '@components/shared'
import { Section } from '@components/modules'

const HomePage: NextPage = () => {

	return (<>

		<DefaultLayout
			title='Home'
		>

			<Section title='About'>

				<BasicCard>
                    <p>
                        Hi! I'm Bartholomé Gili, a French student in IT who's in love with computing for some years now!
                        Let's be selfish for once and talk a little bit about myself here 😉
                    </p>
                    <p>
                        I'm a victim of what I call the "creative fever", which constantly pushes me towards new projects and creations in as many domains as I can. Thanks to that, I first made my hand in Design, then in Montage and finaly, but certainly the most important one : in Computing Sciences.
                    </p>
                    <p>
                        Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more then willing to follow my fascinations wherever they take me. I'm never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
                    </p>
                    <p>
                        I don't like to define myself by the work I've done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matter for me.
                    </p>
				</BasicCard>

				{/* Skills */}

				<Flex wrap='wrap' w='100%' gap='1rem'>

					<BasicCard
						title='Front-end'
						subtitle="+2 ans d'expérience"
						fontSize='.9rem'
					>
						Il y a plus de deux ans, j'ai commencé à écrire ma première ligne de code. Depuis, j'ai acquis une solide maîtrise de diverses technologies front-end, telles que React, TypeScript, SCSS et HTML. Au fil du temps, j'ai perfectionné mes compétences en codage pour créer des interfaces utilisateur interactives et attrayantes.
					</BasicCard>

					<BasicCard
						title='Front-end'
						subtitle="+2 ans d'expérience"
						fontSize='.9rem'
					>
						Il y a plus de deux ans, j'ai commencé à écrire ma première ligne de code. Depuis, j'ai acquis une solide maîtrise de diverses technologies front-end, telles que React, TypeScript, SCSS et HTML. Au fil du temps, j'ai perfectionné mes compétences en codage pour créer des interfaces utilisateur interactives et attrayantes.
					</BasicCard>

					<BasicCard
						title='Front-end'
						subtitle="+2 ans d'expérience"
						fontSize='.9rem'
					>
						Il y a plus de deux ans, j'ai commencé à écrire ma première ligne de code. Depuis, j'ai acquis une solide maîtrise de diverses technologies front-end, telles que React, TypeScript, SCSS et HTML. Au fil du temps, j'ai perfectionné mes compétences en codage pour créer des interfaces utilisateur interactives et attrayantes.
					</BasicCard>

				</Flex>

			</Section>

		</DefaultLayout>		
	
	</>)
}

export default HomePage