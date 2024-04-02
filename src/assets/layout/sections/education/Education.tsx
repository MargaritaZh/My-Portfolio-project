import React from 'react';
import styled from "styled-components";
import {
    EducationAndWorkHistoryCard
} from "../../../../components/educationAndWorkHistoryCard/EducationAndWorkHistoryCard";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";

export const Education = () => {
    return (
        <StyledEducation>
            <SectionTitle>Education</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            <FlexWrapper direction={"column"} align={"center"}>
                <EducationAndWorkHistoryCard
                leftTitle={"University of Toronto"}
                status={"Student"}
                periodOfStudy={"Jan 1016 - Dec 2021"}
                rightTitle={"Certificate of web training"}
                rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                />
                <EducationAndWorkHistoryCard
                    leftTitle={"Programming Course"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate of web training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                />
                <EducationAndWorkHistoryCard
                    leftTitle={"Web developer courses"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate of web training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                />
            </FlexWrapper>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
    background-color: #7bad7b;
    height: 100vh;
`

