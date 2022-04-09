import React from 'react';
import './App.css';
import MiddleSection from './components/MiddleSection';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <SideBar/>
      <MiddleSection/>
    </div>
  );
}

export default App;
