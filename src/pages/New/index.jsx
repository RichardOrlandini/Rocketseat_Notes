import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"

import { Container , Form} from "./styles";

export function New(){
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">
                            Voltar
                        </a>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações" />

                    <Section title="links úteis" > 
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo link"/>
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