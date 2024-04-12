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
                        <Text>{info.label}</Text>
                        <Text>{info.value}</Text>
                    </Wrapper>
                ))}
            </ContentWrapper>


        </StyledContactInfoCard>
    );
};

const StyledContactInfoCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    min-height: 210px;
    width: 100%;
    padding: 25px 25px 16px;

    display: flex;
    flex-direction: column;

    & + div {
        margin-top: 18px;
    }
`

const IconWrapper = styled.div`
    margin: 0 auto;
    
    background-color: ${theme.colors.accent};
    height: 40px;
    width: 40px;
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
const Text = styled.span`

`
