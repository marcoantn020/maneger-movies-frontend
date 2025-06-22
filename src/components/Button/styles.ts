import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $hasIcon: boolean }>`
    width: 100%;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.875rem 1.5rem;
    ${({ $hasIcon }) =>
            !$hasIcon &&
            css`
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    `};

    background: ${props => props.theme['purple-base']};
    border: none;
    border-radius: 6px;
    color: ${props => props.theme['white']};;
    font-size: ${props => props.theme['input']};
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
    transition:
            background 0.15s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;

    svg {
        flex-shrink: 0; 
    }

    &:hover:not(:disabled) {
        background: ${props => props.theme['purple-light']};
        box-shadow: ${props => props.theme['purple-base']};;
        transform: translateY(-1px); 
    }

    &:active:not(:disabled) {
        transform: translateY(0); 
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
