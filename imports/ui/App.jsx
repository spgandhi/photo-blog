import React, {Component} from 'react';

import Nav from '/imports/ui/Nav.jsx';
import Header from '/imports/ui/Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <Header />
        <div>
          Helo World!
        </div>
      </div>
    );
  }
}
