import React, { Component } from 'react';

export default class ListItem1 extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>item-1-{this.props.name}</h1>
      </div>
    )
  }
}