"use client"
import React from 'react'
import {MdOutlineMenu} from "react-icons/md";
import { logo } from '@/assets/home';
import Image from "next/image";
import styled from "styled-components";
import { colors } from '@/styles/theme';

export default function MobileNav({ toggleSideBar }) {
    return (
        <Wrapper>
          <Image src={logo} alt={'logo'}/>
          <div className='box'>
              <MdOutlineMenu
                  size={"1.4rem"}
                  color="white"
                  onClick={toggleSideBar}
              />
          </div>
            {/* <div className='flex-box'>
            </div> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: .8rem;
  .flex-box {

  }
  .box {
    background: ${colors.primaryColor};
    padding: .6rem; 
    border-radius: 3px;

    
  }
`;