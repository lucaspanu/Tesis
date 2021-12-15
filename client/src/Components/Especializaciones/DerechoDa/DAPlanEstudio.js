import React, { Component } from "react";
import { Accordion, Icon, List } from "semantic-ui-react";

export default class DAPlanEstudio extends Component {
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
        <Accordion.Content active={activeIndex === 0}>
          <List.List as="ul">
            <List.Item as="li">
              Concepción actual del Derecho de Daños
            </List.Item>
            <List.Item as="li">
              Contratos y daños. El seguro de responsabilidad civil.
            </List.Item>
            <List.Item as="li">
              Dimensión procesal de la responsabilidad por daños
            </List.Item>
            <List.Item as="li">
              Otros supuestos especiales de responsabilidad
            </List.Item>
            <List.Item as="li">
              La responsabilidad civil en el nuevo Código Civil y Comercial
            </List.Item>
            <List.Item as="li">Responsabilidad de los profesionales</List.Item>
            <List.Item as="li">
              Responsabilidad derivada de accidentes (tránsito, transporte,
              establecimientos educativos, deporte)
            </List.Item>
            <List.Item as="li">
              Responsabilidad en el ámbito de la empresa y el mercado
            </List.Item>
            <List.Item as="li">
              Responsabilidad en el Derecho del Consumidor
            </List.Item>
            <List.Item as="li">
              Responsabilidad por daño ambiental y de otros bienes colectivos
            </List.Item>
            <List.Item as="li">
              Teoría general y elementos de la Responsabilidad Civil.
            </List.Item>
            <List.Item as="li">Valuación del daño</List.Item>
          </List.List>
        </Accordion.Content>
      </Accordion>
    );
  }
}
