import {cloneElement, forwardRef, type InputHTMLAttributes, type ReactElement, useState} from 'react';

import {MagnifyingGlass} from 'phosphor-react';
import {Container, Wrapper} from "./styles.ts";
import {ErrorMessage} from "../Typograph";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement;
    error?: string;
    allowClear?: boolean;
}


export const Input = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            icon = <MagnifyingGlass weight="regular" size={16}/>,
            error,
            allowClear = true,
            value,
            onChange,
            ...rest
        },
        ref
    ) => {
        const [focused, setFocused] = useState(false);

        return (
            <Wrapper>
                <Container $error={!!error} $focused={focused}>
                    <span className="left">{cloneElement(icon, {size: 16})}</span>

                    <input
                        ref={ref}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        {...rest}
                    />
                </Container>

                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Wrapper>
        );
    }
);
