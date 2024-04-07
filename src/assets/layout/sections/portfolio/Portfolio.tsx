import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {HeaderMenu} from "../../../../components/menu/headerMenu/HeaderMenu";
import {FlexWrapper} from "../../../../components/FlexWrapper";
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


const worksItems = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"]
export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle>Portfolio</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            <HeaderMenu menuItems={worksItems}/>
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                <PortfolioWork src={work1}/>
                <PortfolioWork src={work2}/>
                <PortfolioWork src={work3}/>
                <PortfolioWork src={work4}/>
                <PortfolioWork src={work5}/>
                <PortfolioWork src={work6}/>
                <PortfolioWork src={work7}/>
                <PortfolioWork src={work8}/>
                <PortfolioWork src={work9}/>
            </FlexWrapper>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    background-color: #58a4a4;
    min-height: 100vh;
`

