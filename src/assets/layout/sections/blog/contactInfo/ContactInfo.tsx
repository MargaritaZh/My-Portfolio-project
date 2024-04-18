import React from 'react';
import styled from "styled-components";
import {ContactInfoCard} from "./contactInfoCard/ContactInfoCard";
import {theme} from "../../../../../styles/Theme";

const cardData = [
    {
        info: [
            { label: "Country", value: "Bangladesh" },
            { label: "City", value: "Dhaka" },
            { label: "Street", value: "35 vhatara, Badda" }
        ]
    },
    {
        info: [
            { label: "Email", value: "youremail@gmail.com" },
            { label: "Skype", value: "@yourusername" },
            { label: "Telegram:", value: "@yourusername" }
        ]
    },
    {
        info: [
            { label: "Support services", value: "15369" },
            { label: "Office", value: "+58 (021)356 587 235" },
            { label: "Personal", value: "+58 (021)356 587 235" }
        ]
    }
];

export const ContactInfo = () => {
    return (
        <StyledContactInfo>
            <Title>Contact information</Title>
            <ContactInfoCard items={cardData[0].info} iconId="location" width="18" height="18" viewBox="0 0 18 18" />
            <ContactInfoCard items={cardData[1].info} iconId="mail" width="18" height="18" viewBox="0 0 18 18" />
            <ContactInfoCard items={cardData[2].info} iconId="mobile" width="18" height="18" viewBox="0 0 18 18" />
        </StyledContactInfo>
    );
};

const StyledContactInfo = styled.div`
    background-color: ${theme.colors.primaryBg};
    min-height: 756px;
    max-width: 370px;
    width: 100%;

    outline: 1px solid greenyellow;
`


const Title = styled.h2`
    text-transform: capitalize;
    margin-bottom: 50px;
    
    @media ${theme.media.navMenu} {
        text-align: center;
    }
`


