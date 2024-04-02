import React from 'react';
import styled from "styled-components";
import {Slid} from "./slid/Slid";
import reviewImage1 from "../../assets/images/recommendations-images/James-photo.webp"
import reviewImage2 from "../../assets/images/recommendations-images/Tiana-photo.webp"
import reviewImage3 from "../../assets/images/recommendations-images/Talan-photo.webp"
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper justify={"center"}>
                <Slid
                    reviewTitle={"Great Quality!"}
                    reviewDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                    src={reviewImage1}
                    name={"James Gouse"}
                    profession={"Graphic Designer"}
                />
                <Slid
                    reviewTitle={"Amazing work!"}
                    reviewDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                    src={reviewImage2}
                    name={"Tiana Philips"}
                    profession={"Photographer"}
                />
                <Slid
                    reviewTitle={"Great Quality!"}
                    reviewDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                    src={reviewImage3}
                    name={"Talan Westervelt"}
                    profession={"Business man"}
                />
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: solid 1px red;
    max-width: 970px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Pagination = styled.div`

    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: chartreuse;
    }
`
