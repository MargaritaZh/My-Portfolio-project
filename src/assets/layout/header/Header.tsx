import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {HeaderMenu} from "../../../components/menu/headerMenu/HeaderMenu";
import {Container} from "../../../components/Container";


const items = ["Home", "Services", "Education", "Portfolio", "Blog", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
                <Logo iconId={"coding"} height={"68"} width={"68"} viewBox={"0 0 68 68"}/>
                <HeaderMenu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #a9d5a9;
    display: flex;
    justify-content: space-between;
`
