import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  item,
  todeleteItem,
  tohandleCheckbox,
  toHandleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packedStatus") {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    console.log(sortedItems);
  }

  return (
    <div className="list">
      {sortedItems.length === 0 ? (
        <p className="empty-message">
          🧳 Start adding items to your packing list!
        </p>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              todeleteItem={todeleteItem}
              tohandleCheckbox={tohandleCheckbox}
            />
          ))}
        </ul>
      )}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order </option>
          <option value="description"> Sort by description </option>
          <option value="packedStatus"> Sort by packed Items </option>
        </select>

        <button
          onClick={toHandleClearList}
          className={!sortedItems.length ? "clearBtn" : ""}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
