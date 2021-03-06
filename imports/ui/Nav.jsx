import React, {Component} from 'react';

import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper.jsx';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                  <AccountsUIWrapper />
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                          <a href="index.html">Home</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}
