import React from 'react';

export default class NewTodos extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="checkbox" />
        <input type="text" />
      </form>
    );
  }
}
