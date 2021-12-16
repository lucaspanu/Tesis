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

import imagen from "../../Assets/Image/Doctorado.jpg";
import DAPreguntas from "./DAPreguntas";

const panes = [
  {
    menuItem: "Informacion",

    render: () => (
      <Tab.Pane>
        <p style={{ fontSize: "1.1em" }}>
          La Facultad de Derecho y Ciencias Sociales de la Universidad Nacional
          de Tucumán tiene una reconocida trayectoria que se remonta al año 1938
          donde inician nuestras carreras de grado, recién a partir del año 1985
          se organizan los estudios de posgrado en nuestra Universidad al
          ponerse en vigencia el primer Reglamento General de Estudios de
          Posgrado de la UNT que preveía los estudios tutoriales para alcanzar
          el titulo máximo de Doctor/a en Derecho.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          En el año 2000 la actual Decana, por entonces Vicedecana, Dra. Adela
          María Seguí, gestiona la creación de dos doctorados: el Doctorado en
          Derecho Público y Economía de Gobierno y el Doctorado en Derecho
          Privado con el propósito de que en el NOA sea factible alcanzar el
          título máximo académico. Una gran motivación fue el escaso número de
          doctores con que contaba la planta docente de la Facultad, este
          esfuerzo de gestión, sumado al que requirió luego la firma de un
          convenio con la Universidad Complutense de Madrid, permitió obtener
          una masa crítica suficiente que hoy felizmente nos permitió afrontar
          la oferta autosostenida de carreras de posgrado. Algunos profesores
          alcanzaron sus títulos máximos bajo la vigencia de anteriores
          reglamentaciones de la UNT (estudios tutoriales), lo que también
          permitió la graduación de docentes de calificada actuación de la
          institución.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          La FDYCS, en esta gestión, se propuso trabajar en la oferta académica
          de Posgrado, que cuando hubo satisfecha permitió que quienes se
          desempeñan como docentes pudieron estar capacitados en las áreas de
          estudio a través de los cursos y la creación de las diferentes
          carreras de especializaciones.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          Este cuadro de situación nos permitió trabajar en un diseño definitivo
          de nuestro Doctorado en Derecho, y que se consolide en la Región por
          su calidad académica de gestión, pues la oferta de programas, carreras
          y cursos de posgrado dictados como horas acreditables, permitió
          calificar en CONEAU para aprobación del diseño propuesto para la
          obtención de un grado académico superior. Esta gestión creo así el
          Doctorado en Derecho, modalidad estudios personalizados, conforme a lo
          establecido por los estándares y criterios fijados por la CONEAU, el
          que fue aprobado por el H. C. Superior de la UNT y posteriormente por
          la CONEAU como carrera nueva.
        </p>
        <DAPreguntas />
      </Tab.Pane>
    ),
  },
];

export default class DerechoAdministrativo extends Component {
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
              <Breadcrumb.Divider icon="right arrow" />
              <Breadcrumb.Section active>Doctorado</Breadcrumb.Section>
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
                    Doctorado
                  </Header>
                  <Tab panes={panes} />
                </Grid.Column>
                {/* CARD// PARTE DE LA DERECHA */}
                <Grid.Column width={6}>
                  <Card>
                    <Image src={imagen} wrapped ui={false} />
                    <Card.Content>
                      <Card.Description>
                        <Icon name="user" /> Director: A Designar <br />
                        <Icon name="balance scale" /> Titulo: Doctorado en
                        Derecho
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>Res. N° 0223/17</a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              {/* ESTA ES LA VISTA EN MOBILE */}
              <Grid.Column only="mobile" width={16}>
                <Header as="h2" style={{ fontSize: "3em" }}>
                  Doctorado
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
