import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledSection = styled.section`
    outline: solid 1px green;
    background-color: ${theme.colors.primaryBg};
    margin-bottom: 70px;
    
    //&:first-child,
    &:nth-child(2) {
        background-color: ${theme.colors.secondaryBg};
        margin-bottom: 135px;
        
        @media ${theme.media.tablet} {
            margin-bottom: 86px;
        }
    }

    &:nth-child(6),
    &:nth-child(7){

        background-color: ${theme.colors.primaryBg};
    }
    
    
    @media screen and (min-width: 1440px) {
        max-width: 100%;
        width: 100%;
    }
`