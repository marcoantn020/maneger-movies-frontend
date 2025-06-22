import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    display: flex;
    gap: 1rem;
    
    > section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme['gray-300']};
        border-radius: 8px;
    }
`;

export const TabLink = styled(NavLink)`
    flex: 1;
    text-decoration: none;
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${props => props.theme['gray-500']};
    font-weight: 500;
    ${props => props.theme['text-md']};
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
    text-align: center;
    text-wrap: nowrap;

    &.active {
        background: ${props => props.theme['gray-100']};
        color: ${props => props.theme['purple-light']};
    }
`;
