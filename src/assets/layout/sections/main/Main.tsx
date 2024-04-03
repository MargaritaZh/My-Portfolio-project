import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../images/main-photo.png"
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {Button} from "../../../../components/button/Button";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
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
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #aad9d9;
    min-height: 60vh;
`

const TextBlock = styled.div``

const MainTitle = styled.h1``

const Text = styled.p``


const Photo = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
`





