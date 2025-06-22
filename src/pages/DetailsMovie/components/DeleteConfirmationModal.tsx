import {Body, CancelButton, Container, DeleteButton, Footer, Header, Overlay} from "./styles.ts";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    movieTitle: string;
}

export function DeleteConfirmationModal({
                                            isOpen,
                                            onClose,
                                            onConfirm,
                                            movieTitle
                                        }: DeleteConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <Overlay>
            <Container>
                <Header>Confirmar Exclusão</Header>

                <Body>
                    <p>Tem certeza que deseja excluir o filme <strong>{movieTitle}</strong>?</p>
                    <p>Esta ação não pode ser desfeita.</p>
                </Body>

                <Footer>
                    <CancelButton onClick={onClose}>Cancelar</CancelButton>
                    <DeleteButton onClick={onConfirm}>Confirmar Exclusão</DeleteButton>
                </Footer>
            </Container>
        </Overlay>
    );
}

