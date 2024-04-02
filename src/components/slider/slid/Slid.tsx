import React from 'react';
import styled from "styled-components";
import {Rating} from "./rating/Rating";
import {FlexWrapper} from "../../FlexWrapper";

type SlidPropsType = {
    reviewTitle: string
    reviewDescription: string
    src:string
    name:string
    profession:string
}

export const Slid = (props: SlidPropsType) => {
    return (
        <StyledSlid>
            <Rating/>
            <Title>{props.reviewTitle}</Title>
            <Text>{props.reviewDescription}</Text>
            <FlexWrapper>
                <Image src={props.src} alt=""/>
                <FlexWrapper direction={"column"}>
                    <Name>{props.name}</Name>
                    <Profession>{props.profession}</Profession>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSlid>
    );
};

const StyledSlid = styled.div`
    background-color: #97e397;
    max-width: 310px;
    min-height: 323px;
    
    margin: 10px;
`

const Title= styled.h3``

const Text=styled.p``

const Image=styled.img`
    height: 80px;
    max-width: 80px;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`
const Name=styled.span``

const Profession =styled.span``

