import React from 'react';
import styled from "styled-components";
import {Rating} from "./rating/Rating";
import {FlexWrapper} from "../../FlexWrapper";
import {theme} from "../../../styles/Theme";

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
            <BlockWrapper>
                <Image src={props.src} alt=""/>
                <Wrapper>
                    <Name>{props.name}</Name>
                    <Profession>{props.profession}</Profession>
                </Wrapper>
            </BlockWrapper>
        </StyledSlid>
    );
};

const StyledSlid = styled.div`
   
    background-color: ${theme.colors.secondaryBg};
    width: 310px;
    min-height: 323px;
    
    & + div {
    margin-left: 20px;
    }
    
    padding: 25px;
`

const Title= styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 18px;
`

const Text=styled.p`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: ${theme.colors.fontDescription};
    margin-bottom: 30px;
    
`

const BlockWrapper=styled.div`
    display: flex;
    gap:25px;
`


const Image=styled.img`
    height: 80px;
    max-width: 80px;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 18px 0 11px;
`

const Name=styled.span`
    font-size: 18px;
    font-weight: 500;
`

const Profession =styled.span`
    color: ${theme.colors.fontDescription};
    line-height: 1.6;
    font-size: 15px;
    font-weight: 400;
`

