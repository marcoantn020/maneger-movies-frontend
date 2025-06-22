import {type ReactElement, useState} from 'react';
import { UploadSimple, X } from 'phosphor-react';
import {Actions, Container, Dialog, Header, Input, Overlay, Placeholder} from "./styles.ts";

interface ImagePickerProps {
    value?: string;
    onChange: (nextUrl: string) => void;
    icon?: ReactElement;
    label?: string;
}

export function ImagePicker({
                                value,
                                onChange,
                                icon = <UploadSimple weight="regular" />,
                                label = 'Fazer upload',
                                ...rest
                            }: ImagePickerProps) {
    const [open, setOpen] = useState(false);
    const [tempUrl, setTempUrl] = useState(value ?? '');

    const openModal = () => {
        setTempUrl(value ?? '');
        setOpen(true);
    };

    const closeModal = () => setOpen(false);

    const handleSave = () => {
        onChange(tempUrl.trim());
        closeModal();
    };

    return (
        <>
            <Container onClick={openModal} {...rest}>
                {value ? (
                    <img src={value} alt="Imagem selecionada" />
                ) : (
                    <Placeholder>
                        {icon}
                        <span>{label}</span>
                    </Placeholder>
                )}
            </Container>

            {open && (
                <Overlay onClick={closeModal}>
                    <Dialog onClick={(e) => e.stopPropagation()}>
                        <Header>
                            <h3>Insira a URL da imagem</h3>
                            <button onClick={closeModal}>
                                <X size={20} weight="bold" />
                            </button>
                        </Header>

                        <Input
                            autoFocus
                            placeholder="https://exemplo.com/imagem.jpg"
                            value={tempUrl}
                            onChange={(e) => setTempUrl(e.target.value)}
                        />

                        <Actions>
                            <button className="cancel" onClick={closeModal}>
                                Cancelar
                            </button>
                            <button
                                className="save"
                                onClick={handleSave}
                                disabled={!tempUrl.trim()}
                            >
                                Salvar
                            </button>
                        </Actions>
                    </Dialog>
                </Overlay>
            )}
        </>
    );
}
