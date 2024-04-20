import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode, forwardRef, Ref } from "react";
import styled from "styled-components";
import {theme} from "../../../../../../styles/Theme";

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type DefaultTextareaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface IProps extends DefaultInputProps {
    label: ReactNode;
    as: 'textarea' | 'input';
}

export const Input = forwardRef(({ label, as, ...rest }: IProps, ref: Ref<HTMLInputElement | HTMLTextAreaElement>) => {
    return (
        <InputContainer>
            <InputLabel>{label}</InputLabel>
            {as === 'textarea' ? (
                <StyledTextarea {...rest as DefaultTextareaProps} ref={ref as Ref<HTMLTextAreaElement>} />
            ) : (
                <StyledInput {...rest} ref={ref as Ref<HTMLInputElement>} />
            )}
        </InputContainer>
    );
});

const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
`

const InputLabel = styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
`

const StyledInput = styled.input`
    padding: 7px 15px;
    width: 100%;
    height: 50px;
    background: ${theme.colors.primaryBg};
    border: solid 1px ${theme.colors.primaryBg};

    font-family: "Inter",sans-serif;
    color: ${theme.colors.fontDescription};
    font-size: 18px;
    font-weight: 500;
  
    &::placeholder{
        color: ${theme.colors.accent};
        text-transform: lowercase;
    }
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
    
`

const StyledTextarea = styled.textarea`
    padding: 7px 15px;
    width: 100%;
    min-height: 210px;
    background: ${theme.colors.primaryBg};
    border: solid 1px ${theme.colors.primaryBg};

    font-family: "Inter",sans-serif;
    color: ${theme.colors.fontDescription};
    font-size: 18px;
    font-weight: 500;

    resize: none;

    &::placeholder{
        color: ${theme.colors.accent};
        text-transform: capitalize;
    }

    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
  
`


