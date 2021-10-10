import logo from './logo.svg';
import './App.css';
import ExampleClass from './ExampleClass.js'
import ExampleFunctional from './ExampleFunctional.js'
import React from 'react'

function App() {
  const [showExampleClass, setShowExampleClass] = React.useState(true)
  const [showExampleFunctional, setShowExampleFunctional] = React.useState(true)
  return (
    <div className="App">
      {showExampleClass ? 
        <ExampleClass /> :
        <p>hidden example class</p>
      }
      <button onClick={() => {
        setShowExampleClass(false)
        }
      }>hide example class</button>

      {showExampleFunctional ? 
        <ExampleFunctional /> :
        <p>hidden example function</p>
      }
      <button onClick={() => {
        setShowExampleFunctional(false)
        }
      }>hide example function</button>
    </div>
  );
}

export default App;
