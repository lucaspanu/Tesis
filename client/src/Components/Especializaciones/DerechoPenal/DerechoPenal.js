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
          Esta propuesta de posgrado tiene su antecedente en la carrera de
          Especialización en Derecho Penal dictada de manera interinstitucional
          con la Facultad de Ciencias Jurídicas y Sociales de la UNL, creada por
          resolución N° HCS 2220/01.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          Esta especialización tiene por objeto la profundización de los
          conocimientos específicos sobre los actuales desarrollos teóricos en
          materia penal, a los fines de introducir al alumno en el conocimiento
          y actualización de las valoraciones básicas sobre las que se construye
          un sistema de imputación penal en un Estado de Derecho, a la luz del
          desarrollo del Derecho Internacional y con el obligado cumplimiento
          por parte del Estado Argentino de dicha normativa.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          Bajo la evocación de esos principios se analiza el anclaje
          constitucional del derecho penal y se procede a desmenuzar el
          contenido de dichos principios y las relaciones que se despliegan
          entre ellos para la plena vigencia del Estado de Derecho. También se
          procura desarmar su postura tradicional de aislamiento, con respecto a
          otras disciplinas empíricas, como la criminología, aportando a sus
          contenidos el acervo critico que permita una visión externa al propio
          sistema penal y una interpretación teleológica de la norma y el bien
          jurídico, como fundamentos externos de legitimación de dicho sistema.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          Con relación al ordenamiento procesal penal se ofrece una exposición
          sucinta de sus contenidos y configuraciones siempre desde una
          perspectiva constitucional. Se presenta un amplio revelamiento de las
          categorías que fundamentan el ilícito penal, siguiendo los contenidos
          que, respecto de ellas, aportan los nuevos modelos de atribución.
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
          CARAMUTI Carlos Santiago Santiago
          <br />
          Lammoglia, Diego Ernesto
          <br />
          David, Jorge Enrique
          <br />
          Duffy, Maria Virginia
          <br />
          Fernandez Vecino, Graciela Nair
          <br />
          PALIZA Ángel José
          <br />
          REINOSO Adriana Marcela
          <br />
          IRIARTE YANICELLI Adolfo Antonio
          <br />
          JIMENEZ Elva Graciela
          <br />
          RIQUERT Marcelo Alfredo
          <br />
          ZAFFARONI Eugenio Raul
          <br />
          CASTILLO Ana Lia
          <br />
          FERNÁNDEZ DOMINGUEZ Gonzalo Daniel
          <br />
          SOZZO Maximo Emiliano
          <br />
          ALVAREZ Ricardo Carlos
          <br />
          PALERMO Omar Alejandro
          <br />
        </p>
      </Tab.Pane>
    ),
  },
];

export default class DerechoPenal extends Component {
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
              <Breadcrumb.Section active>Derecho Penal</Breadcrumb.Section>
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
                    Especialización en Derecho Penal
                  </Header>
                  <Tab panes={panes} />
                </Grid.Column>
                {/* CARD// PARTE DE LA DERECHA */}
                <Grid.Column width={6}>
                  <Card>
                    <Image src={imagen} wrapped ui={false} />
                    <Card.Content>
                      <Card.Description>
                        <Icon name="clock" /> Carga horaria: 372 horas <br />
                        <Icon name="user" /> Director: Prof. Carlos Caramuti{" "}
                        <br />
                        <Icon name="user outline" /> Co-directora: Prof.
                        Graciela Fernández Vecino <br />
                        <Icon name="balance scale" /> Titulo: Especialización en
                        Derecho Penal
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>Res. N° 458/18</a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              {/* ESTA ES LA VISTA EN MOBILE */}
              <Grid.Column only="mobile" width={16}>
                <Header as="h2" style={{ fontSize: "3em" }}>
                  Especialización en Derecho Penal
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
