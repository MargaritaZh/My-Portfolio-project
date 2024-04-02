import React from 'react';
import styled from "styled-components";

type EducationAndWorkHistoryCardPropsType={
    leftTitle:string
    status:string
    periodOfStudy: string
    rightTitle:string
    rightTitleDescription:string

}

export const EducationAndWorkHistoryCard = (props:EducationAndWorkHistoryCardPropsType) => {
    return (
        <StyledEducationAndWorkHistoryCard>
            <LeftSideCard>
                <Title>{props.leftTitle}</Title>
                <div>
                    <Status>{props.status}</Status>
                    <PeriodOfStudy>{props.periodOfStudy}</PeriodOfStudy>
                </div>
            </LeftSideCard>
            <RightSideCard>
                <Title>{props.rightTitle}</Title>
                <Text>{props.rightTitleDescription}</Text>
            </RightSideCard>
        </StyledEducationAndWorkHistoryCard>
    );
};

const StyledEducationAndWorkHistoryCard=styled.div`
    background-color: #bd9383;
    max-width: 904px;
    min-height: 105px;
    display: flex;
    margin: 10px;
`

const LeftSideCard = styled.div`
min-width: 368px;
`

const Title=styled.h3``

const Status = styled.span``

const PeriodOfStudy =styled.span``





const RightSideCard =styled.div``

const Text = styled.p``

