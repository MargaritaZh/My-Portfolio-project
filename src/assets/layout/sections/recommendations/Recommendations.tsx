import React from 'react';
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {Slider} from "../../../../components/slider/Slider";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionWrapperTitleAndText} from "../../../../components/SectionWrapperTitleAndText";


export const Recommendations = () => {
    return (
        <StyledSection>
            <SectionWrapperTitleAndText>
                <SectionTitle>Recommendations</SectionTitle>
                <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            </SectionWrapperTitleAndText>
            <Slider/>
        </StyledSection>
    );
};

