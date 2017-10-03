import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from '../Components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Modal />
      </MuiThemeProvider>
    );
  }
}

export default App;
