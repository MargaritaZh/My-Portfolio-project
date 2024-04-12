import styled from "styled-components";
import {Button} from "../../../../../components/button/Button";
import {Input} from "./input/Input";
import {theme} from "../../../../../styles/Theme";

export const Info = () => {
    return (
        <StyledInfo>
            <Title>Leave us your info</Title>
            <StyledForm>
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
                    <Input
                        id='userMessage'
                        name="user-message"
                        placeholder="message"
                        label={
                            <StyledLabel htmlFor="userMessage">Your Message</StyledLabel>
                        }
                        as='textarea'
                    />
                <Button text={"send message"}/>
            </StyledForm>
        </StyledInfo>
    );
};


const StyledInfo = styled.div`
    max-width: 570px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    outline: solid 1px blueviolet;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 50px;
`


const StyledForm = styled.form`

    outline: solid 1px red;
    background-color: ${theme.colors.secondaryBg};
    width: 100%;
    padding: 25px;

    display: flex;
    flex-direction: column;
    gap: 25px;

`

const StyledLabel = styled.label`
    outline: solid 1px greenyellow;
`




