'use client'

import React from "react";
import { Container, Wrapper, NavLinks, Navlink, Button, Logo } from "@/styles/navbar.style";
import Image from "next/image";
import { logo } from "@/assets/home";
import MobileNav from "./mobilenav";

export default function Navbar({ toggleSideBar }) {
    return (
        <Container>
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

                <Button href="#waitlist">
                    Join Our Waitlist
                </Button>

            </Wrapper>
            <div className="mobile-bottom">
                <MobileNav toggleSideBar={toggleSideBar} />
            </div>
        </Container>
    )
}