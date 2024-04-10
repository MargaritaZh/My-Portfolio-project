import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../images/main-photo.png"
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Button} from "../../../../components/button/Button";
import {StyledSection} from "../../../../components/StyledSection";
import {theme} from "../../../../styles/Theme";


export const Main = () => {
    return (
        <StyledSection>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextBlock>
                        <MainTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                            lobortis.
                            Natoque rutrum semper sed suspendisse nunc lectus.
                        </Text>
                        <Button text={"HIRE ME"} iconId={"btnHireMe"} height={"12"} width={"12"} viewBox={"0 0 12 12"}  btnType="mainBtn"/>
                    </TextBlock>
                    <Photo src={mainPhoto} alt="main photo"/>
                </FlexWrapper>
        </StyledSection>
    );
};


const TextBlock = styled.div`
    padding-left: 60px;

`

const MainTitle = styled.h1`
    
    span {
        color: ${theme.colors.accent};
    }
    
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    
    max-width: 500px;
    width: 100%;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    color:${theme.colors.fontDescription};
    
    max-width: 425px;
    width: 100%;
    
    margin: 18px 0 25px 0;
`


const Photo = styled.img`
    padding-right: 55px;

    width: 325px;
    height: 460px;
    object-fit: cover;
`





