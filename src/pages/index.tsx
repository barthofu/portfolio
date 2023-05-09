import { DefaultLayout } from '@components/layouts'
import { AboutSection, HistorySection, ProjectsSection, TechnologiesSection } from '@components/modules'
import type { InferGetStaticPropsType, NextPage } from 'next'

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

			<HistorySection />

		</DefaultLayout>		
	
	</>)
}

export default HomePage