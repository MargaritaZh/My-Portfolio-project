import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../../components/link/Link";

type BlogCartPropsType = {
    src: string
    title:string
    text: string
}

export const BlogCart = (props: BlogCartPropsType) => {
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
    width: 100%;
    
    margin: 10px;
`

const BlogCartImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
`

const BlogCartTitle=styled.h3``

const BlogCartText=styled.p``