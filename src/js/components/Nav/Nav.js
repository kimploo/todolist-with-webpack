import React from 'react';
import { Search } from '.';

export default class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>This is place for Nav</div>
        <Search />
      </>
    );
  }
}
