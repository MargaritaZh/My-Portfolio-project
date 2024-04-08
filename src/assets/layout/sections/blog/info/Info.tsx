import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from 'react';
import styled from "styled-components";
import {Button} from "../../../../../components/button/Button";

export const Info = () => {
    return (
        <StyledInfo>
            <Title>Leave us your info</Title>
            <StyledForm>
                <StyledFormItem>
                    <Input
                        id='userName'
                        type="text"
                        name="user-name"
                        placeholder="name"
                        label={
                            <StyledLabel htmlFor="userName">Your Full Name ( Required)</StyledLabel>
                        }
                        as='input'
                    />
                </StyledFormItem>
                <StyledFormItem>
                    <Input
                        id='userEmail'
                        type="email"
                        name="user-email"
                        placeholder="email"
                        label={
                            <StyledLabel htmlFor="userEmail">Your Email ( Required)</StyledLabel>
                        }
                        as='input'
                    />
                </StyledFormItem>
                <StyledFormItem>
                    <Input
                        id='userSubject'
                        type="text"
                        name="user-subject"
                        placeholder="subject"
                        label={
                            <StyledLabel htmlFor="userSubject">Subject</StyledLabel>
                        }
                        as='input'
                    />
                </StyledFormItem>
                <StyledFormItem>
                    <Input
                        id='userMessage'
                        name="user-message"
                        placeholder="message"
                        label={
                            <StyledLabel htmlFor="userMessage">Your Message</StyledLabel>
                        }
                        as='textarea'
                    />
                </StyledFormItem>
                <Button text={"send message"}/>
            </StyledForm>
        </StyledInfo>
    );
};


type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, HTMLInputElement | HTMLTextAreaElement>

interface IProps extends DefaultInputProps {
    label: ReactNode
    as: 'textarea' | 'input'
}

const Input = ({label, as, ref, ...rest}: IProps) => {

    return (
        <label>
            {label}
            {as === 'textarea'
                ?
                <textarea {...rest}>

            </textarea>
                :
                <input {...rest}></input>
            }
        </label>
    )
}

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

const StyledFormItem = styled.div``

const StyledLabel = styled.label``




