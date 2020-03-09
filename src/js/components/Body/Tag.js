import React from 'react';

export default class Tag extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
    };
  }

  componentDidMount() {
    const { tag } = this.props;
    this.setState({
      tag,
    });
  }

  render() {
    const { tag } = this.props;
    return <div>{tag}</div>;
  }
}
