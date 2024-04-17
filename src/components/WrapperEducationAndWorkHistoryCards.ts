import styled from "styled-components";
import {theme} from "../styles/Theme";

export const WrapperEducationAndWorkHistoryCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.secondaryBg};
    gap: 28px;
    width: 100%;
    padding: 42px 29px 42px 37px;

    @media ${theme.media.navMenu} {
        gap: 30px;
        padding: 30px 32px;
    }
`