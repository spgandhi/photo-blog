import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Posts } from '/imports/models/model.js';

import PostSingle from '/imports/ui/PostSingle.jsx';

export default class Blogs extends TrackerReact(React.Component) {

  constructor(){
    super();

    this.state = {
      subscription: {
        posts : Meteor.subscribe('posts')
      }
    }
  }
  
  getItems(){
    return Posts.find().fetch();
  }

  render() {
    return (
      <div className="container">
        {
          this.getItems().map((post)=>(
            <PostSingle key={post._id} post={post} />
          ))
        }
      </div>
    );
  }
}
