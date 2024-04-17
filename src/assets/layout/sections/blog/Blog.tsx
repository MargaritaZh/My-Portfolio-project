import React from 'react';
import styled from "styled-components";
import {SectionText} from "../../../../components/SectionText";
import {SectionDescription} from "../../../../components/SectionDescription";
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
import {StyledSection} from "../../../../components/StyledSection";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Container} from "../../../../components/Container";
import {theme} from "../../../../styles/Theme";

export const Blog = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>Blog</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit
                        officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                </SectionTitle>
                <BlogCardsWrapper>
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
                </BlogCardsWrapper>
                <InfoWrapper>
                    <Info/>
                    <ContactInfo/>
                </InfoWrapper>
                <StyledMap
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71372.78905234985!2d-122.48542393632403!3d37.76046744969168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sby!4v1712178028154!5m2!1sru!2sby"
                    width="100%" height="300"
                    style={{border: "0"}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></StyledMap>
                <ImageWrapper>
                    <Image src={logoImage1} alt=""/>
                    <Image src={logoImage2} alt=""/>
                    <Image src={logoImage3} alt=""/>
                    <Image src={logoImage4} alt=""/>
                </ImageWrapper>
            </Container>
        </StyledSection>
    );
};

const BlogCardsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;

    overflow-x: auto;
`

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 70px 0 70px;
    
    
    flex-wrap: wrap-reverse;
    @media ${theme.media.tablet} {
        margin: 65px 0 70px;
    }
`

const StyledMap = styled.iframe``

const ImageWrapper = styled.div`
    margin: 70px 0 70px;
    display: flex;
    justify-content: space-between;
`

const Image = styled.img`
    height: 140px;
    max-width: 140px;
    width: 100%;
    object-fit: cover;
`

