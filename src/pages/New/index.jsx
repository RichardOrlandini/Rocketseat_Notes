import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"


import { Container , Form} from "./styles";

export function New(){
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("")
    }


    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            Voltar
                        </Link>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações" />

                    <Section title="links úteis" >
                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => { }}
                            />
                            ))
                        }
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem 
                        isNew placeholder="Novo link"
                        value={newLink}
                        onChange={ e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem value="nodejs"/>
                        <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}