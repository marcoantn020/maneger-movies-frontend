import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    background-color: ${props => props.theme['gray-200']};
    

    main {
        flex: 1;
        padding: 0;
        
        position: relative;
        
        > div {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
        }
    }

    aside {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 3rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        main, aside {
            padding: 1rem;
            
            img {
                display: none;
            }
        }

        aside {
            img {
                display: none;
            }
        }

        main {
            div {
                display: none;
            }
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    display: block;
`;

export const Content = styled.div`
    width: 40.5rem;
    height: 28rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.div`
    width: 100%;
`


