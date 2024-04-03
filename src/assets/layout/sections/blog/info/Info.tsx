import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../../components/button/Button";

export const Info = () => {
    return (
        <StyledInfo>
            <Title>Leave us your info</Title>
            <StyledForm>
                <StyledFormItem>
                    <StyledLabel htmlFor="userName">Your Full Name ( Required)</StyledLabel>
                    <StyledInput id="userName" type="text" name="user-name" placeholder="name"/>
                </StyledFormItem>
                <StyledFormItem>
                    <StyledLabel htmlFor="userEmail">Your Email ( Required)</StyledLabel>
                    <StyledInput id="userEmail" type="email" name="user-email" placeholder="email"/>
                </StyledFormItem>
                <StyledFormItem>
                    <StyledLabel htmlFor="userSubject">Subject</StyledLabel>
                    <StyledInput id="userSubject" type="text" name="user-subject" placeholder="subject"/>
                </StyledFormItem>
                <StyledFormItem>
                    <StyledLabel htmlFor="userMessage">Your Message</StyledLabel>
                    <StyledTextarea id="userMessage" name="user-message"  placeholder="message"></StyledTextarea>
                </StyledFormItem>
                <Button text={"send message"}/>
            </StyledForm>
        </StyledInfo>
    );
};


const StyledInfo = styled.div`
    min-width: 570px;
    background-color: aqua;
    min-height: 70vh;
   
`

const Title = styled.h2``


const StyledForm = styled.form`

    border: solid 1px red;
    max-width: 570px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;
`

const StyledFormItem = styled.div`
    /* Стили для элемента div */
`;

const StyledLabel = styled.label`
    /* Стили для элемента label */
`;

const StyledInput = styled.input`
    /* Стили для поля ввода */
`;

const StyledTextarea = styled.textarea`
    /* Стили для текстовой области */
`;
