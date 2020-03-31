import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Parent from './components/Parent';
// import Child from './components/Child';

// ------------------------------------------------------------------------------------------------------------------------------------

// const App = () => {

//     // Variables' type that we can use or we cannot.
//     const content = 'Hey There';
//     // const content = 123;
//     // const content = ['hi', 'hey'];
//     // const content = [1, 2];
//     // const content = {text: 'hey'}; // ERROR: Objects are not valid as a React child

//     return (
//         <div style={{border: '1px solid red'}} className="divStyle">
//             {content}

//             {/* <label for="myname">Name</label> */}
//             {/*
//                 Warning: Invalid DOM property `for`
//                 Similar to className vs class, use 'htmlFor' over for.
//             */}
//             <label htmlFor="myname">Name</label>
//             <input id="myname" />

//         </div>
//     );
//     // First Curly braces indicates JS variable and Second Curly braces indicates object

//     // class and className both are working.
//     // If we use both together as className="divStyle" class="divStyle1",
//     // class's styling is overwriting className's styling here as it comes later.
//     // But we shouldn't use 'class'. The reason is that it will be confused with 'class' keyword used for creating components.
//     // Example, class App extends React.Component
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// const App = () => {
//     // This Child component is passed as children property of props.
//     // if single, children property is object.
//     // if multiple, children property is Array.
//     return (
//         <Parent>
//             <Child />
//             <Child />
//         </Parent>
//     );
// };

// ------------------------------------------------------------------------------------------------------------------------------------

class App extends React.Component {
  // constructor method is called whenever new instance of App is created
  // and It is called at the very beginning.
  // Constructor method is not specific to React, it is feature of JS.
  // It is called with the 'props' variable which is same as props in functional component.
  constructor(props) {
    // This constructor is overriding the constructor of React.component
    // To run all the required functionality of parent's constructor, call super function.
    super(props);

    // variable name must be state instead of anything else like myState, etc.
    this.state = {
      lat: 0,
      demo: 450
    };

    window.navigator.geolocation.getCurrentPosition(
      // callback function when geolocation getCurrentPosition API succeed
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
        // Don't use like this
        // this.state.lat = position.coords.latitude
      },
      // callback function when geolocation getCurrentPosition API fails
      err => console.log(err)
    );
  }

  // render method is compulsory in React
  render() {
    // Render method will be called frequently whenever state changes so don't write such api calls inside render method.
    // window.navigator.geolocation.getCurrentPosition(
    //   position => console.log(position),
    //   err => console.log(err)
    // );

    return (
      <div>
        Latitude: {this.state.lat} <br /> Demo: {this.state.demo}
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------

ReactDOM.render(
  <App />,
  // document.querySelector('#root')
  document.getElementById("root")
);
