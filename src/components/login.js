import React from 'react';

export default class ComponentLogin extends React.Component {
   render(){
      return (<form className="col s12">
         <div className="row">
            <div className="input-field col s12">
               <input className="validate" type="text" id="username"/>
               <label forHtml="username">Username</label>
            </div>
            <div className="input-field col s12">
               <input className="validate" type="password" id="password"/>
               <label forHtml="password">password</label>
            </div>
            <div className="col s12">
               <button className="waves-effect waves-light btn col s12">
                  Login  <i className="fa fa-sign-in"></i>
               </button>
            </div>
         </div>
         </form>);
   }
}