import styled from "styled-components";
import {Button} from "../../../components/Button/Button.tsx";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 15, 26, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme['gray-700']};
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  color: ${({ theme }) => theme['gray-600']};
  margin-bottom: 32px;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme['gray-700']};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-700']};

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme['error-base']};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme['error-light']};
  }
`;