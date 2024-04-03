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
import logoImage1 from "../../../images/blog-images/logo-image-1.png"
import logoImage2 from "../../../images/blog-images/logo-image-2.png"
import logoImage3 from "../../../images/blog-images/logo-image-3.png"
import logoImage4 from "../../../images/blog-images/logo-image-4.png"

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
            <FlexWrapper justify={"center"}>
                <Info/>
                <ContactInfo/>
            </FlexWrapper>
            <StyledMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71372.78905234985!2d-122.48542393632403!3d37.76046744969168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sby!4v1712178028154!5m2!1sru!2sby"
                width="100%" height="300"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></StyledMap>
            <FlexWrapper justify={"space-between"}>
                <Image src={logoImage1} alt=""/>
                <Image src={logoImage2} alt=""/>
                <Image src={logoImage3} alt=""/>
                <Image src={logoImage4} alt=""/>
            </FlexWrapper>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #7f917f;
    min-height: 100vh;
`

const StyledMap = styled.iframe`
    
`

const Image=styled.img`
    height: 140px;
    max-width: 140px;
    width: 100%;
    object-fit: cover;
`
