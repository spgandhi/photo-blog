import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Add extends Component {

  handleSubmit(event){
      event.preventDefault();

      var post = {};
      var title = ReactDOM.findDOMNode(this.refs.title).value.trim();
      var url = ReactDOM.findDOMNode(this.refs.url).value.trim();
      var caption = ReactDOM.findDOMNode(this.refs.caption).value.trim();
      console.log(title);
      console.log(url);
      console.log(caption);
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
