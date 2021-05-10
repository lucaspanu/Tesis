import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Container,
  Divider,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
import Footer from "../../../Components/Footer/Footer";
import ResponsibeContainer from "../../../Components/NavBar/ResponsibeContainer";

function Especializaciones() {
  return (
    <ResponsibeContainer>
      <Segment>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Section link>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Especializaciones</Breadcrumb.Section>
          </Breadcrumb>
        </Container>
      </Segment>
      <Segment>
        <Container>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            Carreras disponibles
          </Header>
          <Divider></Divider>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.15em" }}>
              La importancia de las carreras de especialización en la formación
              de posgrado ha significado que su implementación en esta unidad
              académica ocupe un lugar prioritario en la agenda de gestión.
            </p>
            <br />
          </div>
          <div style={{ textAlign: "justify" }}>
            <p style={{ fontSize: "1.2em" }}>
              Hemos trabajado en un diseño amplio y estable que proporcione
              formación en diferentes áreas disciplinares a los egresados de las
              carreras de Abogacía, Escribanía y Procuración del NOA,
              satisfaciendo una necesidad que debía ser atendida, y así lo
              hicimos.
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Con esta oferta, el posgraduado adquiere conocimientos
              especializados, habilidades, herramientas y destrezas especificas
              en el área disciplinar elegida, lo que representa un beneficio no
              solo para el profesional que egresa y obtiene su título de
              posgrado con validez nacional, sino también para la sociedad en su
              totalidad, pues las habilidades adquiridas sin dudas se reflejarán
              en resultados eficientes en beneficio general.{" "}
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Llegar a esta realidad actual, respecto de la oferta que
              brindamos, implicó trabajar previamente la conformación de una
              masa crítica de docentes con títulos de posgrado suficientes
              mediante la celebración de convenios interuniversitarios que
              posibilitaron el dictado, en nuestra Casa de Estudios, de algunas
              carreras de Especialización. De esa manera, sumado al alcance de
              otros requerimientos reglamentarios, logramos satisfacer los
              estándares exigidos por la CONEAU.
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Ello nos posibilitó trabajar en el diseño de nuestras propias
              carreras de especialización, que hoy ofrecemos a través de
              cohortes sucesivas, y son: Especialización en Derecho
              Administrativo; Especialización en Derecho Procesal con
              Orientación Civil o Penal; Especialización en Derecho de Daños;
              Especialización en Derecho Penal; Especialización en Derecho
              Ambiental.
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Todas las carreras que ofrece esta Unidad Académica, así como sus
              respectivos planes de estudios, han sido evaluadas y aprobadas por
              CONEAU, y cuentan con sus correspondientes Resoluciones
              Ministeriales de Validez Nacional del Título.
            </p>
            <br />
          </div>
          <List size="big" bulleted>
            <List.Item as={Link} to="/especializaciones/administrativo">
              Derecho Administrativo
            </List.Item>

            <List.Item as={Link} to="/especializaciones/ambiental">
              Derecho Ambiental
            </List.Item>
            <List.Item as={Link} to="/especializaciones/daños">
              Derecho de Daños
            </List.Item>
            <List.Item as={Link} to="/especializaciones/penal">
              Derecho Penal
            </List.Item>
            <List.Item as={Link} to="/especializaciones/procesal">
              Derecho Procesal
            </List.Item>
          </List>
        </Container>
      </Segment>
      <Footer />
    </ResponsibeContainer>
  );
}

export default Especializaciones;
