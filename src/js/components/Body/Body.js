import React from 'react';
import shortid from 'shortid';

import Todo from './Todo';
import WriteTodo from './WriteTodo';

export default class Body extends React.PureComponent {
  render() {
    const {
      todos,
      addTodo,
      removeTodo,
      addTag,
      removeTag,
      handleInputKeyDown,
    } = this.props;
    return (
      <>
        <WriteTodo addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              todoIndex={index}
              key={shortid.generate()}
              removeTodo={removeTodo}
              addTag={addTag}
              removeTag={removeTag}
              handleInputKeyDown={handleInputKeyDown}
            />
          );
        })}
      </>
    );
  }
}
