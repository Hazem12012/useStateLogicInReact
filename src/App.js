// // import section.
// import React, { useState } from "react";

// // initial Items.
// // const initialItems = [
// //   { id: 1, description: "Passports", quantity: 2, packed: true },
// //   { id: 2, description: "Socks", quantity: 1, packed: false },
// //   { id: 3, description: "hazem", quantity: 32, packed: true },
// //   { id: 4, description: "waled", quantity: 72, packed: false },
// // ];

// //Start  Function Section.
// // Main Component.
// export default function App() {
//   const [items, setItems] = useState([
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 1, packed: false },
//     { id: 3, description: "hazem", quantity: 32, packed: false },
//     { id: 4, description: "waled", quantity: 72, packed: false },
//   ]);

//   function handelDelete(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }
//   function handelClear() {
//     const conferm = window.confirm("Are you sure you wont to delete all items ?");
//     conferm === true  ? setItems([]) : setItems([...items]) ;
//   }

//   function handelToggleItem(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }
//   // Data of stats
//   const itemsIsPacked = items.filter((e) => e.packed === true);

//   return (
//     <div className="App">
//       <Logo />
//       <Form items={items} setItems={setItems} />
//       <PackingList
//         items={items}
//         onDelete={handelDelete}
//         onToggleItem={handelToggleItem}
//         onClear={handelClear}
//       />
//       <Stats numberItem={items.length} dataPacked={itemsIsPacked.length} />
//     </div>
//   );
// }

// // Logo component
// function Logo() {
//   return <h1>🌴🧃 Far Away</h1>;
// }

// // Form Component
// function Form({ items, setItems }) {
//   // hooks to input and select items.
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   //****************************************  Handel Submit button (ADD)  ******************************
//   function handleSubmit(e) {
//     e.preventDefault();
//     // handel inputs
//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     // set all the data input

//     newItem.description !== ""
//       ? setItems([newItem, ...items])
//       : setItems(items);

//     // Reset the data input
//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>Whot do you need for you 😍 trip?</h3>
//       <select value={quantity} onChange={(id) => setQuantity(+id.target.value)}>
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         placeholder="item..."
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

// // Packing-List Component
// function PackingList({ items, onDelete, onToggleItem, onClear }) {
//   const [sortBy, setSortBy] = useState("input");
//   // handel sort items .
//   let sortedItems;
//   if (sortBy === "input") sortedItems = items;
//   if (sortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));
//   if (sortBy === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));
//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onDelete={onDelete}
//             onToggleItem={onToggleItem}
//           />
//         ))}
//       </ul>
//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value={"input"}>Sort by input order</option>
//           <option value={"description"}>Sort by description</option>
//           <option value={"packed"}>Sort by packed status</option>
//         </select>
//         <button className="ations" onClick={onClear}>
//           Clear List
//         </button>
//       </div>
//     </div>
//   );
// }
// // item content in packing List
// function Item({ item, onDelete, onToggleItem }) {
//   return (
//     <div>
//       <li>
//         <input
//           type="checkBox"
//           value={item.packed}
//           onChange={() => onToggleItem(item.id)}
//         />
//         <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//           {`${item.quantity} ${item.description}`}
//         </span>
//         <button onClick={() => onDelete(item.id)}>❌</button>
//       </li>
//     </div>
//   );
// }

// // Stats Component
// function Stats({ numberItem, dataPacked }) {
//   if (!numberItem)
//     return (
//       <p className="stats">
//         <em>Start adding some items to your packing list 🚀</em>
//       </p>
//     );

//   const percentage = Math.round((dataPacked / numberItem) * 100 || 0);
//   return (
//     <footer className="stats">
//       <em />
//       {percentage === 100
//         ? `You got everything!Ready to go 🚀`
//         : ` You have ${numberItem} items for your list, 
//         and your already packed ${dataPacked} (${percentage}
//           %)`}
//       <em />
//     </footer>
//   );
// }
