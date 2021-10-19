import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Container,
  Grid,
  Menu,
  Segment,
  Ref,
  Sticky,
} from "semantic-ui-react";
import Acreditaciontxt from "../../Components/Acreditacion/Acreditaciontxt";
import Footer from "../../Components/Footer/Footer";
import ResponsibeContainer from "../../Components/NavBar/ResponsibeContainer";

export default class Acreditacion extends Component {
  state = { activeItem: "home" };
  contextRef = createRef();

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <ResponsibeContainer>
        <Segment>
          <Container>
            <Breadcrumb>
              <Breadcrumb.Section link>
                <Link to="/">Home</Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section link>Acreditacion</Breadcrumb.Section>
            </Breadcrumb>
          </Container>
        </Segment>
        <Segment>
          <Container>
            <Grid>
              <Ref innerRef={this.contextRef}>
                <Grid.Row
                  columns={2}
                  only="computer"
                  style={{ position: "sticky" }}
                >
                  <Grid.Column width={4}>
                    <Sticky context={this.contextRef}>
                      <Menu
                        pointing
                        secondary
                        vertical
                        style={{ marginTop: "50px" }}
                      >
                        <a href="#INTRODUCCION">
                          <Menu.Item
                            name="INTRODUCCION"
                            active={activeItem === "INTRODUCCION"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#TIPOS DE CARRERA">
                          <Menu.Item
                            name="TIPOS DE CARRERA"
                            active={activeItem === "TIPOS DE CARRERA"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#TITULACIONES">
                          <Menu.Item
                            name="TITULACIONES"
                            active={activeItem === "TITULACIONES"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#ESTRUCTURAS CURRICULARES">
                          <Menu.Item
                            name="ESTRUCTURAS CURRICULARES Y CARGAS HORARIAS"
                            active={
                              activeItem ===
                              "ESTRUCTURAS CURRICULARES Y CARGAS HORARIAS"
                            }
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#INSTANCIAS DE ACREDITACION">
                          <Menu.Item
                            name="INSTANCIAS DE ACREDITACION "
                            active={
                              activeItem === "INSTANCIAS DE ACREDITACION "
                            }
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#ACREDITACION Y CATEGORIZACION">
                          <Menu.Item
                            name="ACREDITACION Y CATEGORIZACION"
                            active={
                              activeItem === "ACREDITACION Y CATEGORIZACION"
                            }
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#INSERCION">
                          <Menu.Item
                            name="INSERCION Y MARCO INSTITUCIONAL DE LA CARRERA"
                            active={
                              activeItem ===
                              "INSERCION Y MARCO INSTITUCIONAL DE LA CARRERA"
                            }
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#PLAN DE ESTUDIO">
                          <Menu.Item
                            name="PLAN DE ESTUDIO"
                            active={activeItem === "PLAN DE ESTUDIO"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#EVALUACION FINAL">
                          <Menu.Item
                            name="EVALUACION FINAL"
                            active={activeItem === "EVALUACION FINAL"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#REGLAMENTO">
                          <Menu.Item
                            name="REGLAMENTO"
                            active={activeItem === "REGLAMENTO"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                        <a href="#ESTUDIANTES">
                          <Menu.Item
                            name="ESTUDIANTES"
                            active={activeItem === "ESTUDIANTES"}
                            onClick={this.handleItemClick}
                          />
                        </a>
                      </Menu>
                    </Sticky>
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Sticky context={this.contextRef}>
                      <Acreditaciontxt />
                    </Sticky>
                  </Grid.Column>
                </Grid.Row>
              </Ref>
              <Grid.Column only="mobile" width={16}>
                <Acreditaciontxt />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <Footer />
      </ResponsibeContainer>
    );
  }
}
