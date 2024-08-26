import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Composite_form from "./components/Composite_item.js";
import Item_form from "./components/Item_form.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <Footer /> */}
    </div>
  );
}


export default App;
