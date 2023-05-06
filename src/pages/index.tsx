import type { InferGetStaticPropsType, NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'
import { AboutSection, ProjectsSection, Section, TechnologiesSection } from '@components/modules'
import { BasicCard } from '@components/shared'

import * as content from '@content'

export const getStaticProps = async () => {

	return {
		props: {
			technologies: content.technologies,
			types: content.types,
			about: content.about,
			skills: content.skills,
		}
	}
}

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<HomePageProps> = (props) => {

	return (<>

		<DefaultLayout
			title='Home'
		>

			<AboutSection />

			<TechnologiesSection />

			<ProjectsSection />

		</DefaultLayout>		
	
	</>)
}

export default HomePage