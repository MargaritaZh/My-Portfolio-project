import React from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";
import {ServicLink} from "./servicLink/ServicLink";
type ServicPropsType = {
    iconId?: string;
    height?: string;
    width?: string;
    viewBox?: string;
    title: string;
    text: string;
    isLink: boolean;
};

export const Servic = ({ iconId, height, width, viewBox, title, text, isLink = false }: ServicPropsType) => {
    return (
        <StyledServic>
            {iconId && (
                <Icon iconId={iconId} height={height} width={width} viewBox={viewBox} />
            )}
            <ServicTitle>{title}</ServicTitle>
            <ServicText>{text}</ServicText>
            {isLink && (<ServicLink/>)}
        </StyledServic>
    );
};

const StyledServic = styled.div`
    width: 30%;
    background-color: #5ed95e;
    margin: 10px;
`

const ServicTitle = styled.h3``

const ServicText = styled.p``
