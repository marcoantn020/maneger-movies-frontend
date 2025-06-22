import {
    type TextareaHTMLAttributes,
    forwardRef,
    useState,
    type ChangeEvent
} from 'react';
import * as React from "react";
import {Container, StyledTextArea, Wrapper} from "./styles.ts";
import {ErrorMessage} from "../Typograph";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ error, onFocus, onBlur, onChange, ...rest }, ref) => {
        const [focused, setFocused] = useState(false);

        const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
            setFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
            setFocused(false);
            onBlur?.(e);
        };

        const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            onChange?.(e);
        };

        return (
            <Wrapper>
                <Container $focused={focused} $hasError={!!error}>
                    <StyledTextArea
                        ref={ref}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        {...rest}
                    />
                </Container>

                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Wrapper>
        );
    }
)