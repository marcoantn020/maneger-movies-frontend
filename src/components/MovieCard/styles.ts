import styled, {css} from 'styled-components';
import {NavLink} from "react-router-dom";

export const Card = styled.article`
    position: relative;
    width: 16.25rem;
    aspect-ratio: 3 / 4;
    border-radius: 16px;
    overflow: hidden;
    background: ${props => props.theme['gray-100']};
    box-shadow: 0 4px 8px rgb(50, 27, 78);
`;

export const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 55%,
    rgba(0, 0, 0, 0.85) 100%
  );
`;

export const Info = styled.div`
  position: absolute;
  bottom: 18px;
  left: 18px;
  right: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${props => props.theme['white']};
`;

export const Meta = styled.span`
  font-size: ${props => props.theme['text-sm']};
    font-family: Nunito, sans-serif;
  font-weight: 400;
  color: ${props => props.theme['gray-600']};
`;

export const TitleLink = styled(NavLink)`
    ${({theme}) => css`
        font-family: 'Rajdhani',serif;
        font-size: ${theme['title-lg']};
        font-weight: bold;
        color: ${theme['white']};
    `}
    text-decoration: none;
`