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
                  Instruir a los profesionales en los conocimientos de los
                  distintos aspectos relacionados con el Derecho de Daños, de
                  manera de brindarles herramientas que le faciliten la
                  interpretación y aplicación de las normas que lo componen, el
                  asesoramiento y la intervención en la fijación de políticas en
                  la materia, en la gestión pública y privada y en el diseño de
                  la legislación en materia de responsabilidad.
                </List.Item>
                <List.Item as="li">
                  Capacitar al profesional para resolver problemas de
                  responsabilidad civil concretos, simples o estratégicos, en el
                  ejercicio de la profesión liberal o desde la óptica del
                  desempeño de funciones en el Poder Judicial.
                </List.Item>
                <List.Item as="li">
                  Profundizar la formación de profesionales, en materia de
                  Derecho de Daños. Lograr un mayor conocimiento técnico
                  científico debidamente actualizado en la materia,
                  enriqueciendo el andamiaje teórico con nuevas alternativas.
                </List.Item>
                <List.Item as="li">
                  Brindar un servicio a la comunidad de graduados, acercándoles
                  las herramientas para la adquisición de nuevas destrezas y
                  competencias en la temática, en los distintos ámbitos de
                  incumbencia.
                </List.Item>
                <List.Item as="li">
                  Formar docentes e investigadores en el Derecho de Daños para
                  hacer frente a la cada vez más compleja problemática
                  científica.
                </List.Item>
                <List.Item as="li">
                  Profundizar la formación de profesionales, en materia de
                  Derecho de Daños. Lograr un mayor conocimiento técnico
                  científico debidamente actualizado en la materia,
                  enriqueciendo el andamiaje teórico con nuevas alternativas.
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
            especializado en Derecho de Daños con aptitud para el ejercicio
            liberal de la profesión, desempeño en la magistratura y en distintos
            organismos del estado.
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
          ¿Cuáles es la modalidad?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>La modalidad de cursado de todos los cursos es Presencial.</p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
