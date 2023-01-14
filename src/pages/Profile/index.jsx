import { FiArrowLeft , FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container , Form , Avatar} from "./style"

export function Profile(){
    const { user, updateProfile } = useAuth();
    

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

    const avatarUrl = user.avatar ?? `${api.defaults.baseURL}/files/${user.avatar}`;
    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew ,
            old_password: passwordOld
        }
        await updateProfile({ user, avatarFile })
    }

    async function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
    <Container>
        <header>
            <Link>
                <FiArrowLeft/>
            </Link>
        </header>

        <Form>
            <Avatar>
                <img 
                src="https://storage.googleapis.com/golden-wind/explorer/description-assets/nivel-10/stage-10/avatar_placeholder.svg" alt="Foto do usúario" />
                <label
                 htmlFor="avatar">
                    <FiCamera/>
                    <input 
                    id="avatar"
                    type="file"
                    onChange={handleChangeAvatar}
                    />
                </label>
            </Avatar>
        <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
        />

        <Input
            placeholder="E-mail"
            type="email"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
        /> 

        <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
        /> 

        <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordNew(e.target.value)}
        /> 

        <Button  title="Salvar"  onClick={handleUpdate}  /> 
        </Form>
    </Container>

    )
}