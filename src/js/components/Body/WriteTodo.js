import React from 'react';

export default class WriteTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { text } = this.state;
    const { addTodo } = this.props;
    event.preventDefault();
    addTodo(text);
    this.setState({
      text: '',
    });
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Write Your Todos"
          onChange={this.handleChange}
          value={text}
        />
        <button type="submit">Add a Todo</button>
      </form>
    );
  }
}
