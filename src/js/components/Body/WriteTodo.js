import React from 'react';

export default class WriteTodo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Write Your Todos" />
      </form>
    );
  }
}
