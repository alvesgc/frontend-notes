import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"; 
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText"; 
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
      <Content>
        <ButtonText title="Excluir nota"/>
        <h1>Titulo da nota</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum vero minima praesentium ipsum quod esse neque suscipit, 
          fuga unde culpa voluptatem vel repudiandae, provident nulla ipsa mollitia, 
          ab labore! Nostrum?
        </p>
        <Section title="Links úteis">
         <Links>
            <li>
            <a href="#">https://instagram.com/al___vs</a>
            </li>

            <li>
            <a href="#">https://instagram.com/al___vs</a>
            </li>
         </Links>
        </Section>

        <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
        </Section>

        <Button title="Voltar" loading />
      </Content>
    </main>
      </Container>
  )
}