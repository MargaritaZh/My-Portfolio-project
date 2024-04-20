import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {theme} from "../../../../../styles/Theme";
import reviewImage1 from "../../../../images/recommendations-images/James-photo.webp"
import reviewImage2 from "../../../../images/recommendations-images/Tiana-photo.webp"
import reviewImage3 from "../../../../images/recommendations-images/Talan-photo.webp"

import "../../../../../styles/slider.css"
import {Rating} from "./rating/Rating";


const responsive = {
    0: {items: 1},
    568: {items: 1},
    768: {items: 2},
    800: {items: 2},
    1092: {items: 2},
    1440: {items: 3},
};

type SlidPropsType = {
    title: string
    description: string
    src: string
    userName: string
    profession: string
}
const Slide: React.FC<SlidPropsType> = (props: SlidPropsType) => {

    return (
        <StyledSlid>
            <Rating/>
            <Title>{props.title}</Title>
            <Text>{props.description}</Text>
            <BlockWrapper>
                <Image src={props.src} alt=""/>
                <Wrapper>
                    <Name>{props.userName}</Name>
                    <Profession>{props.profession}</Profession>
                </Wrapper>
            </BlockWrapper>
        </StyledSlid>
    )
}


const slidesData = [
    {
        title: "Great Quality!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        src: reviewImage1,
        userName: "James Gouse",
        profession: "Graphic Designer"
    },
    {
        title: "Amazing work!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        src: reviewImage2,
        userName: "Tiana Philips",
        profession: "Photographer"
    },
    {
        title: "Great Quality!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        src: reviewImage3,
        userName: "Talan Westervelt",
        profession: "Business man"
    },
    {
        title: "Great Quality!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        src: reviewImage3,
        userName: "Talan Westervelt",
        profession: "Business man"
    }
];

const items = slidesData.map((slide, index) => (
    <Slide
        key={index}
        title={slide.title}
        description={slide.description}
        src={slide.src}
        userName={slide.userName}
        profession={slide.profession}
    />
));

export const Slider = () => (
        <StyledSlider>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />
        </StyledSlider>
    )
;

const StyledSlider = styled.div`
    outline: solid 2px red;
    max-width: 970px;
    width: 100%;

    @media ${theme.media.tablet} {
        padding: 0 18px;
    }
`
const StyledSlid = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 310px;
    min-height: 323px;

    & + div {
        margin-left: 20px;
    }

    padding: 25px;

    @media ${theme.media.desktop} {
        width: 100%;
    }
`

const Title = styled.h3`
    margin-bottom: 18px;
`

const Text = styled.p`
    line-height: 1.6;
    margin-bottom: 30px;
`

const BlockWrapper = styled.div`
    display: flex;
    gap: 25px;
`

const Image = styled.img`
    height: 80px;
    max-width: 80px;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 18px 0 11px;
`
const Name = styled.h3``

const Profession = styled.span`
    line-height: 1.6;
`
