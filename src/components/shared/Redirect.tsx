import { useRedirect } from '@core/hooks'
import React from 'react'

type RedirectProps = {}

export const Redirect: React.FC<RedirectProps> = () => {

    useRedirect()
	return <></>
}