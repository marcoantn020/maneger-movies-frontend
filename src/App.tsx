import defaultTheme from './styles/theme/default.ts'

import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global.ts";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router.tsx";

function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

export default App
