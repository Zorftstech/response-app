'use client'

import React from "react";
import { Wrapper, NavLinks, Navlink, Button, Logo } from "@/styles/navbar.style";
import Image from "next/image";
import { logo } from "@/assets/home";

export default function Navbar() {
    return (
        <Wrapper>
            <Logo>
                <Image src={logo} alt='logo' />
                <h3>response</h3>
            </Logo>

            <NavLinks>
                <Navlink>Our services</Navlink>
                <Navlink>About us</Navlink>
                <Navlink>Team</Navlink>
            </NavLinks>

            <Button>
                Join Waitlist
            </Button>
        </Wrapper>
    )
}