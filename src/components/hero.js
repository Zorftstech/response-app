"use client"
import React from "react"
import { HeroWrapper } from "@/styles/home.style"
import { Button } from "@/styles/navbar.style"

export default function HomeSection() {
  return (
    <HeroWrapper>
        <h3>One app that provides solutions<br /> for all your logistics problems</h3>
        <p>Get back on the road in no time! Connect with our team of expert automobile<br /> technicians. Download our app now and experience hassle-free driving</p>
        <Button href='#waitlist'>
            Join Our Waitlist
        </Button>
    </HeroWrapper>
  )
}