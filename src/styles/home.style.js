import { styled } from "styled-components";
import { colors } from "./theme";


export const HeroWrapper = styled.section`
    padding: 2rem 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1.8rem;

    h2 {
        color: ${colors.darkColor};

        text-align: center;
        font-size: 46px;
        font-weight: 700;
        line-height: normal;
    }
    p {
        color: ${colors.textColor};

        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Section = styled.section`
    padding: 0 4rem;

    section {
       padding: 6rem 0;

        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: row;
        gap: 1.5rem;
    }


    img {
        width: 46%;
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
        }

        p {
            color: ${colors.textColor};

            font-size: 28px;
            font-weight: 400;
            line-height: 40px; /* 142.857% */
        }
    }
`;
