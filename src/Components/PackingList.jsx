import { useState } from "react";
import Item from "./Items";
export default function PackingList({ currItems, onDelete, onToggleItem, onClearItems }) {
  const [sortItems, setSortItems] = useState("input");
  let sortedItems;
  if (sortItems === "input") sortedItems = currItems;
  if (sortItems === "description")
    sortedItems = currItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortItems === "packed")
    sortedItems = currItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select
          value={sortItems}
          onChange={(event) => {
            return setSortItems(event.target.value);
          }}
        >
          <option value="input">Sort by input </option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed items</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
