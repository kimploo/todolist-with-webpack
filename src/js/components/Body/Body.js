import React from 'react';
import Todo from './Todo';
import WriteTodo from './WriteTodo';

export default class Body extends React.PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <>
        <WriteTodo />
        {todos.map(todo => {
          return <Todo todo={todo} index={todo.id} key={todo.id} />;
        })}
      </>
    );
  }
}
