import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.theme['gray-300']};
    border-radius: 12px;
`;

interface ButtonAuthProps {
    $active: boolean;
}

export const ButtonAuth = styled.button<ButtonAuthProps>`
  flex: 1;
  min-width: 130px;    
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${props => props.theme['gray-500']};
  font-weight: 500;
  font-size: ${props => props.theme['text-md']};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  ${({ $active }) =>
    $active &&
    css`
      background: ${props => props.theme['gray-100']};
      color: ${props => props.theme['purple-light']};
    `}

  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
