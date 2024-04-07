import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";

type SidebarMenuPropsType = {
    menuIconsId: Array<string>
    width: string
    height: string
    viewBox: string
}

export const SidebarMenu = (props: SidebarMenuPropsType) => {
    return (
        <StyledSidebarMenu>
            {props.menuIconsId.map((item, index) => {
                return <ListItem key={index}>
                    <Link href="">
                        <Icon iconId={item} width={props.width} height={props.height} viewBox={props.viewBox}/>
                    </Link>
                </ListItem>
            })}
        </StyledSidebarMenu>
    );
};

export const StyledSidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 65px;
    margin-top: 100px;

    border: 1px solid #265e26;
`

const ListItem = styled.li``

const Link = styled.a``

