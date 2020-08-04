import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './PageHeader.css';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="w3-container">
        <h5>
          <b>
            <i className="fa fa-dashboard"></i> My Dashboard
          </b>
        </h5>
      </header>
    );
  }
}

export default PageHeader;
