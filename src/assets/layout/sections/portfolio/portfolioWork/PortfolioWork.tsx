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
    outline: solid 1px red;
    
    min-height: 300px;
    max-width: 310px;
    width: 100%;
    
   
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`