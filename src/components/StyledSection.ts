import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledSection = styled.section`
    max-width: 970px;
    width: 100%;
    min-height: 100%;
    outline: solid 1px green;
    background-color: ${theme.colors.primaryBg};

    &:first-child {
        background-color: ${theme.colors.secondaryBg};
    }

    @media screen and (min-width: 1440px) {
        max-width: 100%;
        width: 100%;
    }
`