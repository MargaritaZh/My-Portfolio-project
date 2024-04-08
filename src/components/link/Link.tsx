import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";



export const Link = (props:{
    text:string
}) => {
    return (
            <StyledServiceLink href="">
                <Text>{props.text}</Text>
                <Icon iconId="arrow" height="20" width="20" viewBox="0 0 20 20"/>
            </StyledServiceLink>
    );
};

const StyledServiceLink = styled.a``

const Text = styled.span`
    color: ${theme.colors.accent};
    font-family: "Roboto",sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
`

