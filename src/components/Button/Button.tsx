import type {ButtonHTMLAttributes, ReactElement} from 'react';
import {StyledButton} from "./styles.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactElement;
}

export function Button({icon, children, ...rest}: ButtonProps) {
    return <StyledButton $hasIcon={!!icon} {...rest}>
        {icon}
        {children}
    </StyledButton>
}
