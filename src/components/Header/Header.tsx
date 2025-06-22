import {Image, Loading, Wrapper} from "./styles.ts";
import {IconButton} from "../IconButton/IconButton.tsx";
import {SignOut} from "phosphor-react";
import {useAuth} from "../../hooks/useAuth.ts";
import {TabPage} from "./components/TabPage.tsx";
import ImagePerfil from '../../assets/Cover.png'
import {useTheme} from "styled-components";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";


export function Header() {
    const { logout } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();

    const { user, loading } = useSelector((state: RootState) => state.profile);

    const name = user?.full_name ?? localStorage.getItem('user_name');
    const photo = user?.photo ?? localStorage.getItem('photo');

    function handleProfile() {
        navigate('/adm/profile')
    }

    return (
        <Wrapper>
            <div className="aux"></div>
            <main>
                <div className="toggle">
                    <TabPage />
                </div>
            </main>

            <aside>
                {loading ? (<Loading>Carregando ...</Loading>) : (
                    <section>
                        <p>Olá, {name}</p>
                        <Image
                            title='Perfil'
                            onClick={handleProfile}
                            src={photo ?? ImagePerfil}
                        />
                        <IconButton
                            size={32}
                            style={{color: theme['error-base'], fontWeight: 'bold'}}
                            onClick={logout}
                            title='Efetuar logout'
                            icon={<SignOut />}
                        />
                    </section>
                )}
            </aside>
        </Wrapper>
    );
};