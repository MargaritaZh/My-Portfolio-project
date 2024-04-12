// import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";
//
// type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, HTMLInputElement | HTMLTextAreaElement>
//
// interface IProps extends DefaultInputProps {
//     label: ReactNode
//     as: 'textarea' | 'input'
// }
//
// export const Input = ({label, as, ref, ...rest}: IProps) => {
//
//     return (
//         <label>
//             {label}
//             {as === 'textarea'
//                 ?
//                 <textarea {...rest}>
//
//             </textarea>
//                 :
//                 <input {...rest}></input>
//             }
//         </label>
//     )
// }

import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode, forwardRef, Ref } from "react";
import styled from "styled-components";

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
`;

const InputLabel = styled.span`
    margin-bottom: 4px;
`;

const StyledInput = styled.input`
    /* Your styles for input */
`;

const StyledTextarea = styled.textarea`
    /* Your styles for textarea */
`;