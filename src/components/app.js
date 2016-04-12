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
      let parallax = <ComponentParallax />;
      if(this.props.routes[this.props.routes.length-1].path || false){
        parallax = null;
      }
      return (<div>
        <ComponentHeader />
        {/*Include parallax*/}
        {parallax}

        <div className="container">
          {/* this is the important part */}
          {this.props.children}
          {console.log(this.props.routes[this.props.routes.length-1])}
        </div>
        <ComponentFooter />
      </div>);
   }
}

let routes = (
  <Router  history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ComponentHome} />
      <Route path="register" component={ComponentRegister} />
      <Route path="about" component={ComponentAbout} />
      <Route path="contact" component={ComponentContact} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('containerAll'));

