import React from 'react';
import ComponentLogin from '../login';

export default class ComponentSectionHome extends React.Component{
   render(){
      return (<div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h4 className="center brown-text">Login</h4>
            <ComponentLogin />
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h4 className="center brown-text"><i className="material-icons">group</i></h4>
            <h5 className="center">User Experience Focused</h5>

            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h4 className="center brown-text"><i className="material-icons">settings</i></h4>
            <h5 className="center">Easy to work with</h5>

            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>)
   }
}