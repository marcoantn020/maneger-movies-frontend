import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

interface ContainerProps {
    $focused: boolean;
    $hasError: boolean;
}

export const Container = styled.label<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    width: 100%;
    padding: 0.70rem 1rem;
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 6px;
    background-color: ${props => props.theme['gray-100']};
    cursor: pointer;
    transition: border-color 0.2s;

    ${({$focused}) =>
            $focused &&
            css`
                border-color: ${props => props.theme['purple-base']}
            `}
    ${({$hasError}) =>
            $hasError &&
            css`
                border-color: ${props => props.theme['error-base']};
            `}
    svg {
        flex-shrink: 0;
    }

    .left {
        color: ${({$focused, $hasError}) =>
                $hasError ?
                        props => props.theme['error-base'] :
                        $focused ? props => props.theme['purple-light'] :
                                props => props.theme['gray-400']};
    }

    .file-name {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${props => props.theme['white']};
        font-size: ${props => props.theme['input']};
    }

    .placeholder {
        color: ${props => props.theme['gray-400']};
        font-size: ${props => props.theme['input']};
    }

    .clear {
        cursor: pointer;
        color: ${props => props.theme['gray-600']};
        transition: color 0.15s;

        &:hover {
            ${props => props.theme['purple-base']};
        }
    }

    input[type='file'] {
        display: none;
    }
`;