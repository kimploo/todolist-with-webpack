import React from 'react';
import Tag from './Tag';

export default function Tags({
  tags,
  removeTag,
  inputKeyDown,
  handleInputKeyDown,
}) {
  let tagInput;
  return (
    <>
      {tags.map((tag, index) => (
        <Tag key={tag} index={index} tag={tag} removeTag={removeTag} />
      ))}
      <li className="input-tag__tags__input">
        <input
          type="text"
          onKeyDown={function(event) {
            handleInputKeyDown(event, tagInput);
          }}
          ref={c => {
            tagInput = c;
          }}
        />
      </li>
    </>
  );
}
