import { Component } from 'react';

export default class Id extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.match.params?.id}</h1>
      </div>
    )
  }
}
