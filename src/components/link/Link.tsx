import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";



export const Link = (props:{
    text:string
}) => {
    return (
        <StyledServicLink href="">
            <Text>{props.text}</Text>
            <Icon iconId="arrow" height="20" width="20" viewBox="0 0 20 20"/>
        </StyledServicLink>
    );
};


const StyledServicLink = styled.a``

const Text = styled.span``

