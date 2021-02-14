import React, { Component } from 'react';
export default class ComponentOld extends Component {

  constructor(props) {
    super(props);
    this.state = {
        text: {id: 1}
    };
  }

  // 使用此方法在组件更新时动态修改里面的值
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(props, state);
    return state;
  }

  // 获取DOM相关的信息 返回的值作为componentDidUpdate 的第三个参数
  // 和 componentDidUpdate 配合使用
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return 'getSnapshotBeforeUpdate';
  }

  componentDidUpdate(props, state, snapshot) {
    console.log(snapshot);
  }

  handleClick = () => {
      this.setState({
          text: {id:2}
      })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
            component-new-{this.state.text.id}
      </div>
    )
  }
}