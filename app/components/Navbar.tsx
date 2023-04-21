import Link from 'next/link'
import { Inter, Poppins } from 'next/font/google'
import clsx from 'clsx'
export const inter = Inter({
    weight: ['400','500','600'],
    subsets: ['latin']
})

export const poppin = Poppins({
    weight: ['400','500','600','700','800','900'],
    subsets: ['latin']
})

const Navbar = () => {
    return (
        <nav className={clsx(inter.className)}>
            <div className="container mx-auto max-w-7xl px-7">
                <div className='flex flex-col md:flex-row items-center md:justify-between mt-8 md:mt-16 mb-4 md:mb-12'>
                    <h1 className='text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'><Link href="/">Blog.</Link></h1>
                    <h4 className={clsx(poppin.className, ' text-center md:text-left text-lg mt-5 md:pl-8')}>A Blog of Daily AI Images</h4>
                </div>
            </div>
        </nav>
    )
}

export default Navbar