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

  addTodo(todo) {
    this.setState(prevState => {
      [todo, ...prevState.todos];
    });
  }

  removeTodo() {}

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="menu">
          <Menu />
        </div>
        <div className="body">
          <Nav />
          <Body todos={todos} />
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById('container');
// eslint-disable-next-line no-unused-expressions
wrapper ? ReactDOM.render(<App />, wrapper) : false;
