import React from 'react';

export default function Tag({ tag, index, removeTag }) {
  return (
    <>
      <div>{tag}</div>
      <button
        type="button"
        onClick={() => {
          removeTag(index);
        }}
      >
        +
      </button>
    </>
  );
}
