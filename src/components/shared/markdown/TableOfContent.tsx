import { Box, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import slugify from 'slugify'

type TableOfContentProps = {
    markdown: string
}

export const TableOfContent: React.FC<TableOfContentProps> = (props) => {

    // const toc: {
    //     level: number,
    //     id: string,
    //     title: string,
    // }[] = []

    // const addToTOC = ({children, ...props}: React.PropsWithChildren<any>) => {

    //     const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1))

    //     if (level && children && typeof children[0] === 'string') {
    //         const id = children[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')
    //         toc.push({
    //             level,
    //             id,
    //             title: children[0],
    //         })
    //         return React.createElement(
    //             props.node.tagName, {id}, children
    //         )
    //     } else {
    //         return React.createElement(props.node.tagName, props, children)
    //     }
    // }

    // const TableOfContentInternal = () => {
    //     return (
    //         <List>
    //             {toc.map(({level, id, title}) => (
    //                 <ListItem key={id} ml={`${level - 2}em`}>
    //                     <a href={`#${id}`}>{title}</a>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     )
    // }

    return (<>
        <Box as={ReactMarkdown}
            allowedElements={[
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
            ]}
            components={{
                h2: TableOfContentLine,
                h3: TableOfContentLine,
                h4: TableOfContentLine,
                h5: TableOfContentLine,
                h6: TableOfContentLine,
            }}
        >
            {props.markdown}
        </Box>
        {/* <TableOfContentInternal />      */}
    </>)
}

const TableOfContentLine = ({ children, ...props }: React.PropsWithChildren<any>) => {
    const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1))
    const id = slugify(children[0])

    return <Box ml={`${level - 2}em`}>
        <Link 
            href={`#${id}`} 
            fontSize={`${1.2 - level/10}em`}
        >
            {children}
        </Link>
    </Box>
}