import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Container, Grid, Menu, Segment } from "semantic-ui-react";
import Acreditaciontxt from "../../Components/Acreditacion/Acreditaciontxt";
import Footer from "../../Components/Footer/Footer";
import ResponsibeContainer from "../../Components/NavBar/ResponsibeContainer";

export default class Acreditacion extends Component {
  state = { activeItem: "home" };

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
              <Grid.Row columns={2} only="computer">
                <Grid.Column width={4}>
                  {" "}
                  <Menu pointing secondary vertical>
                    <Menu.Item
                      name="Resolución 160/2011"
                      active={activeItem === "Resolución 160/2011"}
                      onClick={this.handleItemClick}
                    />
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
                        active={activeItem === "INSTANCIAS DE ACREDITACION "}
                        onClick={this.handleItemClick}
                      />
                    </a>
                    <a href="#ACREDITACION Y CATEGORIZACION">
                      <Menu.Item
                        name="ACREDITACION Y CATEGORIZACION"
                        active={activeItem === "ACREDITACION Y CATEGORIZACION"}
                        onClick={this.handleItemClick}
                      />
                    </a>
                    <a href="#INSERCION"></a>
                    <Menu.Item
                      name="INSERCION Y MARCO INSTITUCIONAL DE LA CARRERA"
                      active={
                        activeItem ===
                        "INSERCION Y MARCO INSTITUCIONAL DE LA CARRERA"
                      }
                      onClick={this.handleItemClick}
                    />
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
                </Grid.Column>
                <Grid.Column width={11}>
                  <Acreditaciontxt />
                </Grid.Column>
              </Grid.Row>
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
