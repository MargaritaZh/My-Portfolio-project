import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../images/main-photo.webp"
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <TextBlock>
                    <MainTitle>I’m Rayan Adlrdard Front-end Developer</MainTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque rutrum semper sed suspendisse nunc lectus.</p>
                    <button>
                        <span>HIRE ME</span>
                        <Icon iconId={"btnHireMe"} height={"12"} width={"12"} viewBox={"0 0 12 12"}/>
                    </button>
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

const TextBlock=styled.div``

const MainTitle=styled.h1``





const Photo = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
`





