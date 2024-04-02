import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {Slider} from "../../../../components/slider/Slider";


export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle>recommendations</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
                <Slider/>
        </StyledRecommendations>
    );
};


const StyledRecommendations = styled.section`
    background-color: #b4b48f;
    min-height: 80vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

