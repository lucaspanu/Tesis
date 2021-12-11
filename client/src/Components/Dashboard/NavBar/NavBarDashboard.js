import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../../helpers/auth";
import { Dropdown, Icon, Menu, Popup, Sidebar } from "semantic-ui-react";
import axios from "axios";

function NavBarDashboard() {
  const [visible, setVisible] = React.useState(false);
  const [formData, setFormData] = useState({
    estado: false,
  });

  const { estado } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/perfil/${isAuth()._id}`)
      .then((res) => {
        const { estado } = res.data.perfil;
        setFormData({
          ...formData,
          estado,
        });
      })
      .catch((err) => {
        if (err.response == null) return;
        console.log(err);
      });
  };

  const isAdmin = isAuth().role === "admin";
  const isProfesor = isAuth().role === "Profesor";

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
        {(isAdmin || isProfesor) && (
          <Fragment>
            <Menu.Item>
              <Menu.Header>Administrativo</Menu.Header>
              <Menu.Menu>
                {isAdmin && (
                  <>
                    <Menu.Item as={Link} to="/admin">
                      <div>
                        <Icon name="users" />
                        Usuarios
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/admin/nuevo">
                      <div>
                        <Icon name="user plus" />
                        Nuevo Usuario
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/admin/cursos">
                      <div>
                        <Icon name="plus" />
                        Cursos
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/admin/diplomaturas">
                      <div>
                        <Icon name="plus" />
                        Diplomaturas
                      </div>
                    </Menu.Item>
                  </>
                )}
                {(isAdmin || isProfesor) && (
                  <Menu.Item as={Link} to="/admin/asistencias">
                    <div>
                      <Icon name="signup" />
                      Asistencias
                    </div>
                  </Menu.Item>
                )}
                {isAdmin && (
                  <>
                    <Menu.Item as={Link} to="/admin/cuotas">
                      <div>
                        <Icon name="signup" />
                        Cuotas
                      </div>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/admin/inscripciones">
                      <div>
                        <Icon name="signup" />
                        Inscripciones
                      </div>
                    </Menu.Item>
                  </>
                )}
              </Menu.Menu>
            </Menu.Item>
          </Fragment>
        )}

        {estado ? (
          <Fragment>
            {" "}
            <Menu.Item>
              <Menu.Header>Inscripciones</Menu.Header>
              <Menu.Menu>
                <Menu.Item as={Link} to="/private/cursos">
                  <div>
                    <Icon name="book" />
                    Cursos
                  </div>
                </Menu.Item>
                <Menu.Item as={Link} to="/private/diplomaturas">
                  <div>
                    <Icon name="book" flipped="horizontally" />
                    Diplomaturas
                  </div>
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <Menu.Item>
              <Menu.Header>Inscripciones</Menu.Header>
              <Menu.Menu>
                <Popup
                  content="Completa la ficha de inscripcion para acceder a los cursos"
                  trigger={
                    <Menu.Item as={Link} to="/perfil">
                      <div>
                        <Icon name="book" />
                        Cursos
                      </div>
                    </Menu.Item>
                  }
                />
                <Popup
                  content="Completa la ficha de inscripcion para acceder a las diplomaturas"
                  trigger={
                    <Menu.Item as={Link} to="/perfil">
                      <div>
                        <Icon name="book" flipped="horizontally" />
                        Diplomaturas
                      </div>
                    </Menu.Item>
                  }
                />
              </Menu.Menu>
            </Menu.Item>
          </Fragment>
        )}

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
                rel="noreferrer"
              >
                <Icon name="facebook f" />
                Facebook
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="https://www.instagram.com/posgradosderechount/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="instagram" />
                Instagram
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
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
