import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h2>Vough</h2>
      <nav>
        <ul>
          <li>
            <a href="http://localhost:3000">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000">Lista</a>
          </li>
          <li>
            <a href="http://localhost:3000">Suporte</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
