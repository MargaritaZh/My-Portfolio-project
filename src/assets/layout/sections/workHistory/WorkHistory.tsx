import React from 'react';
import {
    EducationAndWorkHistoryCard
} from "../../../../components/educationAndWorkHistoryCard/EducationAndWorkHistoryCard";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionWrapperTitleAndText} from "../../../../components/SectionWrapperTitleAndText";
import {WrapperEducationAndWorkHistoryCards} from "../../../../components/WrapperEducationAndWorkHistoryCards";

export const WorkHistory = () => {
    return (
        <StyledSection>
            <SectionWrapperTitleAndText>
                <SectionTitle>Work History</SectionTitle>
                <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            </SectionWrapperTitleAndText>
            <WrapperEducationAndWorkHistoryCards>
                <EducationAndWorkHistoryCard
                    leftTitle={"Lead Web Designer"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate Of Web Training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
                <EducationAndWorkHistoryCard
                    leftTitle={"Junior Web Designer"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate Of Web Training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
                <EducationAndWorkHistoryCard
                    leftTitle={"Senior Web Designer"}
                    status={"Student"}
                    periodOfStudy={"Jan 1016 - Dec 2021"}
                    rightTitle={"Certificate Of Web Training"}
                    rightTitleDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
            </WrapperEducationAndWorkHistoryCards>
        </StyledSection>
    );
};





