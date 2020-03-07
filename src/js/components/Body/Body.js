import React from 'react';
import Todo from './Todo';
import WriteTodo from './WriteTodo';

export default class Body extends React.PureComponent {
  render() {
    const { todos, addTodo, removeTodo, addTag, removeTag } = this.props;
    return (
      <>
        <WriteTodo addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              index={index}
              key={todo.id}
              removeTodo={removeTodo}
              addTag={addTag}
              remoteTag={removeTag}
            />
          );
        })}
      </>
    );
  }
}
