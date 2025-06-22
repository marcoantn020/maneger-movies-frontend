import styled from "styled-components";

export const Wrapper = styled.div`
    width: 70%;           
    max-width: 70rem;           
    height: 53vh;        
    margin: 6rem auto 0;

    display: flex;
    gap: 2rem;

    main {
        flex: 1;
        height: 100%;
    }

    aside {
        width: 60%;
        max-width: 42rem;
        height: 100%;
        padding: 0 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        > .action {
            margin-top: 10px;

            display: flex;
            justify-content: flex-end;

            > div {
                width: 20rem;
                display: flex;
                gap: 1rem;
            }
        }
    }

    @media (max-width: 1024px) {
        width: 90%;
        height: auto;
        flex-wrap: wrap;          
        gap: 1.5rem;

        aside {
            width: 32rem;        
            > h1 {
                margin-bottom: 0.7rem;
            }
        }
    }

    @media (max-width: 768px) {
        margin-top: 8rem;
        flex-direction: column;  
        align-items: center;
        height: auto;

        main {
            width: 50%;
            height: auto;
        }

        aside {
            width: 100%;
            padding: 0;

            > .action {
                justify-content: center; 
                > div {
                    width: 100%;
                    flex-direction: column;
                }
            }
        }
    }
    
    @media (max-width: 480px) {
        gap: 1rem;

        aside > section {
            gap: 1.25rem;        
        }

        aside > .action > div {
            gap: 0.75rem;
        }
    }
`;


export const Group = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`


