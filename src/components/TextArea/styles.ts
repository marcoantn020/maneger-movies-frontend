import styled, { css } from 'styled-components';

interface ContainerProps {
    $focused: boolean;
    $hasError: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div<ContainerProps>`
  border: 2px solid ${props => props.theme['gray-400']};
  border-radius: 8px;
  transition: border-color 0.2s;
  background: ${props => props.theme['gray-100']};

  ${({ $focused }) =>
    $focused &&
    css`
      border-color: ${props => props.theme['purple-base']};
    `}

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${props => props.theme['error-base']};
    `}
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    min-height: 150px;
    padding: 1rem;
    background: transparent;
    border: none;
    outline: none;
    resize: vertical;
    overflow: hidden;

    color: ${props => props.theme['white']};
    font-size: ${props => props.theme['input']};

    &::placeholder {
        color: ${props => props.theme['gray-400']};
    }
`;
