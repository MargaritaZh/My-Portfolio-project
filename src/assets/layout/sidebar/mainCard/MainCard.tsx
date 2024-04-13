import React from 'react';
import smallMainPhoto from "../../../images/small-main-photo.webp";
import {SidebarMenu, StyledSidebarMenu} from "../../../../components/menu/sidebarMenu/SidebarMenu";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


const menuIconsId = ["facebook", "instagram", "twitter", "linkedin", "yourtube", "dribble"]

export const MainCard = () => {
    return (
        <StyledMainCard>
            <Image src={smallMainPhoto} alt="main photo"/>
            <Name>Rayan Adlardard</Name>
            <Profession>Font-end Developer</Profession>
            <SidebarMenu menuIconsId={menuIconsId} width={"14"} height={"14"} viewBox={"0 0 14 14"}/>
        </StyledMainCard>
    );
};

const  StyledMainCard=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 2px solid ${theme.colors.primaryBg};
    


    ${StyledSidebarMenu} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        margin-top: 15px;

        a {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: ${theme.colors.accent};
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`

const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 30px;
`

const Name = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`

const Profession = styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
`
