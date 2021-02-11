import React, { Component, lazy, Suspense } from 'react';
// import Demo from './demo';

const Demo = lazy(() => import('./demo'));

export default class Lazyload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        {/* fallback 在子组件 未解析完成之前执行 可以使用loadding */}
        {this.state.flag ? (
          <Suspense fallback={<div>loadding...</div>}>
            <Demo />
          </Suspense>
        ) : null}
      </div>
    );
  }
}
