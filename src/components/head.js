import React from 'react';
import ComponentLogoUser from './logoUser';

class ComponentHeader extends React.Component {
   render(){
      return (<nav  className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo"><ComponentLogoUser /></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/register">Register</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>);
   }
}

export default ComponentHeader;