import { HStack, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

type ProjectLinksProps = {
    githubUrl?: string
    demoUrl?: string
}

export const ProjectLinks: React.FC<ProjectLinksProps> = (props) => {

	return (<>

        <HStack spacing='1em' zIndex='10'>
            {props.githubUrl &&
                <Link href={props.githubUrl} target='_blank'>
                    <Icon as={FiGithub} fontSize='1.5rem'/>
                </Link>
            }
            {props.demoUrl && 
                <Link href={props.demoUrl} target='_blank'>
                    <Icon as={BsPlay} color='green.400' fontSize='2.5rem' fontWeight='bolder'></Icon>
                </Link> 
            }
        </HStack>
    </>)
}