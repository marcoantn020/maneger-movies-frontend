import type {ButtonHTMLAttributes, ReactElement} from "react";
import {Button} from "./styles.ts";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactElement;
    size?: number;
}

export function IconButton({ icon, size = 25, ...rest }: IconButtonProps) {
    return (
        <Button $size={size} {...rest}>
            {icon}
        </Button>
    );
}