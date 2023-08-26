import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Response App',
  description: 'Get back on the road in no time!.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
            {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
