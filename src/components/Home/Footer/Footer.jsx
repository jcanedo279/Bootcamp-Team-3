import React from 'react';

import { Link, Redirect } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div className="Footer">
      //   <footer className="w3-container w3-theme-dark w3-padding-16">
      //     {/*function to click on 'Go to Top' button and return back to top of page*/}
      //     <h3>Footer</h3>
      //     <p>Powered by</p>
      //     <div
      //       // style="position:relative;bottom:55px;"
      //       className="w3-tooltip w3-right"
      //     >
      //       <span className="w3-text w3-theme-light w3-padding">Go To Top</span>
      //       <a className="w3-text-white" href="#myHeader">
      //         <span className="w3-xlarge">
      //           <i className="fa fa-chevron-circle-up" />
      //         </span>
      //       </a>
      //     </div>
      //     {/* function to click on App icons and About page */}
      //     <p>
      //       Check us out on
      //       <i className="fa fa-facebook-official w3-hover-opacity" />
      //       <i className="fa fa-instagram w3-hover-opacity" />
      //       <i className="fa fa-twitter w3-hover-opacity" />
      //       <i className="fa fa-linkedin w3-hover-opacity" />
      //     </p>
      //     <p>Remember to check out our</p>
      //   </footer>
      // </div>

      <div className="Footer">
        <ul className="navList">
          <li>
            <p>Powered by <b>React</b></p>
          </li>
          <li>
            <div
              // style="position:relative;bottom:55px;"
              className="w3-tooltip w3-right"
            >
              <form
                type="button"
                text="Refresh"
                name="refresh"
                className="w3-text w3-theme-light w3-padding"
                onSubmit={() => {
                  window.location.reload(false);
                }}
              >
                <button type="submit">Go To Top</button>
              </form>
            </div>
          </li>

          <li>
            <p>
              Check us out on
              {/*<a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-facebook-official w3-hover-opacity" />
              </a>*/}
              <a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-instagram w3-hover-opacity" />
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-twitter w3-hover-opacity" />
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-linkedin w3-hover-opacity" />
              </a> 
              {/*<i className="fa fa-facebook-official w3-hover-opacity" />
              <i className="fa fa-instagram w3-hover-opacity" />
              <i className="fa fa-twitter w3-hover-opacity" />
              <i className="fa fa-linkedin w3-hover-opacity" />*/}
            </p>
          </li>
          <p>Remember to check out our <a href="#" className="w3-hover-opacity">About Page</a></p>
        </ul>
      </div>
    );
  }
}

export default Footer;
