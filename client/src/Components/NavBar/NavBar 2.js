import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Dropdown, Icon, Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu fixed="top" inverted stackable>
      <Container>
        <Menu.Item header link>
          <Icon name="home" />
          HOME
        </Menu.Item>
        <Dropdown item text="ESPECIALIZACIONES">
          <Dropdown.Menu>
            <Dropdown.Item>Derecho Administrativo</Dropdown.Item>
            <Dropdown.Item>Derecho Ambiental</Dropdown.Item>
            <Dropdown.Item>Derecho de Daños</Dropdown.Item>
            <Dropdown.Item>Derecho Penal</Dropdown.Item>
            <Dropdown.Item>Derecho Procesal</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item link>DOCTORADO</Menu.Item>
        <Menu.Item link>CURSOS</Menu.Item>
        <Menu.Item link>DIPLOMATURAS</Menu.Item>
        <Menu.Item link>ACREDITACION</Menu.Item>
      </Container>
      {/* <Menu.Item header color="red" name="INICIAR SESION" />
      <Menu.Item color="green" name="REGISTRARSE" /> */}
      <Menu.Item position="right">
        <Button inverted color="blue">
          <Link style={{ color: "white" }} to="/login">
            INICIAR SESION
          </Link>
        </Button>
      </Menu.Item>

      <Menu.Item>
        <Button>
          <Link style={{ color: "black" }} to="/registrarse">
            REGISTRARSE
          </Link>
        </Button>
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
