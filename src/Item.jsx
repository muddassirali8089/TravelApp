export function Item({ item, todeleteItem, tohandleCheckbox }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => tohandleCheckbox(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        &nbsp;
        {item.description}
      </span>

      <button onClick={() => todeleteItem(item.id)}>❌</button>
    </li>
  );
}
