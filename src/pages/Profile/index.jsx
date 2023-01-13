import { FiArrowLeft , FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';

import { Container , Form , Avatar} from "./style"

export function Profile(){
    return (
    <Container>
        <header>
            <Link>
                <FiArrowLeft/>
            </Link>
        </header>

        <Form>
            <Avatar>
                <img src="https://github.com/RichardOrlandini.png" alt="Foto do usúario" />
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input 
                    id="avatar"
                    type="file"
                    />
                </label>
            </Avatar>
        <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
        />

        <Input
            placeholder="E-mail"
            type="email"
            icon={FiMail}
        /> 

        <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
        /> 

        <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
        /> 

        <Button  title="Salvar" /> 
        </Form>
    </Container>

    )
}