import { useState } from 'react';

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText';
import { NoteItem } from "../../components/NoteItem"
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


import { Container , Form} from "./styles";

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const navigate = new useNavigate();

    function handleBack(){
        navigate(-1)
      }

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter( link => link !== deleted));
        //retornando para dentro do setLinks uma lista nova
    } 

    function handleAddTags(){
        setTags(prevState => [...prevState, newTags]);
        setNewTags("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted, 1));
    }

    async function handleNewNote(){

        if(!title){
            return alert("Digite o titulo da nota");
        }

        if (newLink){
            return alert("Você deixou uma  link no campo para adicionar, mas não clicou em adicionar.");
        }

        if (newTags){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.");
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");
        navigate(-1);
    }

    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText title="Voltar"
                        onClick={handleBack}
                        />
                    </header>

                    <Input 
                    placeholder="Título"
                    onChange={ e => setTitle(e.target.value)}

                    />
                    <TextArea 
                    placeholder="Observações" 
                    onChange={ e => setDescription(e.target.value)}
                    />

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
                                onClick={() => handleRemoveTag(tag)} 
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
                    
                    <Button 
                    onClick={handleNewNote}
                    title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}