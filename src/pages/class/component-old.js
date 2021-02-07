import React, { PureComponent } from 'react';
// Component
// PureComponent 比较的state里的值(浅比较 层级深无法比较)
export default class ComponentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        text: {id: 1}
    };
    console.log('constructor');

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
      console.log('componentDidUpdate');
  }

  componentWillUpdate() {
      console.log('componentWillUpdate');
  }

    // 在组件更新是触发: true 继续渲染 false 停止渲染
    // 不加入第二个条件之前 点击事件修改值同样会触发render方法 (组件被重复渲染)
    // 将 Component 替换为 PureComponent (对 shouldComponentUpdate 2次封装)
    //   shouldComponentUpdate(props, state) {
    //     console.log('shouldComponentUpdate');
    //     console.log(props, state);
    //     if(state.text === 'demo2-new' && this.state.text !== state.text) {
    //         return true;
    //     }
    //     return false;
    //   }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
      this.setState({
          text: {id:2}
      })
  }

  render() {
    console.log('render');
    return (
      <div onClick={this.handleClick}>
            component-old-{this.state.text.id}
      </div>
    )
  }
}