import React from "react";
import { toast } from "react-toastify";

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          editItem(item.id);
          if (!item.completed) {
            toast.success(`great, ${item.name} was completed`);
          }
        }}
      />
      {item.completed ? (
        <em className="singleItem-complete">{item.name}</em>
      ) : (
        <p>{item.name}</p>
      )}

      <button
        onClick={() => removeItem(item.id)}
        type="button"
        className="btn remove-btn"
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
