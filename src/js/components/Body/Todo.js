import React from 'react';
import styled from 'styled-components';

import Tags from './Tags';

const DivTodo = styled.div`
  background-color: #36393f;
  padding: 0.25em;
  border: 2px solid #36393f;
  align-items: center;
`;

const CheckedBox = styled.input.attrs({ type: 'checkbox' })`
  padding: 0.2em;
`;

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      checked: false,
      tags: [],
    };

    this.handleTodoClick = this.handleTodoClick.bind(this);
    // this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  componentDidMount() {
    const { title, completed, tags } = this.props.todo;
    this.setState({
      title,
      completed,
      tags,
    });
  }

  handleTodoClick(event) {
    this.setState({
      completed: event.target.checked,
    });
  }

  // 엔터를 눌렀을 때, 하위 컴포넌트에 접근해서 그 값을 삭제하고 싶은데
  // 잘 되지 않는 모습!

  // handleInputKeyDown(event, tagInput) {}
  // Tags에는 익명 함수를 하나를 이벤트가 걸리는 곳에 선언하고
  // 그 안에서 상위 컴포넌트 this가 유지된 하나의 함수를 실행하게 한다
  // 커링을 활용해서, 상위 컴포넌트 this에서 원하는 동작을 실행시킨다.

  render() {
    const { completed, title } = this.state;
    const {
      todo,
      todoIndex,
      removeTodo,
      removeTag,
      handleInputKeyDown,
    } = this.props;

    return (
      <>
        <DivTodo>
          <CheckedBox
            name="title"
            onClick={this.handleTodoClick}
            checked={completed}
          />
          {title}
          <button onClick={removeTodo(todoIndex)}>X</button>
        </DivTodo>
        <Tags
          tags={todo.tags}
          todoIndex={todoIndex}
          removeTag={removeTag}
          handleInputKeyDown={handleInputKeyDown}
        />
      </>
    );
  }
}
