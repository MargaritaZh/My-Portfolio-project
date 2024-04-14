import React from 'react';
import styled from "styled-components";
import {SectionText} from "../../../../components/SectionText";
import {SectionDescription} from "../../../../components/SectionDescription";
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
import {SectionTitle} from "../../../../components/SectionTitle";
import {TabMenu} from "./portfolioWork/tabMenu/TabMenu";
import {Container} from "../../../../components/Container";


const worksItems = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"]
export const Portfolio = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>Portfolio</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit
                        officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                </SectionTitle>
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
            </Container>
        </StyledSection>
    );
};

const WrapperPortfolioWorks = styled.div`
    outline: 3px solid blue;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    grid-auto-rows: 300px;
    gap: 20px;
`

