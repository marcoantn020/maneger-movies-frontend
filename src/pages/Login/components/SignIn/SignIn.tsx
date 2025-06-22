import {Box} from "./styles.ts";
import {DisplayXl} from "../../../../components/Typograph";
import {Input} from "../../../../components/Input/Input.tsx";
import {Button} from "../../../../components/Button/Button.tsx";
import {useEffect, useState} from "react";
import {EnvelopeSimple, Password} from "phosphor-react";
import {useAuth} from "../../../../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearAuthErrors} from "../../../../store/authSlice.ts";
import type {RootState} from "../../../../store/store.ts";
import * as React from "react";

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth();
    const dispatch = useDispatch();
    const { error, loading} = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(clearAuthErrors());
        const success = await login(email, password);
        if (success) navigate('/adm')
    };

    const getError = (field: string) => {
        if (!error || !error[field]) return '';
        return error[field][0];
    };

    useEffect(() => {
        if ((!error || Object.keys(error).length === 0)) return;

        const timer = setTimeout(() => {
            dispatch(clearAuthErrors());
        }, 5000);

        return () => clearTimeout(timer);
    }, [error, dispatch]);

    return (
        <Box>
            <DisplayXl style={{marginBottom: '15px'}}>
                Acesse sua Conta
            </DisplayXl>

            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="E‑mail"
                    icon={<EnvelopeSimple/>}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={getError('email')}
                />

                <Input
                    type='password'
                    placeholder="Senha"
                    icon={<Password/>}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={getError('password')}
                />

                <Button
                    style={{marginTop: '10px'}}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Entrando...' : 'Entrar'}
                </Button>
            </form>

            <div style={{height: '2rem'}}></div>
        </Box>
    );
}