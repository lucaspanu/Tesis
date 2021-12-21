import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { isAuth, signout } from "../../helpers/auth";
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            // style={{ minHeight: 700, padding: "1em 0em" }}
            style={{ padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              // size="large"
            >
              <Container>
                <Menu.Item as={Link} to="/">
                  <Icon name="home" />
                  HOME
                </Menu.Item>
                <Dropdown item text="ESPECIALIZACIONES">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/especializaciones/administrativo"
                    >
                      Derecho Administrativo
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/especializaciones/ambiental">
                      Derecho Ambiental
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/especializaciones/daños">
                      Derecho de Daños
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/especializaciones/penal">
                      Derecho Penal
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/especializaciones/procesal">
                      Derecho Procesal
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as={Link} to="/doctorado">
                  DOCTORADO
                </Menu.Item>
                <Menu.Item as={Link} to="/cursos">
                  CURSOS
                </Menu.Item>
                <Menu.Item as={Link} to="/diplomaturas">
                  DIPLOMATURAS
                </Menu.Item>
                <Menu.Item as={Link} to="/acreditacion">
                  ACREDITACION
                </Menu.Item>
                {isAuth() ? (
                  <Fragment>
                    <Menu.Item position="right">
                      <Dropdown pointing="top left" text={isAuth().name}>
                        <Dropdown.Menu>
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
                              signout(() => {
                                toast.success("Cerro sesion exitosamente");
                              });
                            }}
                            text="Salir"
                            icon="power"
                            as={Link}
                            to="/"
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Menu.Item position="right">
                      <Button
                        as={Link}
                        to="/login"
                        inverted={!fixed}
                        primary={fixed}
                      >
                        INICIAR SESION
                      </Button>
                      <Button
                        as={Link}
                        to="/registrarse"
                        inverted={!fixed}
                        style={{ marginLeft: "0.5em" }}
                      >
                        REGISTRARSE
                      </Button>
                    </Menu.Item>
                  </Fragment>
                )}
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        <ToastContainer />
        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

// Esto es lo que se ve en Mobile
class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link to="/">
              <Menu.Item as="a" active>
                <Icon name="home" />
                Home
              </Menu.Item>
            </Link>
            <Link to="/especializaciones">
              <Menu.Item link>ESPECIALIZACIONES</Menu.Item>
            </Link>
            <Link to="/doctorado">
              <Menu.Item link>DOCTORADO</Menu.Item>
            </Link>
            <Link to="/cursos">
              <Menu.Item link>CURSOS</Menu.Item>
            </Link>
            <Link to="/diplomaturas">
              <Menu.Item link>DIPLOMATURAS</Menu.Item>
            </Link>
            <Link to="/acreditacion">
              <Menu.Item link>ACREDITACION</Menu.Item>
            </Link>
            {isAuth() ? (
              <Fragment></Fragment>
            ) : (
              <Fragment>
                <Menu.Item header as="a">
                  <Link style={{ color: "white" }} to="/login">
                    <Icon name="sign-in" />
                    INICIAR SESION
                  </Link>
                </Menu.Item>
                <Menu.Item header as="a">
                  <Link style={{ color: "white" }} to="/registrarse">
                    <Icon name="signup" />
                    REGISTRARSE
                  </Link>
                </Menu.Item>
              </Fragment>
            )}
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  {isAuth() ? (
                    <Fragment>
                      <Menu.Item position="right">
                        <Dropdown pointing="top right" text={isAuth().name}>
                          <Dropdown.Menu>
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
                                signout(() => {
                                  toast.success("Cerro sesion exitosamente");
                                });
                              }}
                              text="Salir"
                              icon="power"
                              as={Link}
                              to="/"
                            />
                          </Dropdown.Menu>
                        </Dropdown>
                      </Menu.Item>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Menu.Item position="right">
                        <Button as="a" inverted>
                          <Link style={{ color: "white" }} to="/login">
                            INICIAR SESION
                          </Link>
                        </Button>
                      </Menu.Item>
                    </Fragment>
                  )}
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsibeContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsibeContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsibeContainer;
