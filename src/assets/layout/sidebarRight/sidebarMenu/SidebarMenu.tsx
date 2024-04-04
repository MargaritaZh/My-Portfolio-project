import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type SidebarMenuPropsType = {
    menuIconsId: Array<string>
}

export const SidebarMenu = (props: SidebarMenuPropsType) => {
    return (
        <StyledSidebarMenu>
            {props.menuIconsId.map((item, index) => {
                return <li key={index}>
                    <a href="">
                        <Icon iconId={item} width={"18"} height={"18"} viewBox={"0 0 18 18"}/>
                    </a>
                </li>
            })}
        </StyledSidebarMenu>
    );
};

const StyledSidebarMenu = styled.ul`
    border: 1px solid red;
`

