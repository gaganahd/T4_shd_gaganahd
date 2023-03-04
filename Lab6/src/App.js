import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react';

function App() {
  return (



   /* <div>

      <h1>Welcome to virtusa</h1>
      <h2 style={{ color: "blue" }}>React training program</h2>
      <h3 style={{ color: "red" }}>Conducted by learning delivery organization</h3>




    </div>*/ 

    React.createElement("div", { className: 'blackcolor' }, React.createElement("h1", null, "  Welcome to virtusa"),

      React.createElement("div", { className: "bluecolor" }, React.createElement("h2", null, "React training program"),
        React.createElement("div", { className: "redcolor" }, React.createElement("h3", null, "Conducted by learning delivery"))))

   
    

  );

}

export default App;
