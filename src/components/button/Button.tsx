import React from 'react';
import {Icon} from "../icon/Icon";
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


type ButtonPropsType = {
    text: string
    iconId?: string
    height?: string
    width?: string
    viewBox?: string

    // variant?: string


    btnType?: "mainBtn" | "outlined"
    active?: boolean

}

export const Button = ({text, iconId, height, width, viewBox,btnType,active,}: ButtonPropsType) => {
    return (
        <StyledButton type="submit"  btnType={btnType} active={active}>
            <TextButton>{text}</TextButton>
            {iconId && (
                <Icon iconId={iconId} height={height} width={width} viewBox={viewBox}/>
            )}
        </StyledButton>
    );
};



const TextButton = styled.span`
    font-family: "Inter",sans-serif;
`

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "mainBtn" | "outlined"
    active?:boolean

}


export const StyledButton = styled.button<StyledBtnPropsType>`

    border: none;
    display: flex;
    align-items: center;
    gap: 11px;
    

    //mainBtn
    ${props => props.btnType === "mainBtn" && css<StyledBtnPropsType>`

        padding: 16px 32px;
        border: 2px solid ${theme.colors.accent};
        border-radius: 5px;
        background-color: ${theme.colors.accent};
        height: 50px;
        width: 154px;

        color: ${theme.colors.font}
        font-size: 16px;
        font-weight: 500;


        &:hover {
            cursor: pointer;
            height: 64px;
            width: 202px;
            color: ${theme.colors.secondaryBg};
            font-size: 24px;
            font-weight: 700;
        }
    `} //outlined
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "hotpink"};
        color: ${props => props.color || "hotpink"};
        background-color: transparent;

        &:hover {
            border-color: blue;
            color: blue;
            background-color: transparent;
        }
    `}

    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px grey;
    `}
`


