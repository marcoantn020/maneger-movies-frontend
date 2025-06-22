import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    input:focus {
        outline: 0;
        color: ${props => props.theme['gray-500']};
        box-shadow: 0 0 0 2px ${props => props.theme["gray-300"]};
    }
    
    select:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["purple-base"]};
    }

    body {
        background: ${props => props.theme["gray-100"]};
        color: ${props => props.theme["white"]};
        --webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    option {
        background: ${props => props.theme['gray-200']};
        color: ${props => props.theme['white']};
        border-radius: 10px;
    }
`;