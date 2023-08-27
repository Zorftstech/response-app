import { styled } from "styled-components";
import { colors } from "./theme";

export const Wrapper = styled.div`
    padding: 4rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 992px) {
        justify-content: start;
        align-items: start;
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: 600;
    color: ${colors.primaryColor};

    @media (max-width: 992px) {
        margin-bottom: 1rem;
    }
`;

export const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    color: ${colors.textColor};

    div {
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 18px;
            font-weight: 600;
        }
    }

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }

`;

export const FootLink = styled.a`
    cursor: pointer;
    font-weight: 400;
    margin-top: 1rem;
    color: ${colors.textColor};

    :hover {
        font-weight: 700;
        color: ${colors.darkColor};

        trasition: all ease-in-out 3s;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;

    @media (max-width: 992px) {
        margin-top: 1.4rem;
    }
`;

export const Icons = styled.a`
    font-size: 24px;
`;
