import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Body } from './components/Body';
import { Nav } from './components/Nav';
import { Menu } from './components/Menu';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    fetch('../sampleTodos.json')
      .then(res => res.json())
      .then(json => {
        this.setState(() => ({
          todos: json,
        }));
      });
  }

  addTodo(title) {
    const { todos } = this.state;
    const todo = {
      id: todos.length + 1,
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      UserId: 1,
      tags: ['todo'],
    };
    this.setState(prevState => {
      return {
        todos: [todo, ...prevState.todos],
      };
    });
  }

  removeTodo(index) {
    return function() {
      const { todos } = this.state;
      const filterTodo = todos.filter((value, i) => i !== index);
      this.setState({
        todos: filterTodo,
      });
    }.bind(this);
  }

  addTag(tagContents) {}

  removeTag() {}

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="menu">
          <Menu />
        </div>
        <div className="body">
          <Nav />
          <Body
            todos={todos}
            addTodo={this.addTodo}
            removeTodo={this.removeTodo}
            addTag={this.addTag}
            removeTag={this.removeTag}
          />
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById('container');
// eslint-disable-next-line no-unused-expressions
wrapper ? ReactDOM.render(<App />, wrapper) : false;
