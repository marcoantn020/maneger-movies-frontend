import styled, {css} from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
`;

interface ContainerProps {
    $error: boolean;
    $focused: boolean;
}

export const Container = styled.label<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    width: 100%;
    padding: 0.70rem 0.5rem 0.70rem 1rem;
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 6px;
    background-color: ${props => props.theme['gray-100']};
    transition: border-color 0.2s;

    ${({$focused}) =>
            $focused &&
            css`
                border-color: ${props => props.theme['purple-light']};
            `}
    ${({$error}) =>
            $error &&
            css`
                border-color: ${props => props.theme['error-base']};
            `}
    select {
        flex: 1;
        width: 100%;
        background: transparent;
        border: 0;
        outline: 0;
        color: ${props => props.theme['white']};
        font-size: ${props => props.theme['input']};
        appearance: none; 
        cursor: pointer;

        &:focus {
            background-color: ${props => props.theme['gray-100']};
            border: none;
            outline: none;
            box-shadow: none;
        }
    }
`;