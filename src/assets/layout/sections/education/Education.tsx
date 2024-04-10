import React from 'react';
import styled from "styled-components";
import {
    EducationAndWorkHistoryCard
} from "../../../../components/educationAndWorkHistoryCard/EducationAndWorkHistoryCard";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionWrapperTitleAndText} from "../../../../components/SectionWrapperTitleAndText";
import {theme} from "../../../../styles/Theme";

export const Education = () => {
    return (
        <StyledSection>
            <SectionWrapperTitleAndText>
                <SectionTitle>Education</SectionTitle>
                <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. lorem ipsum
                </SectionTextDescription>
            </SectionWrapperTitleAndText>
            <WrapperCards>
                <EducationAndWorkHistoryCard
                    leftTitle={"University of Toronto"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate Of Web Training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                />
                <EducationAndWorkHistoryCard
                    leftTitle={"Programming Course"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate Of Web Training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                />
                <EducationAndWorkHistoryCard
                    leftTitle={"Web developer courses"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate Of Web Training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                />
            </WrapperCards>
        </StyledSection>
    );
};

const WrapperCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.secondaryBg};
    gap: 28px;
    padding: 47px 29px 38px 37px;
`
