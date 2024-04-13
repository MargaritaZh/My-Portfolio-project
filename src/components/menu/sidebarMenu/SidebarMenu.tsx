import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {theme} from "../../../styles/Theme";

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
                return (
                    <ListItem key={index}>
                        <Link href="">
                            <Icon iconId={item} width={props.width} height={props.height} viewBox={props.viewBox}/>
                        </Link>
                    </ListItem>
                )
            })}
        </StyledSidebarMenu>
    );
};

export const StyledSidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 43px;
    margin-top: 215px;
    outline: 1px solid rebeccapurple;
`

const ListItem = styled.li`


`

const Link = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${theme.colors.accent};
    }
    
`

