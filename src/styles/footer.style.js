import { styled } from "styled-components";
import { colors } from "./theme";

export const Wrapper = styled.div`
    padding: 4rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: start;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: 600;
    color: ${colors.primaryColor};
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

`;

export const FootLink = styled.a`
    cursor: pointer;
    font-weight: 400;
    margin-top: 1rem;
    color: ${colors.textColor};
    font-weight: 400;

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
`;

export const Icons = styled.a`
    font-size: 24px;
`;
