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

    btnType?: "mainBtn" | "priceBtn"| "infoBtn" |"downloadBtn"
    active?: boolean
}

export const Button: React.FC <ButtonPropsType>= ({text, iconId, height, width, viewBox,btnType,active,}: ButtonPropsType) => {
    return (
        <StyledButton type="submit"  btnType={btnType} active={active}>
            <TextButton>{text}</TextButton>
            {iconId && (
                <Icon iconId={iconId} height={height} width={width} viewBox={viewBox}/>
            )}
        </StyledButton>
    );
};

const TextButton = styled.span``

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "mainBtn" | "priceBtn" | "infoBtn" |"downloadBtn"
    active?:boolean
}

export const StyledButton = styled.button<StyledBtnPropsType>`

    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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
        text-transform: uppercase;
        transition: 0.2s;

        &:hover {
            //background-image: url("../");
            color: ${theme.colors.secondaryBg};
        }
    `} 
            
            //priceBtn
    ${props => props.btnType === "priceBtn" && css<StyledBtnPropsType>`
        border-radius: 30px;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
        background-color: ${theme.colors.secondaryBg};
        padding: 10px 40px;
        border: 1px solid ${theme.colors.secondaryBg};

        color: ${theme.colors.font}
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        
        &:nth-child(even) {
            background-color: ${theme.colors.accent};
        }
        
        &:hover {
            color: ${theme.colors.fontDescription};
        }
    `}
    
    //infoBtn
    ${props => props.btnType === "infoBtn" && css<StyledBtnPropsType>`
        
        padding: 9px 0 9px 24px;
        width: 159px;
        height: 35px;
        background-color: ${theme.colors.accent};
        
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        text-transform: uppercase;
        
        &:hover {
            color: ${theme.colors.secondaryBg};
        }
    `}

    //downloadBtn
    ${props => props.btnType === "downloadBtn" && css<StyledBtnPropsType>`
        padding: 10px 40px;
        width: 220px;
        background-color: ${theme.colors.accent};
        margin-top: 25px;
        
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;

         color: ${theme.colors.font};
        

        &:hover {
                color: ${theme.colors.secondaryBg};
        }
    `}
    

    
    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px grey;
    `}
`


