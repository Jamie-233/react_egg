import React, { Component } from 'react';
import ListsItem1 from './lists-item1';

export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <ListsItem1  />
      </div>
    )
  }
}