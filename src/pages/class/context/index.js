import React, { Component } from 'react';
import SearchContext from './searchContext';
import Search from './search';
// import Lists from './lists';
import { getLists } from '@/services/search';
import Consumer from './consumer';
import LazyLoad from '@/components/LazyLoad';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }

  handleDispatch = async action => {
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload,
        });
      case 'LISTS':
        const res = await getLists(action.payload);
        return this.setState({
          // lists: action.payload
          lists: res.lists,
        });
      default:
        break;
    }
  };

  render() {
    const house = {
      info: {}
    }
    return (
      <div>
        {house?.info2?.id}
        <SearchContext.Provider
          value={{
            state: this.state,
            dispatch: this.handleDispatch,
          }}
        >
          <Search />
          {/* <Lists /> */}
          <LazyLoad component={require('./lists')} />
          <Consumer />
        </SearchContext.Provider>
      </div>
    );
  }
}
