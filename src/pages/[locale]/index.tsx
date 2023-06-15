import { DefaultLayout } from '@components/layouts'
import { AboutSection, HeroBanner, HistorySection, ProjectsSection, TechnologiesSection } from '@components/modules'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Locale } from '@content'
import { getLocalizedPathSlugs } from '@core/utils/functions'

export const getStaticPaths: GetStaticPaths = async () => {

    const pathsWithLocale = getLocalizedPathSlugs()

    return {
        paths: pathsWithLocale,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({  params }) => {

    return {
        props: {
            locale: params!.locale
        }
    }
}

type HomePageProps = {
    locale: Locale
}

const HomePage: NextPage<HomePageProps> = (props) => {

	return (<>

		<DefaultLayout
			title='Home'
            locale={props.locale}
		>

			<HeroBanner />

			<AboutSection />

			<TechnologiesSection />

			<ProjectsSection />

			<HistorySection />

		</DefaultLayout>		
	
	</>)
}

export default HomePage