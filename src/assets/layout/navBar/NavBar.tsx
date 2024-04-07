import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {SidebarMenu} from "../../../components/menu/sidebarMenu/SidebarMenu";
import styled from "styled-components";



const menuIconsId=["home","services","cv","portfolio","blog","contact"]

export const NavBar = () => {
    return (
        <StyledNavBar>
            <Logo iconId={"contrast"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            <SidebarMenu menuIconsId={menuIconsId} width={"18"} height={"18"} viewBox={"0 0 18 18"}/>
        </StyledNavBar>
    );
};

const StyledNavBar =styled.aside`
    background-color: #c781a4;
    min-height: 100vh;
    width: 108px;
    outline: solid 1px orangered;
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
`