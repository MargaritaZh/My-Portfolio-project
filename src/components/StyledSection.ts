import styled from "styled-components";
import {theme} from "../styles/Theme";
import {WrapperEducationAndWorkHistoryCards} from "./WrapperEducationAndWorkHistoryCards";
import {SectionTitle} from "./SectionTitle";

export const StyledSection = styled.section`
    outline: solid 1px green;
    background-color: ${theme.colors.primaryBg};
    margin-bottom: 70px;
    
    &:first-child {
        background-color: ${theme.colors.secondaryBg};
        margin-bottom: 135px;
        
        @media ${theme.media.tablet} {
            margin-bottom: 86px;
        }
    }

    &:nth-child(5),
    &:nth-child(6){

        background-color: ${theme.colors.secondaryBg};
    }
    
    ${SectionTitle}{
        background-color: ${theme.colors.primaryBg};
        width: 100%;
    }



    @media screen and (min-width: 1440px) {
        max-width: 100%;
        width: 100%;
    }
`