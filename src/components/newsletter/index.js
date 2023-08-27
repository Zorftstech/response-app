'use client'

import { Button } from "@/styles/navbar.style"
import { MainWrapper, SubmitButton } from "@/styles/newsletter.style"
import { colors } from "@/styles/theme"
import React from "react"

export default function Newsletter() {
    return (
        <MainWrapper id="waitlist" >
            <h3>Stay Informed and Stay Ahead: Subscribe<br /> to Our App for Exclusive Automotive Tips,<br /> Updates, and Special Offers</h3>

            <form name="contact" method="POST" data-netlify-honeypot="bot-field" className="newsletter-form" data-netlify='true'>
                <input type="hidden" name="form-name" value="contact" />
                <input type='email' name='email' placeholder="Enter your email address" />
                <SubmitButton style={{ backgroundColor: '#fff', color: '#185BB5' }} type='submit' >Join Our Waitlist</SubmitButton>
            </form>
        </MainWrapper>
    )
}