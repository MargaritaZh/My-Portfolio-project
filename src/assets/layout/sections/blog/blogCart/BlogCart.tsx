import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../../components/link/Link";
import {theme} from "../../../../../styles/Theme";

type BlogCartPropsType = {
    src: string
    title: string
    text: string
}

export const BlogCart: React.FC<BlogCartPropsType> = (props: BlogCartPropsType) => {
    return (
        <StyledBlogCart>
            <BlogCartImage src={props.src} alt=""/>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link text={"Learn more"} linkType={"blogLink"}/>
            </Description>
        </StyledBlogCart>
    );
};

const StyledBlogCart = styled.div`
    background-color: ${theme.colors.secondaryBg};
    min-height: 474px;
    max-width: 310px;
    width: 100%;

    outline: 1px solid green;

    & + div {
        margin-left: 10px;
    }

    @media ${theme.media.desktop} {
        min-width: 310px;
    }
`

const BlogCartImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 17px 16px 25px;
`
const Title = styled.h3`
    margin-bottom: 8px;
`

const Text = styled.p`
    margin-bottom: 9px;
`