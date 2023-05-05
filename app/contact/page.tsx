import { Inter } from "next/font/google"
import clsx from "clsx"

const inter = Inter({
    subsets: ['latin']
})

export const metadata = {
    title: "Contact Me",
    description: "Contact Me if you would like about AI Images and my prompts",
    openGraph: {
      title: 'Next.js',
      description: 'The React Framework for the Web',
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

const Contact = () => {
    return (
        <section className="mt-28 md:mt-0 max-w-7xl mx-auto px-7">
            <h2 className={clsx("text-4xl py-5 text-center",inter.className)}>Contact me</h2>
            <p>There should probably be a form here.</p>
        </section>
    )
}

export default Contact