import React from "react";
import {
  Button,
  Card,
  Grid,
  Header,
  Icon,
  Statistic,
  Table,
} from "semantic-ui-react";

function DashboardAdmin() {
  return (
    <div>
      <Grid stackable padded>
        <Grid.Column computer="4" tablet="8" mobile="16">
          <Card fluid>
            <Card.Content>
              <Header floated="right" color="red">
                <Icon name="shopping cart" />
              </Header>
              <Card.Header>
                <Header color="red">3453</Header>
              </Card.Header>
              <Card.Meta>Orders</Card.Meta>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cum augue
                varius, litora netus in et per dictumst eu auctor consequat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color="red">
                More Info
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        {/* 2 */}
        <Grid.Column computer="4" tablet="8" mobile="16">
          <Card fluid>
            <Card.Content>
              <Header floated="right" color="red">
                <Icon name="shopping cart" />
              </Header>
              <Card.Header>
                <Header color="red">3453</Header>
              </Card.Header>
              <Card.Meta>Orders</Card.Meta>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cum augue
                varius, litora netus in et per dictumst eu auctor consequat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color="red">
                More Info
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        {/* 3 */}
        <Grid.Column computer="4" tablet="8" mobile="16">
          <Card fluid>
            <Card.Content>
              <Header floated="right" color="red">
                <Icon name="shopping cart" />
              </Header>
              <Card.Header>
                <Header color="red">3453</Header>
              </Card.Header>
              <Card.Meta>Orders</Card.Meta>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cum augue
                varius, litora netus in et per dictumst eu auctor consequat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color="red">
                More Info
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        {/* 4 */}
        <Grid.Column computer="4" tablet="8" mobile="16">
          <Card fluid>
            <Card.Content>
              <Header floated="right" color="red">
                <Icon name="shopping cart" />
              </Header>
              <Card.Header>
                <Header color="red">3453</Header>
              </Card.Header>
              <Card.Meta>Orders</Card.Meta>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cum augue
                varius, litora netus in et per dictumst eu auctor consequat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid color="red">
                More Info
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
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
      <Grid stackable padded>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="teal">
            <Statistic.Value>5,550</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="teal">
            <Statistic.Value>5,550</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="teal">
            <Statistic.Value>5,550</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="teal">
            <Statistic.Value>5,550</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default DashboardAdmin;
