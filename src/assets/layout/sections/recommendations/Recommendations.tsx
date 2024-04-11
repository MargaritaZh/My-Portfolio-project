import React from 'react';
import {SectionText} from "../../../../components/SectionText";
import {SectionDescription} from "../../../../components/SectionDescription";
import {Slider} from "../../../../components/slider/Slider";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Container} from "../../../../components/Container";


export const Recommendations = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>Recommendations</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit
                        officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                </SectionTitle>
                <Slider/>
            </Container>
        </StyledSection>
    );
};

