import React from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";
import {Link} from "../../../../../components/link/Link";
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
            {isLink && (<Link text={"arrow now"}/>)}
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
