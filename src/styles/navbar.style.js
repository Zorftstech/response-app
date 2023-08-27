import { styled } from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
    width: 100%;
    padding: 1.4rem 3rem;
    
    @media (max-width: 992px) {
        padding: 1rem 1.5rem;
    }
    
    @media (max-width: 992px) {
        padding: 1rem;
        display: flex;

    }
    .mobile-bottom {
        @media (min-width: 1142px) {
            display: none;
        }

        @media (max-width: 992px) {
            margin-top: -160px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }
    }
`;
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }

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

    @media (max-width: 992px) {
        padding: 10px 20px;
        font-size: 14px;
    }
`;