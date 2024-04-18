import React from 'react';
import styled from "styled-components";
import {RatingStar} from "./ratingStar/RatingStar";


export const Rating = () => {
    return (
        <StyledRating>
            <RatingStar/>
            <RatingStar/>
            <RatingStar/>
            <RatingStar/>
            <RatingStar/>
        </StyledRating>

    );
};

const StyledRating =styled.ul`
    display: flex;
    
    margin-bottom: 15px;
`

