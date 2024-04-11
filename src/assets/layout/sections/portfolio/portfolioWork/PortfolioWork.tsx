import React from 'react';
import styled from "styled-components"
import {Button, StyledButton} from "../../../../../components/button/Button";

export const PortfolioWork = (props: { src: string }) => {
    return (
        <StyledPortfolioWork>
                <Image src={props.src} alt="Portfolio Works"/>
                <Button text={""} iconId={"portfolioBtn"} width={"52"} height={"52"} viewBox={"0 0 52 52"}/>
        </StyledPortfolioWork>
    );
};

const StyledPortfolioWork = styled.div`
    outline: solid 1px red;
    min-height: 300px;
    max-width: 310px;
    width: 100%;

    position: relative;

    &:hover {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 180, 0, 0.95);
        }

        ${StyledButton} {
            opacity: 1;
        }
    }

    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`


const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`