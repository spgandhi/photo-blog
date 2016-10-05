import React, {Component} from 'react';

export default class PostSingle extends Component {

  render() {
    return (
      <div>
        <div className="post-preview">

          <h2 className="post-title">
            {this.props.post.title}
          </h2>

          <div className="image-wrapper">
            <img src={this.props.post.url} width="100%" />
          </div>

          <h4 className="post-subtitle">
             {this.props.post.caption}
          </h4>

       </div>
         <hr/>
      </div>
    );
  }
}
