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
              <List.List as="ul">
                <List.Item as="li">
                  Profundizar la formación cultural de profesionales en materia
                  de Derecho Penal, cuya actividad esta directa o indirectamente
                  relacionada con los contenidos de la misma.
                </List.Item>
                <br></br>
                <List.Item as="li">
                  Lograr un mayor conocimiento técnico científico debidamente
                  actualizado de la materia, enriqueciendo el andamiaje teórico
                  con las nuevas propuestas y alternativas que se difunden
                  actualmente en la materia.
                </List.Item>
                <br></br>
                <List.Item as="li">
                  Posibilitar la aplicación concreta del conocimiento
                  especializado en las actividades profesionales que desarrollen
                  los graduados.
                </List.Item>
                <br></br>
                <List.Item as="li">
                  Destacar la importancia del problema penal en la elaboración
                  de leyes penales, en la concreta solución de casos sometidos a
                  enjuiciamiento, en el tratamiento de los condenados y en toda
                  otra actividad profesional que se vincule con la materia.
                </List.Item>
                <br></br>
                <List.Item as="li">
                  Brindar un servicio a la comunidad de graduados que requieren
                  de una actualización permanente y de una resistematización de
                  los conocimientos adquiridos en la práctica profesional.
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
          ¿Cuáles son las competencias del egresado?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            El perfil del especialista que se quiere formar es el del abogado
            especializado en Derecho Penal con aptitud para el ejercicio liberal
            de la profesión y desempeño en la magistratura y ministerio público.
          </p>
          <p>
            Sin perjuicio de ello será también un perfil de un profesional que
            en el desarrollo de sus quehaceres profesionales tenga incorporada e
            internalizadas las cuestiones sociales que se involucran,
            entendiendo la complejidad de las instituciones jurídicas, sus
            transformaciones históricas y las prácticas y valores sociales que
            son la base del derecho.
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
            La modalidad de cursado de todos los cursos es Presencial. La
            carrera está organizada en 4 cuatrimestres de 82; 100; 104 y 88 hs
            cada uno. La carga horaria total es de 372 horas reloj (trescientas
            setenta y dos) compuestas por clases teóricas y prácticas y serán de
            carácter presencial. Se estructura en seis materias, cada una de las
            cuales esta subdividida en lecciones que por su contenido y temática
            integran a cada materia.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
