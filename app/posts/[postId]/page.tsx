import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({postId: post.id}))
}
export async function generateMetadata({ params }: { params: { postId: string}}) {

    const posts = getSortedPostsData()  //deduped
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'An AI Image Daily Blog'
        }
    }
    return {
        title: post?.title,
        description: post?.excerpt
    }
}

export default async function Post({ params }: { params: { postId: string}}) {

    const posts = getSortedPostsData()  //deduped
    const { postId } = params

    if(!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml, image } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="mt-28 md:mt-0">
            <div className="mx-auto max-w-7xl p-7">
                <Image 
                src={image}
                alt='Main Image'
                width={1600}
                height={900}
            />
            </div>
            <div  className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
                <h1 className="text-7xl mt-4 mb-0 font-light">{title}</h1>
                <p className="pt-4 text-2xl">{pubDate}</p>
                <article>
                    <section dangerouslySetInnerHTML={{ __html:contentHtml}} />
                    <p>
                        <Link href="/"> Back to home</Link>
                    </p>
                </article>
            </div>
        </main>
    )
}