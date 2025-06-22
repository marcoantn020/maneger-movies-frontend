import {cloneElement, forwardRef, type ReactElement, type SelectHTMLAttributes, useState} from 'react';
import {Container, Wrapper} from "./styles";
import {ErrorMessage} from "../Typograph";
import {MagnifyingGlass} from "phosphor-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    icon?: ReactElement;
    error?: string;
    options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            icon = <MagnifyingGlass weight="regular" size={16}/>,
            error,
            options,
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

                    <select
                        ref={ref}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        {...rest}
                    >
                        {options.map((option, index) => (
                            <option
                                key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                </Container>

                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Wrapper>
        );
    }
);

