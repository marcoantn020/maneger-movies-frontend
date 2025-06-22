import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 64rem;

    height: 100%;
    max-height: 60vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem auto 0 auto;


    main {
        width: 100%;
        max-width: 25rem;
        height: 100%;
        
        > section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            
            p {
                color: ${props => props.theme['gray-500']};
            }
        }
    }

    aside {
        width: 100%;
        height: 100%;
    }
`

export const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 20px;
    border: 1px solid ${props => props.theme['gray-400']};
    object-fit: cover;
`

export const Form = styled.form`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
    }

    .action {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 3rem;
    }
`

export const Group = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

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