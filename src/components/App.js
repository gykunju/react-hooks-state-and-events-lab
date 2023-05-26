import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setIsLight] = useState(true)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  function handleMode(){
    if(isLight){
      setIsLight(false)
    }else{
      setIsLight(true)
    }
  }
  const appClass = isLight ? "App light" : "App dark" 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isLight? "Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
