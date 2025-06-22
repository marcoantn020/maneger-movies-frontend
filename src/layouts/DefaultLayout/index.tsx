import {LayoutContainer} from "./styles.ts";
import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header.tsx";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <LayoutContainer>
                <Outlet/>
            </LayoutContainer>
        </>
    );
}
