"use client"
import './globals.css'
import React from "react";
import { useState } from 'react';
import SmallSidebar from '@/MobileSideBar/sidebar';
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Response App',
//   description: 'Get back on the road in no time!.',
// }

export default function RootLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
	const toggleSideBar = () => {
		setSidebarOpen(!isSidebarOpen);
	}; 

  return (
    <html lang="en">
      <title>Response App | Waitlist</title>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <SmallSidebar
            isSidebarOpen={isSidebarOpen}
            toggleSideBar={toggleSideBar}
          />
          <Navbar toggleSideBar={toggleSideBar} />
            {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
