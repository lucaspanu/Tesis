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
              <b>General:</b>
              <List.List as="ul">
                <List.Item as="li">
                  El Doctorado tiene por objeto la formación de posgraduados que
                  puedan lograr aportes originales en un área de conocimiento,
                  dentro de un marco de excelencia académica, a través de una
                  formación que se centre fundamentalmente en torno a la
                  investigación, desde la que se procurará realizar dichos
                  aportes originales.
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item as="li">
              <b>Particular:</b>
              <List.List as="ul">
                <List.Item as="li">
                  Que los doctorandos adquieran una formación de excelencia
                  académica que les permita profundizar una línea de
                  investigación que se refleje en una tesis que constituya un
                  verdadero aporte original en el campo del Derecho.
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
            Una vez concluida la carrera, se aspira a que el egresado asuma un
            papel de liderazgo en la investigación, la docencia y en el
            ejercicio profesional.
          </p>
          <p>
            Entrene en la investigación a discípulos, dirija proyecto de
            investigación y tesis, dicte cursos de posgrado y se desarrolle en
            una tarea de operador jurídico en el medio.
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
            El Doctorado en Derecho se conforma como una carrera de posgrado en
            la modalidad de estudios personalizados, al organizarse a partir de
            los requerimientos de formación en un área de conocimiento
            específica. La modalidad de estudios personalizados tiene su fuerte
            en la Comisión de Supervisión y Seguimiento del doctorando, a la
            cual, en estrecha vinculación con el Comité Académico y la
            Secretaria de Posgrado de la Facultad, delinea el plan de estudios
            que seguirá el posgraduado teniendo en cuenta el tema de tesis
            propuesto.
          </p>
          <p>
            El Doctorado en Derecho formaliza un programa de actividades
            académicas diseñado por la Comisión de Supervisión y Seguimiento de
            acuerdo con la temática de Tesis Doctoral propuesta por el/la
            doctorando/a. La Comisión es la encargada de reconocer, valorar y
            sugerir cursos, seminarios, entrenamientos y/o pasantías, y
            actividades de investigación efectuados por el/la postulante durante
            y con anterioridad a la inscripción en la Carrera.
          </p>
          <p>
            Las Comisiones de Supresión y Seguimiento solicitan a la Secretaria
            de Posgrado de la Facultad la acreditación de las actividades
            realizadas por los doctorandos, de acuerdo a lo estipulado por el
            Reglamento General de Estudios de Posgrado de la UNT vigente,
            mediante la elevación de al menos 1 (un) acta por año, que contenga
            el informe de actividades y estado de avance del plan de tesis. Por
            lo menos el 70% de las actividades académicas deben ser de formación
            específica en el área disciplinaria, es decir, corresponder a
            temáticas relacionadas al tema del trabajo de tesis. El 30% restante
            pueden corresponder a temas de formación general y atenderán
            aspectos metodológicos y otros que sean de utilidad para integrar y
            completar los estudios.
          </p>
          <p>
            El Grado de Doctor se obtiene en base a estudios de posgrado de
            grado superior y presentación de una Tesis que constituya una
            contribución original al conocimiento.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
