import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Menu,
  Progress,
  Segment,
  Sidebar,
  Statistic,
  Table,
} from "semantic-ui-react";
import "./Dashboard.css";

function Dashboard() {
  const [visible, setVisible] = React.useState(true);
  return (
    <body>
      {/* Menu lateral */}
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        id="sidebar"
      >
        <Menu.Item>
          <Menu.Header>General</Menu.Header>

          <Menu.Menu>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="tachometer alternate" />
                Dashboard
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Administration</Menu.Header>

          <Menu.Menu>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="cogs " />
                Settings
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="user" />
                Usuarios
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item as={Link} to="#">
          <div>
            <Icon name="chart line" />
            Charts
          </div>
        </Menu.Item>

        <Menu.Item as={Link} to="#">
          <div>
            <Icon name="lightbulb" />
            Apps
          </div>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Others</Menu.Header>
          <Menu.Menu>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="envelope" />
                Messages
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="calendar alternate" />
                Calendar
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Form action="#">
            <Input size="small" icon="search" placeholder="Search..." />
          </Form>
        </Menu.Item>

        <Segment inverted>
          <Progress color="olive" inverted percent={36} size="tiny">
            Monthy Bandwidth
          </Progress>
          <Progress color="teal" inverted percent={76} size="tiny">
            Disk Usage
          </Progress>
        </Segment>
      </Sidebar>
      {/* Menu lateral */}

      {/* Menu superior */}
      <Menu fixed="top" inverted borderless>
        <Menu.Menu position="left">
          <Menu.Item
            icon="sidebar"
            data-target="#sidebar"
            className="sidebar-menu-toggler"
            onClick={() => setVisible(true)}
          />
          <Menu.Item as={Link} to="/">
            <Menu.Header>Secretaria de Posgrado</Menu.Header>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item icon="bell" as={Link} to="#" />
          <Dropdown icon="user" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Header>Categories</Dropdown.Header>
              <Dropdown.Item>
                <Dropdown text="Clothing">
                  <Dropdown.Menu>
                    <Dropdown.Header>Mens</Dropdown.Header>
                    <Dropdown.Item>Shirts</Dropdown.Item>
                    <Dropdown.Item>Pants</Dropdown.Item>
                    <Dropdown.Item>Jeans</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Womens</Dropdown.Header>
                    <Dropdown.Item>Dresses</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Item>Bags</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Home Goods</Dropdown.Item>
              <Menu.Item as={Link} to="#">
                <div>
                  <Icon name="calendar alternate" />
                  Calendar
                </div>
              </Menu.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Configuracion</Dropdown.Item>
              <Dropdown.Item>Salir</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      {/* Menu superior */}

      <Sidebar.Pusher>
        <div className="main-content">
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
                    Lorem ipsum dolor sit amet consectetur adipiscing elit cum
                    augue varius, litora netus in et per dictumst eu auctor
                    consequat.
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
                    Lorem ipsum dolor sit amet consectetur adipiscing elit cum
                    augue varius, litora netus in et per dictumst eu auctor
                    consequat.
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
                    Lorem ipsum dolor sit amet consectetur adipiscing elit cum
                    augue varius, litora netus in et per dictumst eu auctor
                    consequat.
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
                    Lorem ipsum dolor sit amet consectetur adipiscing elit cum
                    augue varius, litora netus in et per dictumst eu auctor
                    consequat.
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
                    <Table.HeaderCell colSpan="3">
                      Git Repository
                    </Table.HeaderCell>
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
      </Sidebar.Pusher>
    </body>
  );
}

export default Dashboard;
