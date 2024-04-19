import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../../../styles/Theme";

type ContactInfoCardPropsType = {
    iconId: string;
    height: string;
    width: string;
    viewBox: string;
    items: Array<{ label: string; value: string }>;
};

export const ContactInfoCard = (props: ContactInfoCardPropsType) => {
    return (
        <StyledContactInfoCard>
            <IconWrapper>
                <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
            </IconWrapper>
            <ContentWrapper>
                {props.items.map((info, index) => (
                    <Wrapper key={index}>
                        <LeftText>{info.label}</LeftText>
                        <RightText>{info.value}</RightText>
                    </Wrapper>
                ))}
            </ContentWrapper>


        </StyledContactInfoCard>
    );
};

const StyledContactInfoCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    height: 210px;
    max-width: 370px;
    width: 100%;
    padding: 25px 25px 16px;

    display: flex;
    flex-direction: column;

   & + div {
         margin-top: 18px;
    }
    
     @media ${theme.media.desktop} {
         & + div {
             margin-top: 0;
         }
     }
`

const IconWrapper = styled.div`
    margin: 0 auto;
    
    background-color: ${theme.colors.accent};
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`
const ContentWrapper=styled.div`
    margin-top: 30px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & + div {
        margin-top: 16px;
    }
`
const LeftText = styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 18px;
    font-weight: 500;
`
const RightText = styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
`
