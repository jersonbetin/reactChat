import React from 'react';

export default class ComponentLogoUser extends React.Component {
   render(){
      return (<div className="col s12 user-logo">
         <div className="row">
            <div className="col s6 ">
               <img src="images/user.jpg" alt="" className="circle responsive-img"/>
            </div>
            <div className="col s6 info">
              <span className="white-text">
                Jerson Betin
              </span>
            </div>
         </div>
      </div>);
   }
}