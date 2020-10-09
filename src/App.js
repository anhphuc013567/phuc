import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import SignUp from './SignUp';

function App() {
  return (
      <div className="App">
            <Content name="hello"/>
            <SignUp/>
      </div>
  );
}

export default App;