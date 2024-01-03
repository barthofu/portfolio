import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { Locale } from '@content'
import { markdownOverrideTheme } from '@core/theme/markdown'
import { ArticleData } from '@core/types/article'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import remarkDirective from "remark-directive"
import { remarkAdmonition } from '@core/lib/remark'

const getPaths = (locale: Locale) => {

    const files = fs.readdirSync(`./content/articles/${locale}`).filter(file => !file.startsWith('.') || !file.startsWith('_'))
    const slugs = files.map((fileName: string) => fileName.replace(/\.mdx?$/, ''))

    return slugs.map(slug => ({
        params: {
            slug,
            locale
        }
    }))
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug, locale } = params!
    if (!slug) throw new Error('Bad parameters: no \'slug\'')
    if (!locale) throw new Error('Bad parameters: no \'locale\'')

    const filePath = `./content/articles/${locale}/${slug}`
    let fileContent: string
    try {
        fileContent = fs.readFileSync(filePath + '.md', 'utf8')
    } catch (e) {
        try {
            fileContent = fs.readFileSync(filePath + '.mdx', 'utf8')
        }
        catch (e) {
            throw new Error('Article not found')
        }
    }

    const { data, content } = matter(fileContent)

    const article = {
        slug,
        locale,
        content,
        ...data
    } as ArticleData

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = [
        ...getPaths('fr'),
        ...getPaths('en')
    ]

    return {
        paths,
        fallback: false
    }
}

type ArticlePageProps = {
    article: ArticleData
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {

    return (<>

        <Head>
            <title>{article.title}</title>
            {article.description && <meta
                name='description'
                content={article.description}
            />}
            <link rel='icon' type='image/png' href='https://cdn-icons-png.flaticon.com/512/3500/3500995.png' />
        </Head>

        <Flex
            maxW='full'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            py='5em'
            background='background.primary'
        >

            {/* {article.coverUrl &&
                <Image
                    src={article.coverUrl}
                    alt={article.title}
                    width='100%'
                    maxH='300px'
                    objectFit='cover'
                    objectPosition='center'
                    position='absolute'
                    top='0'
                    left='0'
                    sx={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                    }}
                >

                </Image>
            } */}

            <Link href='/'>
                <Text
                    fontSize='3xl'
                    mb='1em'
                    color='gray.200'
                    cursor='pointer'
                    transition='.2s linear'
                    _hover={{ opacity: '.7' }}
                >
                    <AiFillHome />
                </Text>
            </Link>

            <Box
                maxW='75ch'
                overflow='hidden'
                className='article'
            >

                <Text as='h1'
                    fontSize={{ base: '3xl', lg: '4xl' }}
                    lineHeight='1.3em'
                    fontWeight='bold'
                    mb='.5em'
                >
                    {article.title}
                </Text>

                <Text
                    fontSize='.8em'
                    fontWeight='semibold'
                    mb='2em'
                    opacity='.5'
                >
                    {article.authorUrl ?
                        <Text as='a'
                            href={article.authorUrl}
                            color='#fff'
                            _hover={{
                                textDecoration: 'underline',
                            }}
                        >{article.author}</Text>
                        : article.author
                    }
                    {article.date && ` • ${article.date}`}
                </Text>

                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm, remarkDirective, remarkAdmonition]}
                    components={markdownOverrideTheme}
                >
                    {article.content}
                </ReactMarkdown>

            </Box>
        </Flex>
    </>)
}

export default ArticlePage