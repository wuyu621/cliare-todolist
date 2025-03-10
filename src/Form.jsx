import { useState } from "react";
import { toast } from "react-toastify";
import pikaface from "./assets/images/pikaface.svg";
const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("please provide value");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <img src={pikaface} alt="pikaHead" />
        <h4>Claire's to do list</h4>
      </div>

      <p className="date">- {new Date().toDateString()} -</p>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
