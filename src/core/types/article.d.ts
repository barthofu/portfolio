import { Locale } from "@content"

type ArticleMetaData = {
    title: string
    author?: string
    authorUrl?: string
    coverUrl?: string
    description?: string 
    date?: string
}

type ArticleData = ArticleMetaData & {
    slug: string
    locale: Locale
    fileName?: string
    content: string
}

type SanitizedArticleData = ArticleMetaData & {
    slug: string
}