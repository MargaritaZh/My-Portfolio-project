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

export const EducationAndWorkHistoryCard: React.FC<EducationAndWorkHistoryCardPropsType> = (props: EducationAndWorkHistoryCardPropsType) => {
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
    width: 100%;

    outline: 1px solid red;
    display: flex;


    &:first-child {
        border-bottom: 2px solid rgb(240, 240, 246);
        padding-bottom: 10px;

    }

    &:nth-child(2) {
        border-bottom: 2px solid rgb(240, 240, 246);
        padding-bottom: 28px;
    }

    @media ${theme.media.navMenu} {
        flex-wrap: wrap;
    }
`

const LeftSideCard = styled.div`
    min-width: 368px;

    @media ${theme.media.desktop} {
        min-width: 260px;
    }
`

const Title = styled.h3`
    margin: 4px 0 25px;

    @media ${theme.media.navMenu} {
        margin: 0 0 12px;
    }
`

const Status = styled.span`
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

const RightSideCard = styled.div``

const RightSideTitle = styled.h3`
    margin-bottom: 28px;

    @media ${theme.media.navMenu} {
        margin: 27px 0 10px 0;
    }
`

const Text = styled.p``

