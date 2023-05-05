import { getSortedPostsData } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins, Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets:['latin']})
const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin'],
})

export const metadata = {
    title: "My AI Image Archive",
    openGraph: {
      title: 'AI Image Daily Archive',
      description: 'Archive for AI Daily Image',
      url: 'https://nextjs.org',
      siteName: 'Next.js',
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
};

const Archive = () => {
    const Posts = getSortedPostsData()

    return (
        <section className="max-w-7xl mx-auto px-7 mt-28">
        <h2 className={clsx('text-center font-bold text-4xl py-5',inter.className)}>Archives</h2>
        <div className='py-4 grid md:grid-cols-3 gap-4'>
        {Posts.map(post=> (
            <div className="grid grid-cols-1 text-center py-7 justify-self-center">
                <div className='font-light text-2xl md:text-3xl text-center pb-4'>{post.date}</div>
                <Image src={post.image} alt="thumbnail" width={350} height={350} className='m-auto'/>
                <h4 className='mt-3'><Link href={`/posts/${post.id}`} className={clsx("hover:text-blue-500 text-3xl",poppins.className, poppins.style)}>{post.title}</Link></h4>
            </div>
        ))}
        </div>
        </section>

    )
}

export default Archive