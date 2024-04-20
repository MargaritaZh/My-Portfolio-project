import React from 'react';
import {
    EducationAndWorkHistoryCard
} from "../../../../components/educationAndWorkHistoryCard/EducationAndWorkHistoryCard";
import {SectionText} from "../../../../components/SectionText";
import {SectionDescription} from "../../../../components/SectionDescription";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionTitle} from "../../../../components/SectionTitle";
import {WrapperEducationAndWorkHistoryCards} from "../../../../components/WrapperEducationAndWorkHistoryCards";
import {Container} from "../../../../components/Container";


const educationData = [
    {
        leftTitle: "University of Toronto",
        status: "Student",
        periodOfStudy: "Jan 1016 - Dec 2021",
        rightTitle: "Certificate Of Web Training",
        rightTitleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
        leftTitle: "Programming Course",
        status: "Student",
        periodOfStudy: "Jan 1016 - Dec 2021",
        rightTitle: "Certificate Of Web Training",
        rightTitleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    }, {
        leftTitle: "Web developer courses",
        status: "Student",
        periodOfStudy: "Jan 1016 - Dec 2021",
        rightTitle: "Certificate Of Web Training",
        rightTitleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
]

export const Education:React.FC = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>Education</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit
                        officia consequat duis enim velit mollit. lorem ipsum
                    </SectionDescription>
                </SectionTitle>
                <WrapperEducationAndWorkHistoryCards>

                    {educationData.map((e)=>{
                        return(
                            <EducationAndWorkHistoryCard
                                leftTitle={e.leftTitle}
                                status={e.status}
                                periodOfStudy={e.periodOfStudy}
                                rightTitle={e.rightTitle}
                                rightTitleDescription={e.rightTitleDescription}
                            />
                        )
                    })}

                </WrapperEducationAndWorkHistoryCards>
            </Container>
        </StyledSection>
    );
};


