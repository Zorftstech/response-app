'use client'

import { Button } from "@/styles/navbar.style"
import { MainWrapper } from "@/styles/newsletter.style"
import { colors } from "@/styles/theme"
import React from "react"

export default function Newsletter() {
    return (
        <MainWrapper>
            <h3>Stay Informed and Stay Ahead: Subscribe<br /> to Our App for Exclusive Automotive Tips,<br /> Updates, and Special Offers</h3>

            <div className="newsletter-form">
                <input type='email' placeholder="Enter your email address" />
                <Button style={{ backgroundColor: '#fff', color: '#185BB5' }}>Join Wailist</Button>
            </div>
        </MainWrapper>
    )
}