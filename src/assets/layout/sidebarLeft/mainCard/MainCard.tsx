import React from 'react';
import smallMainPhoto from "../../../images/small-main-photo.webp";
import {SidebarMenu} from "../../sidebarRight/sidebarMenu/SidebarMenu";
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

const  StyledMainCard=styled.div``

const Image = styled.img``

const Name = styled.h3``

const Profession = styled.h4``
