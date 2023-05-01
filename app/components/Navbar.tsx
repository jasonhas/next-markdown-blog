"use client"
import React, { useState} from 'react'
import Link from 'next/link'
import { Inter, Poppins } from 'next/font/google'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
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

    const Links = [
        {name: "Home", link:"/"},
        {name: "Blog", link:"/blog"},
        {name: "About", link:"/about"},
        {name: "Contact", link:"/contact"},
        {name: "Search", link:"/search"},
    ]

    let [open,setOpen]=useState(false)
    let button
    if(open) {
        button = <FaRegWindowClose/>
    } else {
        button = <FaBars/>
    }

    return (
        <nav className={clsx(inter.className)}>
                <div className="container mx-auto max-w-7xl px-7 hidden lg:block">
                    <div className="pt-0">
                        <ul className='flex justify-end text-end'>
                            {
                                Links.map((Link) => (
                                    <li key={Link.name} className='my-7 ml-4'>
                                        <a href={Link.link} className=''>{Link.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:justify-between mt-4 md:mt-8 mb-4 md:mb-12'>
                        <h1 className='text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'><Link href="/">Blog.</Link></h1>
                        <h4 className={clsx(poppin.className, ' text-center md:text-left text-lg mt-5 md:pl-8')}>A Blog of Daily AI Images</h4>
                    </div>
                </div>
                <div className='lg:hidden shadow-md w-full fixed top-0 left-0'>
                    <div className='md:flex items-center bg-white md:px-10 py-4'>
                        <div className='font-bold text-4xl cursor-pointer flex items-center px-7'>
                            Blog.
                        </div>
                        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
                            {button}
                        </div>
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 opacity-100':'top-[-490px'} md:opacity-100 opacity-0`}>
                            {
                                Links.map((Link)=>(
                                    <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                        <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
        </nav>
    )
}

export default Navbar