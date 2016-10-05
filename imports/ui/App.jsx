import React, {Component} from 'react';

import Nav from '/imports/ui/Nav.jsx';
import Header from '/imports/ui/Header.jsx';
import Add from '/imports/ui/Add.jsx';
import Blogs from '/imports/ui/Blogs.jsx';
export default class App extends Component {

  constructor(){
    super();

    this.state = {
      user : Meteor.user()
    }
  }

  render() {
    return (
      <div className="">
        <Nav />
        <Header />
        {
           this.state.user ? <Add /> : ''
        }
        <Blogs />
      </div>
    );
  }
}
