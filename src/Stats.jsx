export function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em> Start add items to you packing lists</em>
      </p>
    );
  const items = item.length;

  const packedItem = item.filter((item) => item.packed).length;
  let percentage = Math.round((packedItem / items) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you packed 100% and and ready to go "
          : `you have ${items} item in your list and you already packed ${packedItem} (
        ${percentage}%) `}
      </em>
    </footer>
  );
}
