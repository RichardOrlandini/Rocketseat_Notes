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

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");


    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter( link => link !== deleted));
        //retornando para dentro do setLinks uma lista nova
    } 

    function handleAddTags(){
        setTags(prevState => [...prevState]);
        setNewTags("");
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
                                onClick={() => handleRemoveLink(link)}
                                //Quando temos um parâmetro na função no onClick devemos
                                //colocar na frente uma arrow function
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
                        {
                            tags.map((tag,index) => (
                                <NoteItem 
                                key={String(index)}
                                value={tag} 
                                onClick={() => {}} 
                                />
                            ))
                        }

                        <NoteItem 
                        isNew 
                        placeholder="Nova tag"
                        onChange={e => setNewTags(e.target.value)}
                        value={newTags}
                        onClick={handleAddTags}
                        />
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}