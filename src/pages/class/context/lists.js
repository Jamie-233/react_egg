import React, { Component } from 'react';
import { List } from 'antd-mobile';
import searchContext from './searchContext';

export default class Lists extends Component {

  static contextType = searchContext;

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {text, lists} = this.context.state;

    return (
      <div>
        <h1>text: {text}</h1>
          <List>
              {lists.map((item, i) => (
                  <List.Item key={i}>{ item }</List.Item>
              ))}
          </List>
      </div>
    )
  }
}