import React, { useState } from "react";

// item content in packing List
function Item({ item, onDelete, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkBox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {`${item.quantity} ${item.description}`}
        </span>
        <button onClick={() => onDelete(item.id)}>❌</button>
      </li>
    </div>
  );
}
export default Item;
