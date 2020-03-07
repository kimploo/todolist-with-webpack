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
      tags: ['tag', 'tag2'],
    };

    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.inputKeyDown = this.inputKeyDown.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    // this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  componentDidMount() {
    const { title, completed, UserId } = this.props.todo;
    this.setState({
      title,
      completed,
    });
  }

  handleTodoClick(event) {
    this.setState({
      completed: event.target.checked,
    });
  }

  removeTag(index) {
    const newTags = [...this.state.tags];
    newTags.splice(index, 1);
    this.setState({ tags: newTags });
  }

  inputKeyDown(e, tagInput) {
    const { value } = e.target;
    const { tags } = this.state;
    console.log(e, 'inner');
    if (e.key === 'Enter' && value) {
      if (tags.find(tag => tag.toLowerCase() === value.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...tags, value] });
      tagInput.value = null;
    } else if (e.key === 'Backspace' && !value) {
      this.removeTag(tags.length - 1);
    }
  }
  // 엔터를 눌렀을 때, 하위 컴포넌트에 접근해서 그 값을 삭제하고 싶은데
  // 잘 되지 않는 모습!

  handleInputKeyDown(event, tagInput) {
    return this.inputKeyDown(event, tagInput);
  }
  // Tags에는 익명 함수를 하나를 이벤트가 걸리는 곳에 선언하고
  // 그 안에서 상위 컴포넌트 this가 유지된 하나의 함수를 실행하게 한다
  // 커링을 활용해서, 상위 컴포넌트 this에서 원하는 동작을 실행시킨다.

  render() {
    const { completed, title, tags } = this.state;
    return (
      <>
        <DivTodo>
          <CheckedBox
            name="title"
            onClick={this.handleTodoClick}
            checked={completed}
          />
          {title}
        </DivTodo>
        <Tags
          tags={tags}
          removeTag={this.removeTag}
          inputKeyDown={this.inputKeyDown}
          handleInputKeyDown={this.handleInputKeyDown}
        />
      </>
    );
  }
}
