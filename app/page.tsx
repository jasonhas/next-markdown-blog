import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './components/Posts'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <main className='container mx-auto max-w-7xl p-7'>
      <Posts/>
    </main>
  )
}
 