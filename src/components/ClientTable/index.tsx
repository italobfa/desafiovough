import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Container } from "./styles";

interface Client {
  id?: number;
  name: string;
  company: string;
  sector: string;
  email: string;
  number: number;
  site: string;
}

export function ClientTable() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Empresa</Th>
            <Th>Setor</Th>
            <Th>Número</Th>
            <Th>E-mail</Th>
            <Th>Site</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((client) => {
            return (
              <Tr key={client.id}>
                <Td>{client.name}</Td>
                <Td>{client.company}</Td>
                <Td>{client.sector}</Td>
                <Td>{client.number}</Td>
                <Td>{client.email}</Td>
                <Td>
                  <a
                    href={client.site}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Acessar Site
                  </a>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
}
