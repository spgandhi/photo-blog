import React, {Component} from 'react';

import Nav from '/imports/ui/Nav.jsx';
import Header from '/imports/ui/Header.jsx';
import Add from '/imports/ui/Add.jsx';
import Blogs from '/imports/ui/Blogs.jsx';

import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {

  render() {
    return (
      <div className="">
        <Nav />
        <Header />
        {
           this.props.user ? <Add /> : ''
        }
        <Blogs />
      </div>
    );
  }
}

export default createContainer(()=>{
  return {
    user : Meteor.user()
  }
}, App)
