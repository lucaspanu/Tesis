import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Segment,
} from "semantic-ui-react";
import card1 from "../../Assets/Image/Card/card1.jpg";
import card2 from "../../Assets/Image/Card/card2.jpg";
import card3 from "../../Assets/Image/Card/card3.jpg";
import card4 from "../../Assets/Image/Card/card4.jpg";
import card5 from "../../Assets/Image/Card/card5.jpg";

function DiplomaturasList() {
  return (
    <div>
      <Segment>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Section link>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Diplomaturas</Breadcrumb.Section>
          </Breadcrumb>
        </Container>
      </Segment>
      <Header as="h2" content="Nuestras Diplomaturas" textAlign="center" />
      <Divider hidden />
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src={card1} />
            <Item.Content>
              <Item.Header as="a">Nuestras Diplomaturas</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Button floated="right" primary>
                  Ver mas
                  <Icon name="chevron right" />
                </Button>
                <Image
                  avatar
                  circular
                  src="/images/wireframe/square-image.png"
                />
                Username
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src={card2} />
            <Item.Content>
              <Item.Header as="a">Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Button floated="right" primary>
                  Ver mas
                  <Icon name="chevron right" />
                </Button>
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={card3} />
            <Item.Content>
              <Item.Header as="a">Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Ver mas
                  <Icon name="chevron right" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={card4} />
            <Item.Content>
              <Item.Header as="a">Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Ver mas
                  <Icon name="chevron right" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={card5} />
            <Item.Content>
              <Item.Header as="a">Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Ver mas
                  <Icon name="chevron right" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
      <Divider hidden />
    </div>
  );
}

export default DiplomaturasList;
