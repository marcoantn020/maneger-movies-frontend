import styled from "styled-components";
import {Link} from "react-router-dom";


export const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem;

  background-color: ${props => props.theme['gray-100']};
  color: ${props => props.theme['white']};
  text-align: center;
`;

export const Code = styled.h1`
  font-size: 9rem;
  color: ${props => props.theme['purple-light']};
  margin: 0;
`;

export const Message = styled.p`
  max-width: 520px;
  font-size: 1rem;
  color: ${props => props.theme['gray-600']};
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['white']};
  font-size: 1rem;
  text-decoration: none;

  transition: background 0.15s ease;

  &:hover {
      ${props => props.theme['purple-base']};
      transform: translateY(-1px);
  }

  svg {
    flex-shrink: 0;
  }
`;
