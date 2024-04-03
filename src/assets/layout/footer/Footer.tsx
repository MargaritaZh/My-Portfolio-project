import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Icon iconId={"copyright"} height={"24"} width={"24"} viewBox={"0 0 24 24"}/>
            <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: yellow;
    display: flex;
    justify-content: center;
`

const Copyright = styled.small``

