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

          <h3>response</h3>

          <div className='box'>
              <MdOutlineMenu
                  size={"1.4rem"}
                  color="white"
                  onClick={toggleSideBar}
              />
          </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center; 

    gap: 3rem;

    h3 {
      font-size: 22px;
      font-weight: 600;
      color: ${colors.primaryColor};

      /* margin: 0 4rem; */
    }

  .box {
    /* margin-left: 170px; */
    background: ${colors.primaryColor};
    padding: .6rem; 
    border-radius: 3px;
    cursor: pointer;
  }
`;