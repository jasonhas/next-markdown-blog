import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents)

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            excerpt: matterResult.data.excerpt,
            date: matterResult.data.date,
            image: matterResult.data.cover_image
        }

        return blogPost
    })

    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)
}

export function getMostRecentPost() {
    let posts = getSortedPostsData();
    let recentPost = posts.slice(0,1)

    return recentPost
}

export function getPreviousTwoPosts() {
    const posts = getSortedPostsData()
    let nextTwoPost = posts.slice(1,3)

    return nextTwoPost
}

export async function getPostData(id: string) {
    // Get file names under /posts
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    const blogPostWithHtml: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        date: matterResult.data.date,
        image: matterResult.data.cover_image,
        contentHtml,
    }

    return blogPostWithHtml
    
}