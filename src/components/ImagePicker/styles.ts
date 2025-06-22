import styled from "styled-components";

export const Container = styled.button`
    all: unset;
    cursor: pointer;
    position: relative;

    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: ${props => props.theme['gray-200']};
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 0 0 2px ${props => props.theme['purple-light']};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;    
        object-position: center;
    }
`;

export const Placeholder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: ${props => props.theme['purple-base']};

    font-size: ${props => props.theme['text-sm']};

    svg {
        width: 32px;
        height: 32px;
    }

    span {
        color: ${props => props.theme['gray-500']};
    }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(2px);
    display: grid;
    place-items: center;
    z-index: 1000;
`;

export const Dialog = styled.div`
  width: 92%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 12px;
  background-color: ${props => props.theme['gray-200']};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font: 600 1.1rem/1 'Inter', sans-serif;
    color: ${props => props.theme['gray-600']};
  }

  button {
    all: unset;
    cursor: pointer;
    color: ${props => props.theme['gray-600']};
    transition: color 0.15s;

    &:hover {
      color: ${props => props.theme['white']};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme['gray-300']};
  background-color: ${props => props.theme['gray-100']};
  color: ${props => props.theme['gray-600']};
  font-size: 0.95rem;

  &::placeholder {
    color: ${props => props.theme['gray-600']};
  }

  &:focus-visible {
    outline: none;
    border-color: ${props => props.theme['purple-light']};
  }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;

    button {
        all: unset;
        cursor: pointer;
        padding: 0.6rem 1.2rem;
        border-radius: 6px;
        font: 500 0.9rem 'Inter', sans-serif;
        transition: background 0.15s ease;
    }

    .cancel {
        color: ${props => props.theme['gray-600']};
        background: ${props => props.theme['gray-300']};

        &:hover {
            background: ${props => props.theme['gray-400']};
            transform: translateY(-1px);
        }
    }

    .save {
        background-color: ${props => props.theme['purple-base']};
        color: ${props => props.theme['white']};

        &:hover {
            background: ${props => props.theme['purple-light']};
            transform: translateY(-1px);
        }

        &:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            transform: translateY(0);
        }
    }
`;