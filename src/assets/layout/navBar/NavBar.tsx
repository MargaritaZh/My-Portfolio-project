import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {SidebarMenu, StyledSidebarMenu} from "../../../components/menu/sidebarMenu/SidebarMenu";
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

    @media (max-width: 768px) {
        ${FlexWrapper} {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 25px;
        }

        ${StyledSidebarMenu} {
            
            flex-direction: row;
            gap: 10px;
            margin-top: 0;
            
            outline: 1px solid rebeccapurple;
        }

        top: auto; /* Отменяем фиксацию сверху */
        bottom: 0; /* Зафиксируем панель внизу экрана */
        left: 0; /* Зафиксируем панель по левому краю */
        right: 0; /* Зафиксируем панель по правому краю */
        width: 100%; /* Растягиваем панель на всю ширину экрана */
        height: 80px; /* Задаем высоту панели */
        padding: 0; /* Убираем отступы */
    }
`