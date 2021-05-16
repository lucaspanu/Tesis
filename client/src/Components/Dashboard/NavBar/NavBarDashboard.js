import React from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../../helpers/auth";
import { Dropdown, Icon, Menu, Sidebar } from "semantic-ui-react";

function NavBarDashboard() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      {/* Menu lateral */}
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        id="sidebar"
      >
        <Menu.Item>
          <Menu.Header>General</Menu.Header>

          <Menu.Menu>
            <Menu.Item as={Link} to="/private">
              <div>
                <Icon name="tachometer alternate" />
                Dashboard
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="/perfil">
              <div>
                <Icon name="user circle" />
                Perfil
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Administrativo</Menu.Header>

          <Menu.Menu>
            {/* <Menu.Item as={Link} to="#">
              <div>
                <Icon name="cogs " />
                Settings
              </div>
            </Menu.Item> */}
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="users" />
                Usuarios
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="user plus" />
                Nuevo Usuario
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="plus" />
                Cursos
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="plus" />
                Diplomaturas
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="signup" />
                Notas
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="signup" />
                Asistencias
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="signup" />
                Cuotas
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Inscripciones</Menu.Header>
          <Menu.Menu>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="book" />
                Cursos
              </div>
            </Menu.Item>
            <Menu.Item as={Link} to="#">
              <div>
                <Icon name="book" flipped="horizontally" />
                Diplomaturas
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item as={Link} to="#">
          <div>
            <Icon name="inbox" />
            Notificaciones
          </div>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Contacto</Menu.Header>
          <Menu.Menu>
            <Menu.Item as={Link} to="/private/contacto">
              <div>
                <Icon name="info circle" />
                Informacion
              </div>
            </Menu.Item>
            <Menu.Item>
              <a
                href="https://www.facebook.com/profile.php?id=100005949195316"
                target="_blank"
              >
                <Icon name="facebook f" />
                Facebook
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="https://www.instagram.com/posgradosderechount/"
                target="_blank"
              >
                <Icon name="instagram" />
                Instagram
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        {/* <Menu.Item>
          <Form action="#">
            <Input size="small" icon="search" placeholder="Search..." />
          </Form>
        </Menu.Item>

        <Segment inverted>
          <Progress color="olive" inverted percent={36} size="tiny">
            Monthy Bandwidth
          </Progress>
          <Progress color="teal" inverted percent={76} size="tiny">
            Disk Usage
          </Progress>
        </Segment> */}
      </Sidebar>
      {/* Menu lateral */}

      {/* Menu superior */}
      <Menu fixed="top" inverted borderless>
        <Menu.Menu position="left">
          <Menu.Item
            icon="sidebar"
            data-target="#sidebar"
            className="sidebar-menu-toggler"
            onClick={() => setVisible(true)}
          />
          <Menu.Item as={Link} to="/">
            <Menu.Header>Secretaria de Posgrado</Menu.Header>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="#">
            <Icon name="bell" />
          </Menu.Item>
          <Dropdown icon="user" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Header>{isAuth().name}</Dropdown.Header>
              <Dropdown.Item
                as={Link}
                to={`/private`}
                text=" Dashboard"
                icon="tachometer alternate"
              />
              <Dropdown.Item
                as={Link}
                to={`/perfil`}
                text="Perfil"
                icon="user"
              />
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  signout(() => {});
                }}
                text="Salir"
                icon="power"
                as={Link}
                to="/"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      {/* Menu superior */}
    </div>
  );
}

export default NavBarDashboard;
