import { styled } from "styled-components";
import { colors } from "./theme";

export const Wrapper = styled.div`
    padding: 1.4rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   font-size: 24px;
   font-weight: 600;
   color: ${colors.primaryColor};

`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    color: ${colors.textColor};
`;

export const Navlink = styled.a`
    cursor: pointer;
    font-weight: 400;

    :hover {
        font-weight: 700;
        color: ${colors.darkColor};

        trasition: all ease-in-out 3s;
    }
`;

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-center: center;
    gap: 10px;

    text-align: center;
    
    padding: 20px 40px;
    border-radius: 4px;
    background: ${colors.primaryColor};
    color: ${colors.lightColor};
`;