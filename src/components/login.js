import React from 'react';

export default class ComponentLogin extends React.Component {
   render(){
      return (<form className="col s12">
         <div className="row">
            <div className="input-field col s12">
               <i class="material-icons prefix">account_circle</i>
               <input placeholder="ingrese usuario" className="validate" type="text" id="username"/>
               <label for="username">Username</label>
            </div>
            <div className="input-field col s12">
               <i class="material-icons prefix">account_circle</i>
               <input placeholder="ingrese Contraseña" className="validate" type="password" id="password"/>
               <label for="password">password</label>
            </div>

         </div>
         </form>);
   }
}