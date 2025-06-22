import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from "react";

interface NavButtonProps {
    $hasIcon?: boolean;
    to: string;
    children: React.ReactNode;
}

export const NavButton = styled(NavLink)<NavButtonProps>`
  width: 100%;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;

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
  color: ${props => props.theme['white']};
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
    background-color: ${props => props.theme['purple-base']};
    transform: translateY(-1px); 
  }

  &:active:not(:disabled) {
    transform: translateY(0); 
  }

  &.active {
    background: ${props => props.theme['purple-base']};
    box-shadow: 0 0 0 2px ${props => props.theme['purple-base']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;