import React from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';

export default class Body extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <>
        {todos.map(todo => {
          return <Todo todo={todo} />;
        })}
        <NewTodo />
      </>
    );
  }
}
