import { trpc } from '@lib/trpc'
import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'

const HomePage: NextPage = () => {

	const { data: users } = trpc.users.getAll.useQuery()

	return (<>

		<DefaultLayout
			title='Home'
		>

			{JSON.stringify(users)}

		</DefaultLayout>		
	
	</>)
}

export default HomePage