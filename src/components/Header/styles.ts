import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    inset: 0 0 auto 0;         
    height: 4rem;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;

    background: ${({ theme }) => theme["gray-200"]};

    .aux,
    main .toggle,
    aside {
        width: 20rem;
    }

    main {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    aside section {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1.2rem;
        padding: 0 0.5rem;
    }

    @media (max-width: 1023px) {
        padding: 0 2rem;

        .aux,
        main .toggle,
        aside {
            width: 16rem;
        }
    }

    @media (max-width: 767px) {
        padding: 0 1rem;

        .aux {
            display: none;
        }

        main .toggle,
        aside {
            width: auto;
        }

        flex-direction: column;
        height: auto;

        aside section {
            justify-content: center;
            padding: 0.5rem 0;
        }
    }
`;

export const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 6px;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 28px;
        height: 28px;
    }

    @media (max-width: 479px) {
        width: 24px;
        height: 24px;
    }
`;

export const Loading = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme['gray-600']}
`