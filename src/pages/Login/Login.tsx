import {Wrapper, Content, Header, Image} from "./styles.ts";
import LoginImage from '../../assets/Login.png';
import {useState} from "react";
import {type Tab, ToggleAuth} from "../../components/ToggleButtonAuth/ToggleButtonAuth.tsx";
import {SignIn} from "./components/SignIn/SignIn.tsx";
import {SignUp} from "./components/SignUp/SignUp.tsx";
import {DisplayLg, DisplayMd} from "../../components/Typograph";

export function Login() {
    const [tab, setTab] = useState<Tab>('primary');

    return (
        <Wrapper>
            <main>
                <Image src={LoginImage} />
                 <div>
                     <DisplayMd>Jc filmes</DisplayMd>
                     <DisplayLg>
                         O guia definitivo para os <br/>amantes do cinema
                     </DisplayLg>
                 </div>
            </main>

            <aside>

                <Content>
                    <Header>
                        <ToggleAuth
                            value={tab}
                            onChange={setTab}
                            labelPrimary='Login'
                            labelSecondary='Cadastro'
                        />
                    </Header>
                    {
                        tab === 'primary' ? (
                            <SignIn />
                        ) : (
                            <SignUp />
                        )
                    }
                </Content>
            </aside>
        </Wrapper>
    );
}
