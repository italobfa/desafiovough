import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  table{
    max-width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 500;
      padding: 1rem 0.65rem;
      text-align: center;
      line-height: 2rem;
    }

    td{
      color: var(--deep-blue);
      background: var(--background-td);
      padding: 1rem 0.65rem;
      text-align: center;

      a{
        text-decoration: none;
        color: var(--deep-blue);
      }
    }
  }
`