import './globals.css'
import Header from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: "Jason's Markdown Blog",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>  
        {children}
        <Footer/>
      </body>
    </html>
  )
}
