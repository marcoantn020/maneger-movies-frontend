import {
    forwardRef,
    type InputHTMLAttributes,
    type ReactElement,
    useRef,
    useState
} from 'react';
import { ImageSquare, XCircle } from 'phosphor-react';
import {Container, Wrapper} from "./styles.ts";
import * as React from "react";
import {ErrorMessage} from "../Typograph";

interface FileInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> {
    icon?: ReactElement;
    error?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (
        {
            icon = <ImageSquare size={16} />,
            placeholder = 'Selecione uma imagem',
            error,
            onChange,
            ...rest
        },
        _
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [focused, setFocused] = useState(false);
        const [fileName, setFileName] = useState<string | null>(null);

        const handleClickClear = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (inputRef.current) {
                inputRef.current.value = '';
                setFileName(null);
                onChange?.(
                    new Event('input', { bubbles: true }) as unknown as React.ChangeEvent<HTMLInputElement>
                );
            }
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0] || null;
            setFileName(file ? file.name : null);
            onChange?.(e);
        };

        return (
            <Wrapper>
                <Container
                    $focused={focused}
                    $hasError={!!error}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                >
                    <span className="left">{icon}</span>

                    {fileName ? (
                        <span className="file-name">{fileName}</span>
                    ) : (
                        <span className="placeholder">{placeholder}</span>
                    )}

                    {fileName && (
                        <span className="clear" onClick={handleClickClear} title="Remover arquivo">
              <XCircle size={16} weight="fill" />
            </span>
                    )}

                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        {...rest}
                    />
                </Container>

                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Wrapper>
        );
    }
);