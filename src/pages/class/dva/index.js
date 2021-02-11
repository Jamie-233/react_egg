import React, { Component } from 'react';
import { connect } from 'dva';
import Search from './search';
import Lists from './lists'

class Dva extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <Search {...this.props} />
          <Lists {...this.props} />
      </div>
    )
  }
}

export default connect(({search}) => ({
    search
}))(Dva)