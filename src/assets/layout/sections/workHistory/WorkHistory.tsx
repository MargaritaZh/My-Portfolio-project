import React from 'react';
import styled from "styled-components";
import {
    EducationAndWorkHistoryCard
} from "../../../../components/educationAndWorkHistoryCard/EducationAndWorkHistoryCard";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {FlexWrapper} from "../../../../components/FlexWrapper";

export const WorkHistory = () => {
    return (
        <StyledWorkHistory>
            <SectionTitle>Work History</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            <FlexWrapper direction={"column"} align={"center"} >
                <EducationAndWorkHistoryCard
                    leftTitle={"Lead Web Designer"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Jan 1016 - Dec 2021"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
                <EducationAndWorkHistoryCard
                    leftTitle={"Junior Web Designer"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Jan 1016 - Dec 2021"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
                <EducationAndWorkHistoryCard
                    leftTitle={"Senior Web Designer"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Jan 1016 - Dec 2021"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
            </FlexWrapper>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`
    background-color: #91cccc;
    height: 100vh;
`



