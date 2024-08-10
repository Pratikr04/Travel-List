export default function Item({ itemObj, onDelete, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => {
          return onToggleItem(itemObj.id);
        }}
      />

      <span style={{ textDecoration: itemObj.packed && "line-through" }}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDelete(itemObj.id)}>❌</button>
    </li>
  );
}