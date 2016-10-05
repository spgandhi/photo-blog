import React, {Component} from 'react';

import Nav from '/imports/ui/Nav.jsx';
import Header from '/imports/ui/Header.jsx';
import Add from '/imports/ui/Add.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <Header />
        <Add />
      </div>
    );
  }
}
