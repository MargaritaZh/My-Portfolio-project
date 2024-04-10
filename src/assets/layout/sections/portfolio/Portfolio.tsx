import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {PortfolioWork} from "./portfolioWork/PortfolioWork";
import work1 from "../../../images/portfolio-images/image-1.webp"
import work2 from "../../../images/portfolio-images/image-2.webp"
import work3 from "../../../images/portfolio-images/image-3.webp"
import work4 from "../../../images/portfolio-images/image-4.webp"
import work5 from "../../../images/portfolio-images/image-5.webp"
import work6 from "../../../images/portfolio-images/image-6.webp"
import work7 from "../../../images/portfolio-images/image-7.webp"
import work8 from "../../../images/portfolio-images/image-8.webp"
import work9 from "../../../images/portfolio-images/image-9.webp"
import {StyledSection} from "../../../../components/StyledSection";
import {SectionWrapperTitleAndText} from "../../../../components/SectionWrapperTitleAndText";
import {TabMenu} from "./portfolioWork/tabMenu/TabMenu";


const worksItems = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"]
export const Portfolio = () => {
    return (
        <StyledSection>
            <SectionWrapperTitleAndText>
                <SectionTitle>Portfolio</SectionTitle>
                <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            </SectionWrapperTitleAndText>
            <TabMenu menuItems={worksItems}/>
            <WrapperPortfolioWorks>
                <PortfolioWork src={work1}/>
                <PortfolioWork src={work2}/>
                <PortfolioWork src={work3}/>
                <PortfolioWork src={work4}/>
                <PortfolioWork src={work5}/>
                <PortfolioWork src={work6}/>
                <PortfolioWork src={work7}/>
                <PortfolioWork src={work8}/>
                <PortfolioWork src={work9}/>
            </WrapperPortfolioWorks>
        </StyledSection>
    );
};

const WrapperPortfolioWorks=styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    outline: 3px solid blue;
    min-height: 960px;
`

