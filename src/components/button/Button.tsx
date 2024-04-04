import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type ButtonPropsType={
    text:string
    iconId?: string
    height?: string
    width?: string
    viewBox?: string
}

export const Button = ({ text,iconId, height, width, viewBox}:ButtonPropsType) => {
    return (
        <StyledButton type="submit">
            <span>{text}</span>
            {iconId && (
                <Icon iconId={iconId} height={height} width={width} viewBox={viewBox} />
            )}
        </StyledButton>
    );
};

const StyledButton= styled.button`
    background-color: yellow;
`