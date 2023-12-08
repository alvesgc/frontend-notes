import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NotItem } from '../../components/NotItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';


export function New() {
  return (
    <Container>
      <Header />  
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NotItem value="https://instagram.com/al___Vs"/>
            <NotItem value="" isNew placeholder="Novo link"/>
          </Section>
          
          <Section title="Marcadores">
        <div className="tags">
          <NotItem value="React"/>
          <NotItem value="" isNew placeholder="Nova tag"/>

        </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
    
  )
};