import styled from "styled-components";

export const Box = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    
    > form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.2rem;
    }
`

export const Group = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    gap: 1rem;
`
