'use client'

import { mechanic, mechanicImg, rev, revImg } from "@/assets/home"
import Image from "next/image"
import React from "react"
import { Section } from "@/styles/home.style"

export default function AboutSection() {
    return (
      <Section>
        <section>
            <Image src={revImg} alt='mechanic working' />

            <div className="section-text">
                <Image src={mechanic} alt='icon' className='icon-img'/>
                <h3>Revolutionizing Roadside Assistance</h3>
                <p>Transforming the Way Drivers Handle Unforeseen Vehicle Emergencies with Fast, Reliable, and Technologically Advanced Solutions</p>
            </div>
        </section>

        <section>
            <div className="section-text">
                <Image src={rev} alt='icon' className='icon-img' />
                <h3>Expert Solutions at Your Fingertips</h3>
                <p>Seamlessly Connect with Skilled Automotive Professionals for Swift and Effective Problem Solving anytime and at anywhere</p>
            </div>

            <Image src={mechanicImg} alt='mechanic working' />
        </section>
      </Section>
    )
  }
  