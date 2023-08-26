import { styled } from "styled-components";
import { colors } from "./theme";


export const MainWrapper = styled.div`
    background: ${colors.primaryColor};
    color: ${colors.lightColor};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;

    padding: 6rem 0;

    h3 {
        color: #FFF;
        text-align: center;

        font-size: 40px;
        font-weight: 500;
        line-height: normal;
    }

    .newsletter-form {
        display: flex;
        justify-items: content;
        align-items: center;

        gap: 1rem;
    }

    input {
        width: 450px;

        padding: 20px 40px;
        border: 1.5px solid ${colors.lightColor};
        border-radius: 4px;

        ::placeholder {
            color: ${colors.textColor};
        }
        ::focus {
            border: none;
        }
    }

`;