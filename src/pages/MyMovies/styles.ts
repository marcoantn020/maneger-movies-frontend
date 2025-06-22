import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`

export const Header = styled.header`
    width: 100%;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 2rem;
  
    main {
        width: 16.5rem;
    }

    aside {
        width: 28.5rem;

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;

            .button {
                padding-left: 0.8rem;
                width: 6rem;
                border-left: 1px solid ${({ theme }) => theme['gray-400']};
            }
        }
    }

    @media (max-width: 1024px) {
        aside {
            width: 22rem; 
        }
    }

    @media (max-width: 768px) {
        height: auto;         
        flex-direction: column;
        gap: 1.25rem;

        main,
        aside {
            width: 100%;        
        }

        aside section {
            justify-content: space-between; 
        }
    }

    @media (max-width: 480px) {
        aside section {
            flex-wrap: wrap;     
            gap: 0.5rem;
        }

        .button {
            width: 100%;        
            padding-left: 0;    
            border-left: none;
            border-top: 1px solid ${({ theme }) => theme['gray-400']};
            padding-top: 0.5rem;
        }
    }
`;


export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    section {
        width: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        p {
            color: ${props => props.theme['gray-600']};
            font-size: ${props => props.theme['text-md']};
        }
    }
`

export const ListCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
`