import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../images/main-photo.png"
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Button} from "../../../../components/button/Button";
import {StyledSection} from "../../../../components/StyledSection";


export const Main = () => {
    return (
        <StyledSection>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextBlock>
                        <MainTitle>I’m Rayan Adlrdard Front-end Developer</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                            lobortis.
                            Natoque rutrum semper sed suspendisse nunc lectus.
                        </Text>
                        <Button text={"HIRE ME"} iconId={"btnHireMe"} height={"12"} width={"12"} viewBox={"0 0 12 12"}/>
                    </TextBlock>
                    <Photo src={mainPhoto} alt="main photo"/>
                </FlexWrapper>
        </StyledSection>
    );
};


const TextBlock = styled.div``

const MainTitle = styled.h1``

const Text = styled.p``


const Photo = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
`





