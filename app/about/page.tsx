import { Inter } from "next/font/google"
import clsx from "clsx"

const inter = Inter({
    subsets: ['latin']
})
const About = () => {
    return (
        <section className="max-w-7xl mx-auto mt-28 md:mt-0 px-7">
            <h1 className={clsx("text-4xl py-5 text-center",inter.className)}>About Me</h1>
        </section>
    )
}

export default About