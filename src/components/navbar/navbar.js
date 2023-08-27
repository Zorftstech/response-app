'use client'

import React from "react";
import { Container, Wrapper, NavLinks, Navlink, Button, Logo } from "@/styles/navbar.style";
import Image from "next/image";
import { logo } from "@/assets/home";
import MobileNav from "./mobilenav";

export default function Navbar({ toggleSideBar }) {
    return (
        <>
        <Wrapper>
            <Logo>
                <Image src={logo} alt='logo' />
                <h3>response</h3>
            </Logo>

            <NavLinks>
                <Navlink href="#">Our services</Navlink>
                <Navlink href="#">About us</Navlink>
                <Navlink href="#">Team</Navlink>
            </NavLinks>

            <Button href="#waitlist">
                Join Our Waitlist
            </Button>
        </Wrapper>
        <Container>
            <div className="mobile-bottom">
                <MobileNav toggleSideBar={toggleSideBar} />
            </div>
        </Container>
        </>
    )
}