import React from 'react';
import smallMainPhoto from "../../../images/small-main-photo.webp";
import {SidebarMenu, StyledSidebarMenu} from "../../../../components/menu/sidebarMenu/SidebarMenu";
import styled from "styled-components";


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
    ${StyledSidebarMenu} {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 20px
    }


`

const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;

`

const Name = styled.h3``

const Profession = styled.h4``
