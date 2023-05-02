import { getSortedPostsData } from '@/lib/posts'

const Archive = () => {
    const Posts = getSortedPostsData()

    return (
        <section className="max-w-7xl mx-auto px-7">
        <h2>Archive Page</h2>
        <ul>
            {Posts.map(item => (
                <li key={item.id}>
                    <a href={`/posts/${item.id}`}>{item.title}</a> - {item.date} </li>
            ))}
        </ul>
        </section>

    )
}

export default Archive