import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../images/main-photo.png"
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Button} from "../../../../components/button/Button";
import {StyledSection} from "../../../../components/StyledSection";
import {theme} from "../../../../styles/Theme";
import {Container} from "../../../../components/Container";


export const Main = () => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <TextBlock>
                        <MainTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                            lobortis.
                            Natoque rutrum semper sed suspendisse nunc lectus.
                        </Text>
                        <Button text={"HIRE ME"} iconId={"btnHireMe"} height={"12"} width={"12"} viewBox={"0 0 12 12"}  btnType="mainBtn"/>
                    </TextBlock>
                    <Photo src={mainPhoto} alt="main photo"/>
                </Wrapper>
            </Container>
        </StyledSection>
    );
};


const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    align-items: center;
    flex-wrap: wrap;

    padding: 0 55px 0 60px;
    

    @media ${theme.media.tablet} {
        padding: 0 10px 0 10px;
        gap: 0;
    }
`

const TextBlock = styled.div`
    padding: 93px 0 74px;
    
    @media ${theme.media.tablet} {
        padding: 99px 22px 50px;
    }
`

const MainTitle = styled.h1`

    span {
        color: ${theme.colors.accent};
    }

    font-size: 48px;
    font-weight: 700;
    text-align: left;

    max-width: 500px;
    width: 100%;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    color:${theme.colors.fontDescription};
    
    max-width: 425px;
    width: 100%;
    
    margin: 18px 0 25px 0;
    
    @media ${theme.media.mobile} {
        margin: 89px 0 34px 0;
    }
`


const Photo = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
   
    @media ${theme.media.tablet} {
        margin: 0 auto;
    }
`





