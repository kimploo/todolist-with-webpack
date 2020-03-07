import React from 'react';
import styled from 'styled-components';

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
  }

  render() {
    const { title, completed, UserId } = this.props.todo;
    return (
      <>
        <DivTodo>
          <CheckedBox />
          {title}
        </DivTodo>
      </>
    );
  }
}
