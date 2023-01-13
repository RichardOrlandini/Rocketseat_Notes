
import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styled";

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/RichardOrlandini.png" 
                alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Richard Orlandini</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}