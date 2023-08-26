"use client"

import AboutSection from '@/components/about'
import HomeSection from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <Newsletter />
    </main>
  )
}
