import { getMostRecentPost, getPreviousTwoPosts } from "@/lib/posts"
import Image from 'next/image'
import Link from 'next/link'
import { Inter,Poppins } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400','500','600','700','800','900'],
  subsets: ['latin']
})

function Posts() {
    const postOne = getMostRecentPost()
    const recentPosts = getPreviousTwoPosts()

  return (
    <div>
      {postOne.map(first => (
      <section>
        <div>
          <Image 
           src={first.image}
           alt='Main Image'
           width={1600}
           height={900}
           />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-7">
          <div>
            <h2 className="font-light text-6xl hover:text-blue-500"><Link href={`/posts/${first.id}`}>{first.title}</Link></h2>
            <p className={clsx('font-light text-xl py-2 md:py-4', inter.className)}>{first.date}</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis et distinctio, dolores, iure maxime atque voluptatem quas dolorem quis minima laudantium rerum aliquid qui tempore blanditiis, hic velit vero debitis.
          </div>
        </div>
      </section>

       ))}
      <section>
        <h2 className={clsx("text-bold text-4xl py-5", inter.className)}>Recent Posts</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {recentPosts.map(post =>(
            <div>
              <img className="w-full" src={post.image} alt="Alt Description"></img>
              <div className="font-light text-3xl py-2 hover:text-blue-400">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </div>
              <div className="pb-2">{post.date}</div>
              <div className="text-gray-700 text-base">{post.excerpt}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
    // <section className="mt-6 mx-auto max-w-2xl">
    //     <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
    //     <ul className="w-full">
    //         {posts.map(post => (
    //             <ListItem key={post.id} post={post}/>
    //         ))}
    //     </ul>
    //     <div>
    //           {postOne.map(item => (
    //             <h3 className="font-bold">{item.id}</h3>
    //           ))}
    //     </div>

    //     <div>
    //       <h3 className="font-bold text-xl">Next Two posts</h3>
    //       {recentPosts.map(post => (
    //         <h4>{post.title}</h4>
    //       ))}
              
    //     </div>
    // </section>
  )
}

export default Posts