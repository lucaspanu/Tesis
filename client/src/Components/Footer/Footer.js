import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import Logo from "../../Assets/Logos/Logo 2.png";

function Footer() {
  return (
    <Segment inverted attached="bottom" vertical style={{ padding: "5em 0em" }}>
      <Container style={{ paddingLeft: "2em" }}>
        <Grid textAlign="left" divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Servicios" />
              <List link inverted>
                <Link to="/doctorado">
                  <List.Item as="a">Doctorado</List.Item>
                </Link>
                <br />
                <Link to="/cursos">
                  <List.Item as="a">Cursos</List.Item>
                </Link>
                <br />
                <Link to="/diplomaturas">
                  <List.Item as="a">Diplomaturas</List.Item>
                </Link>
                <br />
                <Link to="/acreditacion">
                  <List.Item as="a">Acreditacion</List.Item>
                </Link>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Especializaciones" />
              <List link inverted>
                <Link to="/especializaciones/administrativo">
                  <List.Item as="a">Derecho Administrativo</List.Item>
                </Link>
                <br />
                <Link to="/especializaciones/ambiental">
                  <List.Item as="a">Derecho Ambiental</List.Item>
                </Link>
                <br />
                <Link to="/especializaciones/daños">
                  <List.Item as="a">Derecho de Daños</List.Item>
                </Link>
                <br />
                <Link to="/especializaciones/penal">
                  <List.Item as="a">Derecho Penal</List.Item>
                </Link>
                <br />
                <Link to="/especializaciones/procesal">
                  <List.Item as="a">Derecho Procesal</List.Item>
                </Link>
              </List>
            </Grid.Column>
            <Grid.Column width={9}>
              <Header as="h4" inverted>
                Contacto
              </Header>
              <a
                href="https://www.facebook.com/profile.php?id=100005949195316"
                target="_blank"
              >
                <Icon name="facebook f" />
                Facebook
              </a>

              <br />
              <List.Item style={{ marginTop: "1em" }}>
                <Icon name="mail" />
                secretaria.posgrado@derecho.unt.edu.ar
              </List.Item>
              <Image src={Logo} size="small" floated="right" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
