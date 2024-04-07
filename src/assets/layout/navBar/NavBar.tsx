import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {SidebarMenu} from "../../../components/menu/sidebarMenu/SidebarMenu";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";


const menuIconsId = ["home", "services", "cv", "portfolio", "blog", "contact"]

export const NavBar = () => {
    return (
        <StyledNavBar>
            <FlexWrapper direction={"column"} align={"center"}>
                <Logo iconId={"contrast"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                <SidebarMenu menuIconsId={menuIconsId} width={"18"} height={"18"} viewBox={"0 0 18 18"}/>
            </FlexWrapper>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.aside`
    background-color: ${theme.colors.secondaryBg};
    max-height: 100vh;
    width: 108px;
    padding: 52px 0;
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;

    outline: solid 1px orangered;
`