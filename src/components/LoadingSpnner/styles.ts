import styled from 'styled-components';

export const Loading = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${props => props.theme['purple-base']};
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const WrapperLoading = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
    width: 100vw;
`