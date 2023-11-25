import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/alvesgc.png"  alt="Foto do usuario"/>
        
        <div>
          <span>Bem-vindo</span>
          <strong>Alisson alves</strong>
        </div>
      </Profile>
    </Container>
  )
}
