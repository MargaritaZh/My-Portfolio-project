import React from 'react';
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {PriceCard} from "./priceCard/PriceCard";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionWrapperTitleAndText} from "../../../../components/SectionWrapperTitleAndText";



export const Price = () => {
    return (
        <StyledSection>
            <SectionWrapperTitleAndText>
                <SectionTitle>Price plans</SectionTitle>
                <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            </SectionWrapperTitleAndText>
            <FlexWrapper justify={"space-between"}>
                <PriceCard title={"Silver"} price={"$0.00"} iconTypeBoundary={2} />
                <PriceCard  showMostPopular title={"Gold"} price={"$50.00"} iconTypeBoundary={4} />
                <PriceCard  title={"Dimond"} price={"$80.00"} iconTypeBoundary={10} />
            </FlexWrapper>
        </StyledSection>
    );
};


