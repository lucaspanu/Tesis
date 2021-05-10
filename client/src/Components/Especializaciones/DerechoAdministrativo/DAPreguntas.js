import React, { Component } from "react";
import { Accordion, Icon, List } from "semantic-ui-react";

export default class DAPreguntas extends Component {
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
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          ¿Cuáles son los objetivos de la carrera?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List>
            <List.Item as="li">
              <b>Generales:</b>
              <List.List as="ul">
                <List.Item as="li">
                  Que la propuesta contribuya a la excelencia académica de la
                  U.N.T.
                </List.Item>
                <List.Item as="li">
                  Que se dinamice y potencie la formación de posgrado.
                </List.Item>
                <List.Item as="li">
                  Que la formación obtenida se transfiera a la docencia de grado
                  y, especialmente, constituya un aporte al proceso de
                  transformación curricular con el que la Facultad está
                  comprometida.
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item as="li">
              <b>Específicos:</b>
              <List.List as="ul">
                <List.Item as="li">
                  Tiene como objetivo dotar a los abogados de una formación
                  teórica-práctica en Derecho Administrativo, que les permita la
                  aplicación concreta del conocimiento especializado en las
                  actividades profesionales que desarrollen los graduados, sea
                  que la desarrollen en los diversos órganos de la
                  Administración Central y Descentralizada, en el sector
                  privado, o en el ámbito de la Legislación o la Justicia.
                </List.Item>
              </List.List>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          ¿Cuál es el Perfil del egresado?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            La Carrera de Especialización debe formar a los abogados que la
            cursen para que, a su egreso, estén en condiciones de:
          </p>
          <p>
            <b>a) </b> Desarrollar una tarea de operador jurídico altamente
            especializado en Derecho Administrativo, en los ámbitos de las
            Administraciones Públicas, en las Legislaturas, en los Tribunales de
            Justicia, en la tarea profesional de abogado.
          </p>
          <p>
            <b>b)</b> Realizar tareas docentes de la materia con excelencia
            académica, en la propia UNT, complementándola con investigación y
            extensión.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          ¿Cuáles son las materias?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            El plan de estudios de la carrera está integrado de{" "}
            <b>22 materias</b>, que se desarrollan en cuatro cuatrimestres
            sucesivos, con una carga académica total de quinientas 536 horas
            reloj presenciales (clases teórico-prácticas). Las materias de los
            cuatro (4) cuatrimestres se dictan en 8 horas reloj semanales
            durante dos años.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
