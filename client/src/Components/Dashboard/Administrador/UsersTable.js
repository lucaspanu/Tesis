import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Icon, Table } from "semantic-ui-react";

function UsersTable({ users }) {
  return (
    <Container>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Facha de Registro</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Rol</Table.HeaderCell>
            <Table.HeaderCell>Perfil</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((usuario) => (
            <>
              <Table.Row>
                <Table.Cell>{usuario.name}</Table.Cell>
                <Table.Cell>{usuario.createdAt}</Table.Cell>
                <Table.Cell>{usuario.email}</Table.Cell>
                <Table.Cell>{usuario.role}</Table.Cell>
                <Table.Cell>next</Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Button
                as={Link}
                to="/admin/nuevo"
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Nuevo Usuario
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
}

export default UsersTable;
