import './App.css';
import React from 'react';
import InstructorApp from './components/InstructorApp';

function App() {
  document.title = "Simple App"; 
  return (
    <div className="container">
     <InstructorApp/>
    </div>
  );
}

export default App;
