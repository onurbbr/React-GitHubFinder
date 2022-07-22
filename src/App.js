import './App.css';
import { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title='GitHub Finder' icon='fab fa-github' />
      </Fragment>
    );
  }
}

export default App;
