import styled from "styled-components";

export  const LayoutContainer = styled.div`
    max-width: 90vw;
    max-height: calc(100vh - 4rem);
    height: 100%;
    margin: 6rem auto;
    
    background-color: ${props => props.theme["gray-100"]};
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;