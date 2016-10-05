import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Posts } from '/imports/models/model.js';

export default class Add extends Component {

  handleSubmit(event){
      event.preventDefault();

      var post = {
        title: '',
        url: '',
        caption: ''
      };

      post.title = ReactDOM.findDOMNode(this.refs.title).value.trim();
      post.url = ReactDOM.findDOMNode(this.refs.url).value.trim();
      post.caption = ReactDOM.findDOMNode(this.refs.caption).value.trim();

      if(post.title.length < 3){
        console.log('title should be atleast 3 characters');
        return;
      }

      if(post.url.length == 0){
        console.log('please enter the url');
        return;
      }

      console.log(post);
      
      Meteor.call('insert_post', post, function(error, result){

        if(error)
          console.log(error)
        else
          console.log(result);

      });
      // Posts.insert(post);
      console.log('inserted');

      ReactDOM.findDOMNode(this.refs.title).value = '';
      ReactDOM.findDOMNode(this.refs.url).value = '';
      ReactDOM.findDOMNode(this.refs.caption).value = '';

  }

  render() {

    return (
      <div className="container">
        <form>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Title" ref="title" />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input type="text" className="form-control" placeholder="image url" ref="url" />
          </div>

          <div className="form-group">
            <label>Caption</label>
            <input type="text" className="form-control" placeholder="caption" ref="caption" />
          </div>

          <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}
