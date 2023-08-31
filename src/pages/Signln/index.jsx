import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles';

export function Signln() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { signIn } = useAuth();

  function handleSignIN() {
    signIn({ email, senha });
  }

  return (
    <Container>
      <Form>
        <h1>Supla-Ment</h1>
        <p>Compre os melhores suplementos</p>

        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="senha"
          icon={FiLock}
          onChange={e => setSenha(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIN} />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}