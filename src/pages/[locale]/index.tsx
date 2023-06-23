import { DefaultLayout } from '@components/layouts'
import { AboutSection, ContactSection, HeroBanner, HistorySection, ProjectsSection, TechnologiesSection } from '@components/modules'
import { Footer } from '@components/shared'
import { getLocalizedPathSlugs } from '@core/utils/functions'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Locale } from '@content'

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
			title='Bartholomé Gili - Portfolio'
            locale={props.locale}
		>

			<HeroBanner />

			<AboutSection />

			<TechnologiesSection />

			<ProjectsSection />

			<HistorySection />

            <ContactSection />

            <Footer />

		</DefaultLayout>		
	
	</>)
}

export default HomePage