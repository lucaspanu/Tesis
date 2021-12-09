import React from "react";
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CursosHome from "./CursosHome";
import DiplomaturasHome from "./DiplomaturasHome";
import EspecializacionesHome from "./EspecializacionesHome";

function Body() {
  return (
    <div>
      <Segment style={{ padding: "5em 0em" }} vertical>
        {/* Cursos */}
        <Container>
          <EspecializacionesHome />
        </Container>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Doctorado en Derecho
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            El Doctorado en Derecho se conforma como una carrera de posgrado en
            la modalidad de estudios personalizados, al organizarse a partir de
            los requerimientos de formación en un área de conocimiento
            específica.
          </p>
          <Button as={Link} to="/doctorado" size="large">
            Leer Mas
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a>Acreditacion</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Proceso de Acreditacion
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Estándares y criterios a considerar en los procesos de acreditación
            de Carreras de Posgrado
          </p>
          <Button as={Link} to="/acreditacion" size="large">
            Leer Mas
          </Button>
        </Container>
      </Segment>
    </div>
  );
}

export default Body;
