
import {RiShutDownLine} from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Logout } from "./styled";
import { api } from '../../services/api';

export function Header(){
    const { sigOut, user} = useAuth();

    const avatarUrl = user.avatar ?? `${api.defaults.baseURL}/files/${user.avatar}`;


    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl}
                alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Richard Orlandini</strong>
                </div>
            </Profile>

            <Logout onClick={sigOut} >
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}