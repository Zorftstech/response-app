import { styled } from "styled-components";
import { colors } from "./theme";


export const HeroWrapper = styled.section`
    padding: 5rem 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1.8rem;


    @media (max-width: 992px) {
        padding: 2rem 1rem;
        gap: 1rem;
    }

    h3 {
        color: ${colors.darkColor};

        text-align: center;
        font-size: 46px;
        font-weight: 700;
        line-height: normal;

        @media (max-width: 992px) {
            font-size: 36px;
            line-height: 46px;
        }
    }
    p {
        color: ${colors.textColor};

        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: normal;

        @media (max-width: 992px) {
            font-size: 16px;
            line-height: 28px;
        }
    }
`;

export const Section = styled.section`
    padding: 0 4rem;
    
    @media (max-width: 992px) {
        padding: 0 1rem;

        .section-2 {
            flex-direction: column-reverse;
        }
    }

    section {
       padding-bottom: 6rem;

        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: row;
        gap: 1.5rem;

        @media (max-width: 992px) {
            padding-bottom: 1.5rem;
            
            justify-content: center;
            align-items: center;
            flex-direction: column;

            gap: .5rem;
        }
    }


    img {
        width: 46%;

        @media (max-width: 992px) {
            width: 100%;
            height: 400px;
        }
    }

    .section-text {
        width: 46%;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        flex-direction: column;
        gap: 1rem;

        text-align: start;

        padding: 1rem 0;

        @media (max-width: 992px) {
            width: 100%;
            padding: 0;
        }

        .icon-img {
            align-self: start;
            width: 40px;
            height: 40px;
        }

        h3 {
            color: ${colors.darkColor};

            font-size: 46px;
            font-weight: 700;
            line-height: 56px; /* 100% */

            @media (max-width: 992px) {
                font-size: 26px;
                line-height: 34px; 
            }
        }

        p {
            color: ${colors.textColor};

            font-size: 28px;
            font-weight: 400;
            line-height: 40px; /* 142.857% */

            @media (max-width: 992px) {
                font-size: 16px;
                line-height: 28px;
            }
        }
    }

    @media (max-width: 992px) {
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        width: 100%;
    }
    
`;
