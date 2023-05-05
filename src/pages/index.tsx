import type { InferGetStaticPropsType, NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'
import { AboutSection, Section, TechnologiesSection } from '@components/modules'
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

			<AboutSection 
				about={props.about}
				skills={props.skills}
			/>

			<TechnologiesSection 
				technologies={props.technologies}
				types={props.types}	
			/>

		</DefaultLayout>		
	
	</>)
}

export default HomePage