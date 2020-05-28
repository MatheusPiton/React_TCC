import React from 'react';
import './style.css';
import styled from 'styled-components';
import { User } from '@styled-icons/boxicons-solid/User';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

export default function Login() {

    const UserIcon = styled(User)`
        width: 20px;
        height: 20px;
    `;

    const PassWordIcon = styled(LockPassword)`
        width: 20px;
        height: 20px;
    `;

    return(
        <div className="container">
            <h1>Login</h1>
            <Input 
                placeholder="Usuario"
                border="1px solid #828282"
                color="black"
            />
            <UserIcon className="iconU" />
            <br />
            <br />
            <br />
            <Input
                placeholder="Senha"
                border="1px solid #828282"
                color="black"
                type="password"
            />
            <PassWordIcon className="iconS" />
            <br />
            <br />
            <br />
            <Link to={`/nav`}>
                <Button
                    backgroundColor="#FFF"
                    border="1px solid #828282"
                    color="black"
                >
                    ACESSAR
                </Button>
            </Link>
        </div>
    ); 
}