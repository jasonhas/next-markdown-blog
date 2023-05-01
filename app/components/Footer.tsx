import Link from 'next/link'
import { FaGithub, FaTwitter,FaInstagram } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import clsx from 'clsx'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['600'],
    style: ['italic','normal'],
    subsets: ['latin']
})
const Footer = () => {
    return (

        <footer className='container mx-auto flex justify-center flex-col items-center h-60 gap-10'>
        <nav>
          <ul className='flex gap-6 text-5xl'>
            <li>
              <a href='#'>
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaGithub/>
              </a>
            </li>
            <li>
              <a href="#">
                <TfiYoutube/>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaInstagram/>
              </a>
            </li>
          </ul>
        </nav>
        <p className='text-sm text-slate-500'>&copy; 2023 Jason Hasselkus. All rights reserved.</p>
      </footer>
    )
}

export default Footer