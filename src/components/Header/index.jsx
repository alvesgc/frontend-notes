import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
export function Header() {
  return (
    <Container>
      <Profile to="profile">
        <img src="https://github.com/alvesgc.png"  alt="Foto do usuario"/>
        
        <div>
          <span>Bem-vindo</span>
          <strong>Alisson alves</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
