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
    this.inputKeyDown = this.inputKeyDown.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
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
      this.setState({
        todos: todos.filter((value, i) => i !== index),
      });
    }.bind(this);
  }

  removeTag(tag, todoIndex) {
    return function() {
      const { todos } = this.state;
      const newTodo = {
        ...todos[todoIndex],
        tags: todos[todoIndex].tags.filter(t => t !== tag),
      };
      const newTodos = todos.filter((value, i) => i !== todoIndex);
      newTodos.splice(todoIndex, 0, newTodo);
      this.setState({
        todos: newTodos,
      });
    }.bind(this);
  }

  handleInputKeyDown(event, tagInput, todoIndex) {
    this.inputKeyDown(event, tagInput, todoIndex);
  }

  inputKeyDown(e, tagInput, todoIndex) {
    const { value } = e.target;
    const { todos } = this.state;
    console.log(e, 'event worked');
    if (e.key === 'Enter' && value) {
      if (
        todos[todoIndex].tags.find(
          tag => tag.toLowerCase() === value.toLowerCase()
        )
      ) {
        return undefined;
      }
      const newTodo = {
        ...todos[todoIndex],
        tags: [value, ...todos[todoIndex].tags],
      };
      const newTodos = todos.filter((value, i) => i !== todoIndex);
      newTodos.splice(todoIndex, 0, newTodo);
      this.setState({
        todos: newTodos,
      });
      tagInput.value = null;
      console.log(e, 'enter worked');
      // this.setState({ tags: [...tags, value] }); // here should be add tag
      // tagInput.value = null;
    }
    // else if (e.key === 'Backspace' && !value) {
    //   this.removeTag(tags.length - 1);
    // }
  }

  addTag(tagContents) {}

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
            handleInputKeyDown={this.handleInputKeyDown}
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
