import { FiPlus, FiSearch } from 'react-icons/fi';

import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Nodejs" /></li>
      </Menu>

      <Search>
       <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>
      
      <Content>
        <Section title="Minhas notas">
        <Note data={{title: "React",
      tags:[
        {
          id: 1, name: "react",
        },
        {
          id: 2, name: "rocket"
        }
      ]}} />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}