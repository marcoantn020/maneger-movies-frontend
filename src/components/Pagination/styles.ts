import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button<{ disabled?: boolean; $active?: boolean }>`
  padding: 0.5rem 1rem;
  min-width: 40px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['gray-300']};
  background-color: ${({ $active, theme }) =>
    $active ? theme['purple-light'] : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? 'white' : theme['gray-700']};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${({ $active, theme }) =>
    $active ? theme['purple-base'] : theme['gray-100']};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-600']};
  padding: 0.5rem 1rem;
`;

export const PageEllipsis = styled.span`
  padding: 0.5rem;
  color: ${({ theme }) => theme['gray-500']};
`;