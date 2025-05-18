// import { useState } from "react";
import "./App.css";
import ItemForm from "./components/ItemForm";

function App() {
  const handleAddItem = (item) => {
    console.log("New item: ", item);
  };

  return (
    <div className="max-wd-m mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Grocery Item Entry</h1>
      <ItemForm onSubmit={handleAddItem} />
    </div>
  );
}

export default App;
