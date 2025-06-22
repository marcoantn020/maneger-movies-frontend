import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
`

export const Container = styled.div`
    width: 100%;
    margin-top: 6rem;
`

export const Header = styled.div`
    width: 100%;
    height: 3.5rem;
    margin: 0 auto;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    main {
        width: 16.5rem;
    }
    
    aside {
        width: 35rem;
        display: flex;
        gap: 1rem;
        
        > button {
            width: 3rem;
        }
        
        > .clearFilters {
            width: 10rem;
            background-color: ${props => props.theme['gray-300']};
            
            &:hover {
                background-color: ${props => props.theme['gray-400']};
            }
        }
    }
`

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