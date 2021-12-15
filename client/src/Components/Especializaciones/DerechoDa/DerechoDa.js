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

import imagen from "../../../Assets/Image/posgrado.jpg";
import DAPlanEstudio from "./DAPlanEstudio";
import DAPreguntas from "./DAPreguntas";

const panes = [
  {
    menuItem: "Informacion",

    render: () => (
      <Tab.Pane>
        <p style={{ fontSize: "1.1em" }}>
          Esta propuesta de posgrado es en respuesta a la necesidad planteada
          por numerosos miembros de la comunidad jurídica de la región, quienes
          han demandado a esta Casa de Altos Estudios la continuidad en la
          formación de esta área disciplinar del derecho. En sus inicios, el no
          contar con masa crítica suficiente constituyó un obstáculo para
          satisfacer con los estándares exigidos por la CONEAU. Por tal motivo,
          se celebró, entre la Universidad Nacional del Litoral y la Universidad
          Nacional de Tucumán, el “Convenio Marco de Cooperación Científica y
          Cultural” (Resolución Nº 282-977), un “Acuerdo de Colaboración”, de
          fecha 2 de Agosto de 2000, y un convenio específico de cooperación
          académica del año 2008 convalidado por Resolución del Rector N°
          0555/2010, entre ambas Universidades. Bajo ese complejo reglamentario,
          se posibilitó el dictado en nuestra Casa de Estudios, de la Carrera de
          Especialización en Derecho de Daños de la Facultad de Ciencias
          Jurídicas y Sociales de la Universidad Nacional del Litoral.
        </p>
        <br />
        <p style={{ fontSize: "1.1em" }}>
          Actualmente se da cumplimiento con la Resolución Ministerial N°
          160/2011 que aprueba los estándares y criterios a tenerse cuenta en
          los procesos de acreditación de carreras de posgrado.
        </p>
        <DAPreguntas />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Plan de Estudios",
    render: () => (
      <Tab.Pane>
        <DAPlanEstudio />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Docentes",
    render: () => (
      <Tab.Pane>
        <Header as="h3">Cuerpo Docente</Header>
        <p style={{ fontSize: "1em" }}>
          <br />
          Segui, Adela Maria
          <br />
          López Herrera, Edgardo Santiago
          <br />
          Hael De Mauvecin, Juana Inés Ines
          <br />
          Japaze, María Belén
          <br />
          Mercado, Pablo Martín Martín
          <br />
          Nacul, Marìa Sofia
          <br />
          Madkur, Hector Horacio
          <br />
          David De Martínez Zuccardi, Laura Alcira
          <br />
          Schmieloz, Graciela Elizabeth
        </p>
      </Tab.Pane>
    ),
  },
];

export default class DerechoDa extends Component {
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
              <Breadcrumb.Section link>
                <Link to="/especializaciones">Especializaciones</Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right arrow" />
              <Breadcrumb.Section active>Derecho de Daños</Breadcrumb.Section>
            </Breadcrumb>
          </Container>
        </Segment>
        <Segment>
          <Container style={{ minHeight: "60vh" }}>
            <Label as="a" color="blue" ribbon>
              Posgrado
            </Label>
            <Grid>
              <Grid.Row columns={2} only="computer">
                <Grid.Column width={10}>
                  <Header as="h2" style={{ fontSize: "3em" }}>
                    Especialización en Derecho de Daños
                  </Header>
                  <Tab panes={panes} />
                </Grid.Column>
                {/* CARD// PARTE DE LA DERECHA */}
                <Grid.Column width={6}>
                  <Card>
                    <Image src={imagen} wrapped ui={false} />
                    <Card.Content>
                      <Card.Description>
                        <Icon name="clock" /> Duración: 2 años - 380 hs.
                        académicas. <br />
                        <Icon name="user" /> Dirección: Adela Seguí <br />
                        <Icon name="user outline" /> Co- Dirección: José
                        Humberto Sahián <br />
                        <Icon name="balance scale" /> Titulo: Especialización en
                        Derecho de Daños
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>Res. N° 482/15</a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              {/* ESTA ES LA VISTA EN MOBILE */}
              <Grid.Column only="mobile" width={16}>
                <Header as="h2" style={{ fontSize: "3em" }}>
                  Especialización en Derecho de Daños
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
