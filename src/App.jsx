import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import EmptyList from "./EmptyList";
import Completed from "./Completed";

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     list = JSON.parse(localStorage.getItem("list"));
//   } else {
//     list = [];
//   }
//   return list;
// };

const defaultList = JSON.parse(localStorage.getItem("list")) || "[]";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState("");

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        //change the completed value of item checked
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  //check if all the task were completed
  const allCompleted =
    items.length > 0 && items.every((item) => item.completed);

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      {items.length !== 0 ? (
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      ) : (
        <EmptyList />
      )}
      {allCompleted && <Completed />}
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
