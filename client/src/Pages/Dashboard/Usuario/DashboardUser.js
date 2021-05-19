import React from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
  Table,
} from "semantic-ui-react";

function DashboardUser() {
  return (
    <div>
      <Segment>
        <Header as="h1" dividing>
          Dashboard
        </Header>
        <Container>
          <Header>Cursos</Header>
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

          <Divider />

          {/* Diplomaturas */}
          <Header>Diplomaturas</Header>
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
        </Container>
      </Segment>
    </div>
  );
}

export default DashboardUser;
