import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";

const items = ["Home", "Services", "Education", "Portfolio", "Blog", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo iconId={"coding"} height={"68"} width={"68"} viewBox={"0 0 68 68"}/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #a9d5a9;
    display: flex;
    justify-content: space-between;
`
