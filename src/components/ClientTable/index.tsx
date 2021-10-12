import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export function ClientTable() {
  const [clients, setClients] = useState([]);

  return (
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
        <Tr>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
