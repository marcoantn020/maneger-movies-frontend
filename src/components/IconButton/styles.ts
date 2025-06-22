import styled from 'styled-components';

export const Button = styled.button<{ $size: number }>`

    width: ${({$size}) => $size}px;
    height: ${({$size}) => $size}px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme['gray-400']};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    transition: background 0.15s ease, color 0.15s ease, box-shadow 0.2s ease;

    color: ${props => props.theme['gray-100']};

    svg {
        width: 60%;
        height: 60%;
        font-weight: bold;
    }

    &:hover:not(:disabled) {
        background-color: ${props => props.theme['gray-400']};
        color: ${props => props.theme['white']};
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;