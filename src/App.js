import React from 'react';


// Components
import Preloader from './Components/Preloader'


function App() {
  return (
    <div className="app_loader">
      <div className="app_pulse">
        <Preloader />
      </div>
    </div>
  );
}

export default App;
