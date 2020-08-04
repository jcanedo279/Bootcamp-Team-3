import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './MainContainer.css';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w3-row-padding w3-margin-bottom">
        <div className="w3-third">
          <div className="w3-container w3-blue w3-padding-16 w3-hover-dark-grey">
            <div className="w3-left">
              <i className="fa fa-comment w3-xxxlarge"></i>
            </div>
            <div className="w3-right">
              <h3>12</h3>
            </div>
            <div className="w3-clear"></div>
            <h4>Messages</h4>
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-container w3-teal w3-padding-16 w3-hover-dark-grey">
            <div className="w3-left">
              <i className="fa fa-share-alt w3-xxxlarge"></i>
            </div>
            <div className="w3-right">
              <h3>10</h3>
            </div>
            <div className="w3-clear"></div>
            <h4>Petitions Shared</h4>
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-container w3-green w3-text-white w3-padding-16 w3-hover-dark-grey">
            <div className="w3-left">
              <i className="fa fa-users w3-xxxlarge" />
            </div>
            <div className="w3-right">
              <h3>25</h3>
            </div>
            <div className="w3-clear"></div>
            <h4>My Organizations</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
