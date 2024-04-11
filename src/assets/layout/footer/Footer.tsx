import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Icon iconId={"copyright"} height={"24"} width={"24"} viewBox={"0 0 24 24"}/>
                <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: yellow;
    display: flex;
    justify-content: center;
`

const Copyright = styled.small``

