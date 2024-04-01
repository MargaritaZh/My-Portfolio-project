import React from 'react';
import styled from "styled-components"

export const PortfolioWork = (props: { src: string }) => {
    return (
        <StyledPortfolioWork>
            <Image src={props.src} alt="" />
        </StyledPortfolioWork>
    );
};

const StyledPortfolioWork = styled.div`
    border: solid 1px red;
    background-color: hotpink;
    
    max-width: 310px;
    width: 100%;
    margin: 10px;
`

const Image = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
`