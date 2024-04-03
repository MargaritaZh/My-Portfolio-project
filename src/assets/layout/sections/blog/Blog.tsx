import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {SectionTextDescription} from "../../../../components/SectionTextDescription";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {BlogCart} from "./blogCart/BlogCart";
import blogCartImage1 from "../../../images/blog-images/blog-image-1.webp"
import blogCartImage2 from "../../../images/blog-images/blog-image-2.webp"
import blogCartImage3 from "../../../images/blog-images/blog-image-3.webp"
import {ContactInfo} from "./contactInfo/ContactInfo";
import {Info} from "./info/Info";

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle>Blog</SectionTitle>
            <SectionTextDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. lorem ipsum</SectionTextDescription>
            <FlexWrapper justify={"center"}>
                <BlogCart
                    src={blogCartImage1}
                    title={"How to make web tempates"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}/>
                <BlogCart
                    src={blogCartImage2}
                    title={"make Business card"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}/>
                <BlogCart
                    src={blogCartImage3}
                    title={"How to make Flyer Design"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}/>
            </FlexWrapper>
            <FlexWrapper>
                <Info/>
                <ContactInfo/>
            </FlexWrapper>

        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #7f917f;
    min-height: 100vh;
`


