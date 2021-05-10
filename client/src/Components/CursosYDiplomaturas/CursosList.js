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
  Modal,
  Segment,
} from "semantic-ui-react";
import card1 from "../../Assets/Image/Card/card1.jpg";
import card2 from "../../Assets/Image/Card/card2.jpg";
import card3 from "../../Assets/Image/Card/card3.jpg";
import card4 from "../../Assets/Image/Card/card4.jpg";
import card5 from "../../Assets/Image/Card/card5.jpg";

function Modales() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" primary>
          Ver mas
          <Icon name="chevron right" />
        </Button>
      }
    >
      <Modal.Header>Curso de Posgrado</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={card1} wrapped />
        <Modal.Description>
          <p>Descripcion</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>
          Volver
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function CursosList() {
  return (
    <div>
      <Segment>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Section link>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Cursos</Breadcrumb.Section>
          </Breadcrumb>
        </Container>
      </Segment>
      <Header as="h2" content="Nuestro Cursos" textAlign="center" />
      <Divider hidden />
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src={card1} />
            <Item.Content>
              <Item.Header as="a">Nuestro Cursos</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Modales />
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

export default CursosList;
