import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {SidebarMenu} from "./sidebarMenu/SidebarMenu";
import styled from "styled-components";



const menuIconsId=["home","services","cv","portfolio","blog","contact"]
export const SidebarRight = () => {
    return (
        <StyledSidebarRight>
            <Logo iconId={"contrast"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            <SidebarMenu menuIconsId={menuIconsId}/>
        </StyledSidebarRight>
    );
};

const StyledSidebarRight =styled.aside`

    background-color: #d0b6c3;
    min-height: 30vh;
`