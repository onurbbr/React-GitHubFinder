import { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <UserItem />
      </Fragment>
    );
  }
}

export default App;
