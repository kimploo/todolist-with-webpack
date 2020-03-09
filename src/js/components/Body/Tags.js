import React from 'react';
import shortid from 'shortid';
import Tag from './Tag';

export default class Tags extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    const { tags } = this.props;
    this.setState({
      tags,
    });
  }

  componentDidUpdate(nextProps) {
    const { tags } = this.props;
    if (nextProps.tags !== tags) {
      if (tags) {
        this.setState({ tags: nextProps.tags });
      }
    }
  }

  render() {
    const {
      tags,
      todoIndex,
      removeTag,
      inputKeyDown,
      handleInputKeyDown,
    } = this.props;
    let tagInput;
    return (
      <>
        {tags.map((tag, tagIndex) => (
          <>
            <Tag
              key={shortid.generate()}
              todoIndex={todoIndex}
              tagIndex={tagIndex}
              tag={tag}
              removeTag={removeTag}
            />
            <button type="button" onClick={removeTag(tag, todoIndex)}>
              X
            </button>
          </>
        ))}
        <li className="input-tag__tags__input">
          <input
            type="text"
            onKeyDown={function(event) {
              handleInputKeyDown(event, tagInput, todoIndex);
            }}
            ref={c => {
              tagInput = c;
            }}
          />
        </li>
      </>
    );
  }
}
