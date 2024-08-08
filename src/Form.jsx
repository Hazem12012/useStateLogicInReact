import React, { useState } from "react";

// Form Component
function Form({ items, setItems }) {
  // hooks to input and select items.
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //****************************************  Handel Submit button (ADD)  ******************************
  function handleSubmit(e) {
    e.preventDefault();
    // handel inputs
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // set all the data input

    newItem.description !== ""
      ? setItems([newItem, ...items])
      : setItems(items);

    // Reset the data input
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Whot do you need for you 😍 trip?</h3>
      <select value={quantity} onChange={(id) => setQuantity(+id.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="item..."
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
export default Form;
