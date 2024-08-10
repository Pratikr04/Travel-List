import { useState } from "react";
import Footer from "./Footer";
import PackingList from "./PackingList";
import Form from "./Form";
import  Header  from "./Header";
function App() {
  const [currItems, setCurrItems] = useState([]);

  function handleItems(newItem) {
    return setCurrItems((item) => [...item, newItem]);
  }
  function handleDeleteItem(id) {
    setCurrItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setCurrItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      });
    });
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setCurrItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form addOnItem={handleItems} />
      <PackingList
        currItems={currItems}
        onDelete={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={currItems} />
    </div>
  );
}

export default App;
