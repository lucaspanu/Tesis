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
          Como fundamentos de creación de la carrera de posgrado Especialización
          en Derecho Administrativo, se tuvo en cuenta el proceso de
          transformación social e institucional operado en los últimos años que
          ha determinado que tanto el Estado como las empresas públicas y
          privadas, así como los ciudadanos mismos, hayan debido asumir nuevos
          roles, tales como el de usuarios de servicios públicos, partícipes de
          procedimientos de audiencias públicas o integrantes de asociaciones
          que protegen los nuevos derechos de incidencia colectiva. Las
          innumerables cuestiones que se suscitan como consecuencia de tales
          cambios exigen la presencia de abogados con alta capacitación en
          Derecho Administrativo.
        </p>
        <br />
        <p style={{ fontSize: "1.1em" }}>
          Atendiendo a tales circunstancias, se creó la Carrera de
          Especialización en Derecho Administrativo, concebida con el propósito
          de formar a los abogados graduados de una sólida formación –teórica y
          práctica- que les permita resolver, con justicia y eficiencia, los
          diferentes problemas que se les presenten en la actividad profesional,
          sea que la desarrollen en los diversos órganos de la Administración
          Central y Descentralizada, en el sector privado, o en el ámbito de la
          Legislación o la Justicia.
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
          ALEJANDRO USLENGHI - UBA – UCA – UNIV. AUSTRAL <br />
          MARÍA SUSANA VILLARRUEL - UCA
          <br />
          JUAN GALEANO - UCA
          <br />
          ADELINA LOIANNO – UBA – U.C.E Y S<br />
          OSCAR FLORES – UNT
          <br />
          MARÍO REJTMAN FARAH – UBA
          <br />
          CARLOS BALBIN - UBA
          <br />
          JUAN STUPENENGO – UBA – UNIV. LA MATANZA
          <br />
          PABLO ÁNGEL GUTIÉRREZ COLANTUONO - UNIV. NAC. COMAHUE
          <br />
          FLORENCIA CASAS - UNT
          <br />
          AUGUSTO GONZALEZ NAVARRO - UNT
          <br />
          PABLO MARTIN MERCADO - UNT
          <br />
          FERNANDO GARCÍA PULLÉS – UBA – UCA – UNIV. AUSTRAL
          <br />
          RODOLFO N. NOVILLO - UNT
          <br />
          BLANCA HERRERA DE VILLAVICENCIO - UNT
          <br />
          MARÍA PAMELA TENREYRO- UNT
          <br />
          DANTE MIRRA - UNT
          <br />
          MIRIAM IVANEGA – UBA – U.N. DE LA MATANZA
          <br />
          FEDERICO NAZUR - UNT
          <br />
          DANIEL NALLAR - – UNIV. CATOLICA DE SALTA
          <br />
          LUIS ALFREDO LÓPEZ - UNT
          <br />
          SUSANA VEGA - UBA
          <br />
          MARÍA ROTAECHE - UBA
          <br />
          FERNANDO E. GRANEROS – UNT
          <br />
          JUAN G. CORVALÁN – UBA
          <br />
          ANA DE LA VEGA DE DÍAZ RICCI – UNT - UNSTA
          <br />
          OSCAR AGUILAR VALDÉZ – UBA - UCA
          <br />
          HERNAN PÉREZ BOIANI - UBA
          <br />
          ROBERTO SOBRE CASAS - UNT
          <br />
          LUIS ESTEBAN CARO - UNT
          <br />
          CYNTHIA PAOLA GONZALEZ
          <br />
          MARTA YOLANDA TEJERIZO – UNT
          <br />
          MARÍA ELENA CABALLERO - UNT
          <br />
          LUCIANA ESPASA - UNT
          <br />
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
                        <Icon name="clock" /> Carga horaria: 536 hs. <br />
                        <Icon name="user" /> Directora: Dra. Blanca Herrera de
                        Villavicencio <br />
                        <Icon name="user outline" /> Co-director: Dr. Augusto
                        Gonzalez Navarro <br />
                        <Icon name="balance scale" /> Titulo: Especialización en
                        Derecho de Daños
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>Res. N° 815/15</a>
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
