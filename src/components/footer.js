import React from 'react';

export default class ComponentFooter extends React.Component {
   render(){
      return (  <footer className="page-footer light-blue lighten-1">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
         </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Creado Por <a className="orange-text text-lighten-3" >Jerson Betin</a>
      </div>
    </div>
  </footer>)
   }
}