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

export const Service:React.FC<ServicePropsType> = ({ iconId, height, width, viewBox, title, text, isLink = false }: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
                {iconId && (
                    <Icon iconId={iconId} height={height} width={width} viewBox={viewBox} />
                )}
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceText>{text}</ServiceText>
                {isLink && (<Link text={"ORDER NOW"} linkType={"serviceLink"}/>)}
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    background-color: ${theme.colors.secondaryBg};
    padding: 25px;
    outline: solid 1px rebeccapurple;
`
const ServiceTitle = styled.h3``

const ServiceText = styled.p`
    text-align: center;
`
