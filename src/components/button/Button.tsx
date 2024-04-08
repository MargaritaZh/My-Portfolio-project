import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";

type ButtonPropsType={
    text:string
    iconId?: string
    height?: string
    width?: string
    viewBox?: string
    variant?: string
}

export const Button = ({text,iconId, height, width, viewBox}:ButtonPropsType) => {
    return (
        <StyledButton type="submit">
                <TextButton>{text}</TextButton>
                {iconId && (
                    <Icon iconId={iconId} height={height} width={width} viewBox={viewBox} />
                )}
        </StyledButton>
    );
};

const StyledButton= styled.button`

    border-radius: 5px;
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    width: 155px;
    height: 55px;
    
    padding: 16px 32px;
`

const TextButton=styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-right: 9px;
`

