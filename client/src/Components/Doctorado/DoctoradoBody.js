import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  Breadcrumb,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Segment,
  Tab,
} from "semantic-ui-react";
import imagen from "../../Assets/Image/Doctorado.png";

const panes = [
  {
    menuItem: "Informacion",

    render: () => (
      <Tab.Pane>
        <p style={{ fontSize: "1.1em" }}>Informacion</p>
        {/* <DAPreguntas /> */}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Materias Optativas",
    render: () => (
      <Tab.Pane>
        {/* <DAPlanEstudio /> */}
        <h1>MAterias Optativas</h1>
      </Tab.Pane>
    ),
  },
];

export default class DoctoradoBody extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;

    return (
      <>
        <Segment>
          <Container>
            <Breadcrumb>
              <Breadcrumb.Section link>
                <Link to="/">Home</Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section link>Doctorado</Breadcrumb.Section>
            </Breadcrumb>
          </Container>
        </Segment>
        <Segment>
          <Container>
            <Label as="a" color="red" ribbon>
              Doctorado
            </Label>
            <Grid>
              <Grid.Row columns={2} only="computer">
                <Grid.Column width={10}>
                  <Header as="h2" style={{ fontSize: "3em" }}>
                    Doctorado en Derecho
                  </Header>
                  <Tab panes={panes} />
                </Grid.Column>
                {/* CARD// PARTE DE LA DERECHA */}
                <Grid.Column width={6}>
                  <Card>
                    <Image src={imagen} wrapped ui={false} />
                    <Card.Content>
                      <Card.Description>
                        <Icon name="user" /> Decano: Dra. Adela María Segui
                        <br />
                        <Icon name="balance scale" /> Titulo: Doctor/a en
                        Derecho
                        <br />
                        <Icon name="pencil square" /> CONEAU
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              {/* ESTA ES LA VISTA EN MOBILE */}
              <Grid.Column only="mobile" width={16}>
                <Header as="h2" style={{ fontSize: "3em" }}>
                  Doctorado en Derecho
                </Header>
                <Tab panes={panes} />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </>
    );
  }
}
