import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {PriceCard} from "./priceCard/PriceCard";



export const Price = () => {
    return (
        <StyledPrice>
            <SectionTitle>Price plans</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            <FlexWrapper justify={"space-between"}>
                <PriceCard title={"silver"} price={"$0.00"} iconTypeBoundary={2} />
                <PriceCard  showMostPopular title={"gold"} price={"$50.00"} iconTypeBoundary={4} />
                <PriceCard  title={"dimond"} price={"$80.00"} iconTypeBoundary={10} />
            </FlexWrapper>
        </StyledPrice>
    );
};

const StyledPrice=styled.section`
    background-color: #d099b5;
    min-height: 100vh;
`

