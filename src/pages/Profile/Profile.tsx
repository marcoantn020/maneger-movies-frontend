import {Form, Group, Image, Loading, Wrapper} from "./styles.ts";
import {EnvelopeSimple, Password, Phone, User} from "phosphor-react";
import React, {useEffect, useState} from "react";
import {DisplayXl} from "../../components/Typograph";
import {Input} from "../../components/Input/Input.tsx";
import {FileInput} from "../../components/FileInput/FileInput.tsx";
import {Button} from "../../components/Button/Button.tsx";
import ImagePerfil from '../../assets/Cover.png'
import {useProfile} from "../../hooks/useProfile.ts";
import {useDispatch, useSelector} from "react-redux";
import {clearProfileErrors} from "../../store/profileSlice.ts";
import type {RootState} from "../../store/store.ts";

export function Profile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phone, setPhone] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);

    const { user, loading, errors } = useSelector((state: RootState) => state.profile);
    const { fetchUser, updateUser } = useProfile();
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        if (password) formData.append('password', password);
        if (passwordConfirmation) formData.append('password_confirmation', passwordConfirmation);
        formData.append('phone', phone);
        if (photo) formData.append('photo', photo);

        await updateUser(formData);
        await fetchUser();
    };

    const getError = (field: string): string => {
        return errors?.[field]?.[0] || '';
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name || '');
            setLastName(user.last_name || '');
            setEmail(user.email || '');
            setPhone(user.phone || '');
            setPhoto(null)
        }
    }, [user]);

    useEffect(() => {
        if (errors && Object.keys(errors).length > 0) {
            const timer = setTimeout(() => {
                dispatch(clearProfileErrors());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors, dispatch]);

    return (
        <Wrapper>
            <main>
                {loading ? (<Loading />) : (
                    <section>
                        <Image src={user?.photo ?? ImagePerfil} alt="Foto do perfil" />
                        <p>Conta criada em {user?.created_at}</p>
                        <p>Última atualização do perfil em {user?.updated_at}</p>
                    </section>
                )}
            </main>

            <aside>
                <DisplayXl style={{marginBottom: '15px'}}>
                    Meu perfil
                </DisplayXl>

                <Form onSubmit={handleSubmit}>
                    <section>
                        <Group>
                            <Input
                                placeholder="Primeiro nome"
                                icon={<User/>}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                error={getError('first_name')}
                            />

                            <Input
                                placeholder="Ultimo nome"
                                icon={<User/>}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                error={getError('last_name')}
                            />
                        </Group>

                        <Input
                            placeholder="E‑mail"
                            icon={<EnvelopeSimple/>}
                            value={email}
                            title="E-mail não pode ser alterado"
                            disabled
                        />

                        <Group>
                            <Input
                                placeholder="Senha"
                                icon={<Password/>}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={getError('password')}
                                type="password"
                            />

                            <Input
                                placeholder="Confirmar senha"
                                icon={<Password/>}
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                error={getError('password_confirmation')}
                                type="password"
                            />
                        </Group>

                        <Group>
                            <Input
                                placeholder="Telefone"
                                icon={<Phone/>}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                error={getError('phone')}
                            />

                            <FileInput
                                name="photo"
                                error={getError('photo')}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    setPhoto(file || null);
                                }}
                            />
                        </Group>
                    </section>

                    <div className="action">
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Atualizando...' : 'Atualizar'}
                        </Button>
                    </div>
                </Form>
            </aside>
        </Wrapper>
    );
}