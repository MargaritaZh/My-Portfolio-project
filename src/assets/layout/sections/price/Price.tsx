import React from 'react';
import {SectionText} from "../../../../components/SectionText";
import {SectionDescription} from "../../../../components/SectionDescription";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {PriceCard} from "./priceCard/PriceCard";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Container} from "../../../../components/Container";


export const Price = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>Price plans</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                </SectionTitle>
                <FlexWrapper justify={"space-between"}>
                    <PriceCard title={"Silver"} price={"$0.00"} iconTypeBoundary={2}/>
                    <PriceCard showMostPopular title={"Gold"} price={"$50.00"} iconTypeBoundary={4}/>
                    <PriceCard title={"Dimond"} price={"$80.00"} iconTypeBoundary={10}/>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};


