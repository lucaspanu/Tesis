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
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          MATERIAS:
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List.List as="ul">
            <List.Item as="li">De las penas</List.Item>
            <List.Item as="li">Derecho penal especial. Código Penal.</List.Item>
            <List.Item as="li">Fundamentos del sistema penal</List.Item>
            <List.Item as="li">Teoría del delito 1</List.Item>
            <List.Item as="li">Teoría del delito 2</List.Item>
            <List.Item as="li">Teoría del delito 3</List.Item>
          </List.List>
        </Accordion.Content>
      </Accordion>
    );
  }
}
