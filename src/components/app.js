import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './head';
import ComponentParallax  from './parallax';
import ComponentFooter  from './footer';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
//sections
import ComponentHome  from './pages/home';
import ComponentContact  from './pages/contact';
import ComponentAbout  from './pages/about';
import ComponentRegister  from './pages/register';

class App extends React.Component {
   render(){
      return (<div>
        <ComponentHeader />
        <ComponentParallax />
        <div className="container">
          {/* this is the important part */}
          {this.props.children}
        </div>
        <ComponentFooter />
      </div>);
   }
}

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ComponentHome} />
    <Route path="register" component={ComponentRegister} />
    <Route path="about" component={ComponentAbout} />
    <Route path="contact" component={ComponentContact} />
  </Route>
);

ReactDOM.render(<Router  history={browserHistory}>{routes}</Router>, document.getElementById('containerAll'));

