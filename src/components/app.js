import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './head';
import ComponentSectionHome  from './sectionHome';
import ComponentParallax  from './parallax';
import ComponentFooter  from './footer';

class App extends React.Component {
   render(){
      return (<div>
        <ComponentHeader /> 
        <ComponentParallax />
        <div className="container">
          <ComponentSectionHome />
        </div>
        <ComponentFooter />
      </div>);
   }
}

export default App;