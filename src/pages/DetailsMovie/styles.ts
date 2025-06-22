import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    gap: 3.5rem;
    align-items: flex-start;
    max-width: 980px;
    width: 100%;
    margin-inline: auto;
    padding: 2rem 1rem;

    height: 60vh;
    
`;

export const Poster = styled.img`
    width: 19.375rem;
    height: 100%;
    border-radius: 14px;
    object-fit: cover;
    box-shadow: 0 0 18px rgba(155, 92, 246, 0.6);
`;

export const Content = styled.div`
    flex: 1;
    color: ${props => props.theme['gray-700']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
        > .buttonDelete {
            width: 100%;
            
            > button {
                background-color: ${props => props.theme['error-base']};
                &:hover {
                    background-color: ${props => props.theme['error-base']};
                }
            }
        }
    }
`;

export const Back = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 1.25rem;
    color: ${props => props.theme['gray-500']};
    font-size: ${props => props.theme['text-md']};

    &:hover {
        text-decoration: underline;
        transform: translateX(-1px);
    }

    svg {
        flex-shrink: 0;
    }
`;

export const Meta = styled.p`
  font-size: ${props => props.theme['text-md']};
  color: ${props => props.theme['gray-600']};
  margin-bottom: 1.25rem;

  span {
    font-weight: bold;
    color: ${props => props.theme['gray-700']};
  }
`;

export const Synopsis = styled.p`
  font-size: ${props => props.theme['text-md']};
  color: ${props => props.theme['gray-600']};
`;
