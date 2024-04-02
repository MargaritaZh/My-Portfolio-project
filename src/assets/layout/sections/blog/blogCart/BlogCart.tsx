import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../../components/link/Link";

type BlogCart = {
    src: string
    title:string
    text: string
}

export const BlogCart = (props: BlogCart) => {
    return (
        <StyledBlogCart>
            <BlogCartImage src={props.src} alt=""/>
            <BlogCartTitle>{props.title}</BlogCartTitle>
            <BlogCartText>{props.text}</BlogCartText>
            <Link text={"Learn more"}/>
        </StyledBlogCart>
    );
};


const StyledBlogCart = styled.div`
    background-color: #c27b60;
    min-height: 474px;
    max-width: 310px;
    
    margin: 10px;
`

const BlogCartImage = styled.img`
    height: 300px;
    max-width: 310px;
    width: 100%;
`

const BlogCartTitle=styled.h3``

const BlogCartText=styled.p``