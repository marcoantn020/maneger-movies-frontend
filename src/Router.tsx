import {Navigate, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {Login} from "./pages/Login/Login.tsx";
import {Explore} from "./pages/Explore/Explore.tsx";
import {MyMovies} from "./pages/MyMovies/MyMovies.tsx";
import {CreateMovie} from "./pages/CreateMovie/CreateMovie.tsx";
import {DetailsMovie} from "./pages/DetailsMovie/DetailsMovie.tsx";
import {NotFound} from "./pages/NotFound/NotFound.tsx";
import type {RootState} from "./store/store.ts";
import {useSelector} from "react-redux";
import {UpdateMovie} from "./pages/UpdateMovie/UpdateMovie.tsx";
import {Profile} from "./pages/Profile/Profile.tsx";

export function Router() {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <Routes>

            <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/adm" replace />} />

            <Route
                path="/adm"
                element={isAuthenticated ? <DefaultLayout /> : <Navigate to="/" />}
            >
                <Route index element={<Explore />} />
                <Route path="my-movies" element={<MyMovies />} />
                <Route path="new" element={<CreateMovie />} />
                <Route path="details/:id" element={<DetailsMovie />} />
                <Route path="edit/:id" element={<UpdateMovie />} />

                <Route path="profile" element={<Profile />} />

                <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};