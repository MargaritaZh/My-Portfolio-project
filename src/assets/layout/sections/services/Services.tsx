import React from 'react';
import {Service} from "./service/Service";
import {SectionDescription} from "../../../../components/SectionDescription";
import {StyledSection} from "../../../../components/StyledSection";
import {SectionTitle} from "../../../../components/SectionTitle";
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {SectionText} from "../../../../components/SectionText";
import {theme} from "../../../../styles/Theme";


const servicesData = [
    {
        iconId: "coding",
        height: "68",
        width: "68",
        viewBox: "0 0 68 68",
        title: "Web Development",
        text: "Blog, E-commerce",
        isLink: false,
    },
    {
        iconId: "illustration",
        height: "68",
        width: "68",
        viewBox: "0 0 68 68",
        title: "UI/UX design",
        text: "Mobile App, Website Design",
        isLink: false,
    },
    {
        iconId: "microphone",
        height: "74",
        width: "74",
        viewBox: "0 0 74 74",
        title: "Sound Design",
        text: "Voice Over, Beat Making",
        isLink: false,
    },
    {
        iconId: "gameDevelopment",
        height: "74",
        width: "74",
        viewBox: "0 0 74 74",
        title: "Game Design",
        text: "Character Design, Props & Objects",
        isLink: false,
    },
    {
        iconId: "photographer",
        height: "78", width: "78", viewBox: "0 0 78 78",
        title: "Photography",
        text: "Portrait, Product Photography",
        isLink: false,
    },
    {
        title: "Advertising",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ",
        isLink: true,
    }
]

export const Services: React.FC = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle>
                    <SectionText>My Services</SectionText>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit
                        officia consequat duis
                        enim velit mollit. lorem ipsum</SectionDescription>
                </SectionTitle>
                <ServicesWrapper>

                    {servicesData.map((s) => {
                        return (
                            <Service
                                iconId={s.iconId} height={s.height} width={s.width} viewBox={s.viewBox}
                                title={s.title}
                                text={s.text}
                                isLink={s.isLink}
                            />
                        )
                    })}

                </ServicesWrapper>
            </Container>
        </StyledSection>
    );
};


const ServicesWrapper = styled.div`
    outline: 3px solid blue;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    grid-auto-rows: 225px;
    gap: 20px;

    @media ${theme.media.tablet} {
        padding: 0 18px 0;
    }
`









