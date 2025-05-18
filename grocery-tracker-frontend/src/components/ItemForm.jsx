import { useState } from "react";

const ItemForm = ({ onSubmit }) => {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem({ name: "", quantity: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow rounded space-y-4"
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={item.category}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
