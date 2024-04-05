import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type SidebarMenuPropsType = {
    menuIconsId: Array<string>
    width:string
    height:string
    viewBox:string
}

export const SidebarMenu = (props: SidebarMenuPropsType) => {
    return (
        <StyledSidebarMenu>
            {props.menuIconsId.map((item, index) => {
                return <li key={index}>
                    <a href="">
                        <Icon iconId={item} width={props.width} height={props.height} viewBox={props.viewBox}/>
                    </a>
                </li>
            })}
        </StyledSidebarMenu>
    );
};

const StyledSidebarMenu = styled.ul`
    border: 1px solid red;
`

