import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionDescription = styled.p`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    color:${theme.colors.fontDescription};
    
    max-width: 440px;
    width: 100%;
    
    margin-bottom: 50px;
`