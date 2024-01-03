import { Code, Heading, Link, List, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { Admonition } from '@components/shared'
import { Components } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord as codeTheme } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type OtherComponents = {
    admonition: typeof Admonition
}

const font = 'system-ui'
const headingFont = font

export const markdownOverrideTheme: Partial<Components> & OtherComponents = {

    p: (props) => <Text
        color='#cacaca'
        fontSize='1.1em'
        fontWeight='normal'
        fontFamily={font}
        my='2em'
    >{props.children}</Text>,

    li: (props) => <Text as='li'
        my='.5em'
        ml='.5em'
        fontSize='1.1em'
    >{props.children}</Text>,

    ul: (props) => <UnorderedList>
        {props.children}
    </UnorderedList>,

    ol: (props) => <OrderedList>
        {props.children}
    </OrderedList>,

    a: (props) => <Link
        color='blue.600'
        fontSize='1.1em'
        fontWeight='medium'
        fontFamily={font}
        lineHeight='1.75em'
        mb='1em'
    >{props.children}</Link>,

    h1: (props) => <Heading as='h1' fontSize='2em' my='1em' fontFamily={headingFont}>{props.children}</Heading>,
    h2: (props) => <Heading as='h2' fontSize='1.7em' fontWeight='700' my='1.5em' fontFamily={headingFont}>{props.children}</Heading>,
    h3: (props) => <Heading as='h3' fontSize='1.4em' fontWeight='600' my='1.2em' fontFamily={headingFont}>{props.children}</Heading>,
    h4: (props) => <Heading as='h4' fontSize='1.3em' my='.8em' fontWeight='400' color='text.secondary' fontFamily={headingFont}>{props.children}</Heading>,

    code: (props) => {
        const language = props.className?.replace('language-', '')

        if (!language) {
            return <Code
                borderRadius='5px'
                // bg='background.tertiary'
                padding='0.25em .5em'
            >
                {props.children}
            </Code>
        } else {
            return <CardLayout padding='1em' mb='2em'>
                {/* @ts-ignore */}
                <SyntaxHighlighter
                    language={language}
                    style={codeTheme}
                    customStyle={{
                        backgroundColor: 'transparent',
                        fontFamily: 'monospace !important'
                    }}
                >
                    {props.children}
                </SyntaxHighlighter>
            </CardLayout>
        }

    },

    admonition: Admonition
}
