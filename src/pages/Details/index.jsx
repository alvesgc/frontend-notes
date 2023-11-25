import { Container, Links } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"; 
import { Section } from "../../components/Section"; 

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="links-uteis">
        <Links>
          <li>
            <a href="#">https://instagram.com/al___vs</a>
          </li>
          
          <li>
          <a href="#">https://instagram.com/al___vs</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar" loading />
    </Container>
  )
}