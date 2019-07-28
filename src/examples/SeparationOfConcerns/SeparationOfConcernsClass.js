import React from 'react';
import { Card, Row, Input, Text } from './components';
import ThemeContext from './ThemeContext';

export class SeparationOfConcernsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Harry',
      surname: 'Potter',
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.surname !== prevState.surname) {
      document.title = `${this.state.name} ${this.state.surname}`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleSurnameChange(surname) {
    this.setState({ surname });
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { name, surname, width } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Card theme={theme}>
            <Row label="Name">
              <Input value={name} onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <Input value={surname} onChange={this.handleSurnameChange} />
            </Row>
            <Row label="Width">
              <Text>{width}</Text>
            </Row>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }
}
