import React from 'react';
import './App.css';
import Folder from './Folder';
import Tabs from './Tabs';
import Header from './Header'; // Import Header component

function App() {
  return (
    <div className="App">
      <Header /> {/* Include Header component */}
      
      <main>
        <Folder />
        {/* You can also include Tabs here if needed */}
      </main>
    </div>
  );
}

export default App;
