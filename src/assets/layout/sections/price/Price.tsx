import React from 'react';
import {SectionText} from "../../../../components/SectionText";
import {SectionDescription} from "../../../../components/SectionDescription";
import {PriceCard} from "./priceCard/PriceCard";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Container} from "../../../../components/Container";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const priceCardData = [
    {
        showMostPopular: false,
        title: "Silver",
        price: "$0.00",
        iconTypeBoundary: 2,
    },
    {
        showMostPopular: true,
        title: "Gold",
        price: "$50.00",
        iconTypeBoundary: 4,
    },
    {
        showMostPopular: false,
        title: "Dimond",
        price: "$80.00",
        iconTypeBoundary: 10,
    },

]
export const Price: React.FC = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>Price plans</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                </SectionTitle>
                <Wrapper>

                    {priceCardData.map((e, index) => {
                        return (
                            <PriceCard key={index}
                                       showMostPopular={e.showMostPopular} title={e.title} price={e.price}
                                       iconTypeBoundary={e.iconTypeBoundary}/>
                        )
                    })}

                </Wrapper>
            </Container>
        </StyledSection>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 20px;

    @media ${theme.media.desktop} {
        overflow-x: auto;
    }
`



