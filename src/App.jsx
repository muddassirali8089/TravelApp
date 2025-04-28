/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
export default function App() {
  const [items, setItems] = useState(() => {
    // Load items from localStorage when component mounts
    const storedItems = localStorage.getItem("packingListItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });


  useEffect(() => {
    localStorage.setItem("packingListItems", JSON.stringify(items));
  }, [items]);

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleClearList = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete the all items in the list?"
    );
    if (confirm) setItems([]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckbox = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form toAddItems={handleAddItems} />
      <PackingList
        item={items}
        todeleteItem={handleDeleteItem}
        tohandleCheckbox={handleCheckbox}
        toHandleClearList={handleClearList}
      />
      <Stats item={items} />
    </div>
  );
}
