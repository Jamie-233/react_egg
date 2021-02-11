import React, { Component } from 'react'
import PropsTypes from 'prop-types'
export default class ListItem1 extends Component {

  static defaultProps = {
    name: '???',
  }

  static propsTypes = {
    name: PropsTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClick = () => {
    this.props.handleItem('???')
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1-{this.props.name}</h1>
      </div>
    )
  }
}