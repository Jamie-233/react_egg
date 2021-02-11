import React, { Component, lazy, Suspense } from 'react';

export default class LazyLoad extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _renderLazy = () => {
      let Lazy;
      const { component, delay, ...other } = this.props;
      console.log('component', component);
      if(!component || component.constructor.name !== 'Promise') {
          Lazy = import('./error');
      }

      Lazy = lazy(() => {
          return new Promise(resolve => {
              setTimeout(() => {
                resolve(component);
              }, delay || 300)
          })
      })
      return <Lazy { ...other } />;
  }

  render() {
    return (
      <div>
          <Suspense fallback={<div>loadding...</div>}>
            { this._renderLazy() }
          </Suspense>
      </div>
    )
  }
}