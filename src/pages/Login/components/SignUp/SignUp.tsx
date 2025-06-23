import {Box, Group} from "./styles.ts";
import {DisplayXl} from "../../../../components/Typograph";
import {Input} from "../../../../components/Input/Input.tsx";
import {Button} from "../../../../components/Button/Button.tsx";
import {useEffect, useState} from "react";
import {EnvelopeSimple, Password, Phone, User} from "phosphor-react";
import {FileInput} from "../../../../components/FileInput/FileInput.tsx";
import {useSignup} from "../../../../hooks/useSignup.ts";
import {useSelector, useDispatch} from "react-redux";
import * as React from "react";
import type {RootState} from "../../../../store/store.ts";
import {clearErrors} from "../../../../store/signupSlice.ts";
import {useNavigate} from "react-router-dom";

export function SignUp() {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [phone, setPhone] = useState('')
    const [photo, setPhoto] = useState<File | null>(null)

    const {signup} = useSignup();
    const {error, loading} = useSelector((state: RootState) => state.signup);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);
        formData.append('phone', phone);
        if (photo) {
            formData.append('photo', photo);
        }

        const success= await signup(formData);
        if (success) navigate('/adm')
    };

    const getError = (field: string) => {
        if (!error || !error[field]) return '';
        return error[field][0];
    };

    useEffect(() => {
        if (!error || Object.keys(error).length === 0) return;

        const timer = setTimeout(() => {
            dispatch(clearErrors());
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [error, dispatch]);

    return (
        <Box>
            <DisplayXl style={{marginTop: '15px'}}>
                Crie sua conta
            </DisplayXl>

            <form onSubmit={handleSubmit}>
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
                    onChange={(e) => setEmail(e.target.value)}
                    error={getError('email')}
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
                            if (file) {
                                setPhoto(file);
                            }
                        }}
                    />
                </Group>

                <Button
                    style={{marginTop: '10px'}}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Criando...' : 'Criar'}
                </Button>
            </form>
        </Box>
    );
}