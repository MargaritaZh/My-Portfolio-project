import React from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";
import {Link} from "../../../../../components/link/Link";
import {theme} from "../../../../../styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
type ServicePropsType = {
    iconId?: string;
    height?: string;
    width?: string;
    viewBox?: string;
    title: string;
    text: string;
    isLink: boolean;
};

export const Service = ({ iconId, height, width, viewBox, title, text, isLink = false }: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
                {iconId && (
                    <Icon iconId={iconId} height={height} width={width} viewBox={viewBox} />
                )}
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceText>{text}</ServiceText>
                {isLink && (<Link text={"ORDER NOW"}/>)}
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    max-width: 310px;
    width: 100%;
    min-height: 225px;
    background-color: ${theme.colors.secondaryBg};
    
    padding: 25px;
    outline: solid 1px rebeccapurple;
    
`

const ServiceTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    
    
`

const ServiceText = styled.p`
    color: ${theme.colors.fontDescription};
    
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;

`
