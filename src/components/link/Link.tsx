import React from 'react';
import styled, {css} from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

type LinkPropsType = {
    linkType?: "serviceLink" | "blogLink";
};

export const Link = (props: {
    text: string;
    linkType?: "serviceLink" | "blogLink";
}) => {
    return (
        <StyledServiceLink href="" linkType={props.linkType}>
            <Text>{props.text}</Text>
            <Icon iconId="arrow" height="20" width="20" viewBox="0 0 20 20"/>
        </StyledServiceLink>
    );
};

export const StyledServiceLink = styled.a<LinkPropsType>`
    display: flex;
    align-items: center;

    ${(props) =>
            props.linkType === "serviceLink" && css<LinkPropsType>`
                color: ${theme.colors.accent};
                font-family: "Roboto", sans-serif;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
            `}

    ${(props) =>
            props.linkType === "blogLink" && css<LinkPropsType>`
                color: ${theme.colors.accent};
                font-family: "Inter", sans-serif;
                font-size: 18px;
                font-weight: 500;
                text-transform: capitalize;
            `}
    
    
`;

export const Text = styled.span``