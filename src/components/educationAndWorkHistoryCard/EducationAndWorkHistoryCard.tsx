import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";

type EducationAndWorkHistoryCardPropsType = {
    leftTitle: string
    status: string
    periodOfStudy: string
    rightTitle: string
    rightTitleDescription: string

}

export const EducationAndWorkHistoryCard = (props: EducationAndWorkHistoryCardPropsType) => {
    return (
        <StyledEducationAndWorkHistoryCard>
            <LeftSideCard>
                <Title>{props.leftTitle}</Title>
                <FlexWrapper align={"flex-start"}>
                    <Status>{props.status}</Status>
                    <PeriodOfStudy>{props.periodOfStudy}</PeriodOfStudy>
                </FlexWrapper>
            </LeftSideCard>
            <RightSideCard>
                <RightSideTitle>{props.rightTitle}</RightSideTitle>
                <Text>{props.rightTitleDescription}</Text>
            </RightSideCard>
        </StyledEducationAndWorkHistoryCard>
    );
};

const StyledEducationAndWorkHistoryCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 904px;
    min-height: 105px;
    //outline: 1px solid red;
    display: flex;

    &:first-child {
        border-bottom: 2px solid rgb(240, 240, 246);
        padding-bottom: 10px;

    }

    &:nth-child(2) {
        border-bottom: 2px solid rgb(240, 240, 246);
        padding-bottom: 28px;
    }
`

const LeftSideCard = styled.div`
    min-width: 368px;
    width: 100%;
`

const Title = styled.h3`
    margin: 4px 0 25px;
    font-size: 18px;
    font-weight: 500;
`

const Status = styled.span`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    margin-right: 21px;
`

const PeriodOfStudy = styled.span`
    margin-top: 3px;
    padding: 4px 7px;

    color: rgb(255, 255, 255);
    font-size: 10px;
    font-weight: 400;
    line-height: 1;
    border-radius: 1px;
    background-color: ${theme.colors.accent};
    
`


const RightSideCard = styled.div`

`


const RightSideTitle=styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 28px;
`

const Text = styled.p`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;

`

