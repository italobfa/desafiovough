import styled from "styled-components";

export const Container = styled.div`
  background: var(--deep-blue);
  color: var(--gold);
  padding: 4rem 2rem 4rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 3rem;

  nav {
    font-size: 1.5rem;
    margin-top: 8rem;
    position: absolute;

    ul {
      list-style: none;
    }

    li {
      display: inline;
      padding: 0.5rem;
    }

    a {
      color: var(--gold);
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;
