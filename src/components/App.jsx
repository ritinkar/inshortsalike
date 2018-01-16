import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import MainContainer from './MainContainer';


const store = configureStore();


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}



export default App;
