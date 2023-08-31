import { useState } from 'react'; //Ruck para criar estados --

import { Link, useNavigate} from 'react-router-dom';

import {FiLogIn, FiMail, FiLock, FiUser} from 'react-icons/fi';

import { api } from "../../services/api";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container , Form, Background} from './styles';

export function SignUp(){
    const [name, setName] = useState(""); //Quando criamos um estado, podemos informar um valor inicial --
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if (!name || !email || !senha){
            return   alert("Preencha todos os campos")
        }

        api.post("/usuario", {name, email, senha})
        .then( () => {
            alert("usuário cadastrado com sucesso!");
            navigate("/");
        })  
        .catch(error => {
            if  (error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possivel cadastrar");
            }
        });                  
    }

    return (
        <Container>
             <Background/>

            <Form>
                <h1>Supla-Ment</h1>
                <p>Compre os melhores suplementos</p>

                <h2>Cadastro</h2>
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange= {event => setName(event.target.value)}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange= {event => setEmail(event.target.value)}
                />

                <Input
                placeholder="Senha"
                type="senha"
                icon={FiLock}
                onChange= {event => setSenha(event.target.value)}
                />

                <Button  title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

           
        </Container>
    );
}