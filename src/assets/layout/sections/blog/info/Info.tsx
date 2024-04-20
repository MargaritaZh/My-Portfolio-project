import styled from "styled-components";
import {Button} from "../../../../../components/button/Button";
import {Input} from "./input/Input";
import {theme} from "../../../../../styles/Theme";
import React from "react";

const formData = [
    {
        id: "userName",
        type: "text",
        name: "user-name",
        placeholder: "name",
        label: "Your Full Name (Required)",
        "as": "input",
    },
    {
        id: "userEmail",
        type: "email",
        name: "user-email",
        placeholder: "email",
        label: "Your Email (Required)",
        "as": "input",
    },
    {
        id: "userSubject",
        type: "text",
        name: "user-subject",
        placeholder: "subject",
        label: "Subject",
        "as": "input",
    },
    {
        id: "userMessage",
        name: "user-message",
        placeholder: "message",
        label: "Your Message",
        "as": "textarea",
    },

]


export const Info: React.FC = () => {
    return (
        <StyledInfo>
            <Title>Leave us your info</Title>
            <StyledForm>

                {formData.map((e) => (
                    <Input
                        key={e.id}
                        id={e.id}
                        type={e.type}
                        name={e.name}
                        placeholder={e.placeholder}
                        label={
                            <StyledLabel htmlFor={e.id}>{e.label}</StyledLabel>
                        }
                        as={e.as as "textarea" | "input"}
                    />
                ))}

                <Button text={"send message"} btnType={"infoBtn"}/>
            </StyledForm>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    max-width: 570px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    outline: solid 1px blueviolet;

    @media ${theme.media.desktop} {
        max-width: 970px;
    }
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 50px;

    @media ${theme.media.tablet} {
        margin-bottom: 30px;
        text-align: center;
    }
`

const StyledForm = styled.form`
    background-color: ${theme.colors.secondaryBg};
    width: 100%;
    padding: 25px;

    display: flex;
    flex-direction: column;
    gap: 25px;
`

const StyledLabel = styled.label``




