import React from 'react';

export default class ComponentParallax extends React.Component {
   render(){      
      const style = {
         height:'400px'       
      };
      return (<div id="index-banner" style={style} className="parallax-container">
          <div className="parallax">
            <img src="/images/react-logo.png"/>
          </div>

          <div className="section no-pad-bot">
            <div className="container">
              <h1 className="header center teal-text text-lighten-2 ">REACTJS</h1>
            </div>
          </div>          
        </div>);
   }
}