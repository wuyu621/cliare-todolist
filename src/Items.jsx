import React from "react";
import Item from "./SingleItem";

const Items = ({ items, removeItem, editItem, clearList }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
      <button className="btn clear" onClick={clearList}>
        clear the list
      </button>
    </div>
  );
};

export default Items;
