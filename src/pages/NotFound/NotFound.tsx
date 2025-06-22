import { ArrowLeft } from 'phosphor-react';
import {Code, HomeLink, Message, Wrapper} from "./styles.ts";

export function NotFound() {
    return (
        <Wrapper>
            <Code>404</Code>

            <Message>
                Ops! A página que você procurou não foi encontrada. Talvez o endereço
                esteja errado ou o conteúdo tenha sido removido.
            </Message>

            <HomeLink to="/">
                <ArrowLeft size={18} weight="bold" /> Voltar para o início
            </HomeLink>
        </Wrapper>
    );
}
