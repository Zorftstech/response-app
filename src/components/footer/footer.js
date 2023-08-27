'use client'
import React from "react";
import Image from "next/image";
import { logo } from "@/assets/home";
import { Wrapper, Logo, FooterLinks, FootLink, SocialIcons, Icons } from "@/styles/footer.style";
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function Footer() {
    return (
        <Wrapper>
            <Logo>
                <Image src={logo} alt='logo' />
                <h3>response</h3>
            </Logo>

            <FooterLinks>
                <div>
                    <h3>Product</h3>
                    <FootLink href="#">Features</FootLink>
                    <FootLink href="#">Pricing</FootLink>
                    <FootLink href="#">API</FootLink>
                </div>
                <div>
                    <h3>Company</h3>
                    <FootLink href="#">About us</FootLink>
                    <FootLink href="#">Blog</FootLink>
                    <FootLink href="#">Team</FootLink>
                </div>
                <div>
                    <h3>Support</h3>
                    <FootLink href="#">Terms of Services</FootLink>
                    <FootLink href="#">Privacy Policy</FootLink>
                    <FootLink href="#">Cookies Policy</FootLink>
                    <FootLink href="#">Help</FootLink>
                </div>
            </FooterLinks>

            <SocialIcons>
                <Icons href="#" >
                    <BsLinkedin />
                </Icons>

                <Icons href="#">
                    <BsInstagram />
                </Icons>

                <Icons href="https://twitter.com/ResponseApp_" target={'_blank'}>
                    <BsTwitter />
                </Icons>
            </SocialIcons>

            
        </Wrapper>
    )
}