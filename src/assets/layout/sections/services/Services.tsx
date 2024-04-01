import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Servic} from "./servic/Servic";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";



export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle>my services</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. lorem ipsum</SectionTextDescription>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Servic
                    iconId="coding" height="68" width="68" viewBox="0 0 68 68"
                    title="web development"
                    text="blog, e-commerce"
                    isLink={false}
                />
                <Servic
                    iconId="illustration" height="68" width="68" viewBox="0 0 68 68"
                    title="uI/uX design"
                    text="Mobile app, website design"
                    isLink={false}
                />
                <Servic
                    iconId="microphone" height="74" width="74" viewBox="0 0 74 74"
                    title="sound design"
                    text="Voice Over, Beat Making"
                    isLink={false}
                />
                <Servic
                    iconId="gameDevelopment" height="74" width="74" viewBox="0 0 74 74"
                    title="game design"
                    text="Character Design, Props & Objects"
                    isLink={false}
                />
                <Servic
                    iconId="photographer" height="78" width="78" viewBox="0 0 78 78"
                    title="photography"
                    text="portrait, product photography"
                    isLink={false}
                />

                <Servic
                    title="advertising"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. "
                    isLink={true}
                />
            </FlexWrapper>
        </StyledServices>
    );
};


const StyledServices = styled.section`
    background-color: #e8e882;
    min-height: 100vh;
`










