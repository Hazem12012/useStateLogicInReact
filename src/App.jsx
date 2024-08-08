// import section.
import React, { useState } from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

// Main Component.
export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 1, packed: false },
    { id: 3, description: "hazem", quantity: 32, packed: false },
    { id: 4, description: "waled", quantity: 72, packed: false },
  ]);

  function handelDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelClear() {
    const conferm = window.confirm(
      "Are you sure you wont to delete all items ?"
    );
    conferm === true ? setItems([]) : setItems([...items]);
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // Data of stats
  const itemsIsPacked = items.filter((e) => e.packed === true);
  return (
    <div className="App">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        onDelete={handelDelete}
        onToggleItem={handelToggleItem}
        onClear={handelClear}
      />
      <Stats numberItem={items.length} dataPacked={itemsIsPacked.length} />
    </div>
  );
}
