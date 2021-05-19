import React from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Statistic,
  Table,
} from "semantic-ui-react";

function DashboardAdmin() {
  return (
    <div>
      <br />
      <Grid stackable padded>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="teal">
            <Statistic.Value>5,550</Statistic.Value>
            <Statistic.Label>Usuarios</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="green">
            <Statistic.Value>5,234</Statistic.Value>
            <Statistic.Label>Usuarios Activos</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="blue">
            <Statistic.Value>5,342</Statistic.Value>
            <Statistic.Label>Profesores</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="red">
            <Statistic.Value>5,234</Statistic.Value>
            <Statistic.Label>Administradores</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid>
      <Divider />
      <Grid stackable padded>
        <Grid.Column>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name="folder" /> node_modules
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell collapsing textAlign="right">
                  10 hours ago
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="folder" /> test
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="folder" /> build
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="file outline" /> package.json
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="file outline" /> Gruntfile.js
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default DashboardAdmin;
