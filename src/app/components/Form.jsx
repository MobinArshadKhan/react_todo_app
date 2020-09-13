import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import View from "./View";
import AddIcon from "@material-ui/icons/Add";

const Form = () => {
  const [name, setName] = useState();
  const [items, setItems] = useState([
    { id: uuidv4(), name: "Mobin Arshad Khan" },
    { id: uuidv4(), name: "Washim Arshad Khan" },
    { id: uuidv4(), name: "Nadeem Arshad Khan" },
    { id: uuidv4(), name: "Jashim Arshad Khan" },
  ]);

  const handleInput = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = (item) => {
    if (!item) {
      alert("Please enter item");
    } else {
      setItems((preValue) => {
        return [{ id: uuidv4(), name: name }, ...preValue];
      });
      setName("");
    }
  };

  const deleteItem = (id) => {
    setItems((preValue) => {
      return preValue.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div>
      <div>
        <input
          className="form-control d-inline"
          value={name}
          onChange={handleInput}
          type="text"
          placeholder="Enter Items"
        />

        <button
          className="mt-2 text-center d-block ml-auto mr-auto btn btn-success btn-sm"
          onClick={() => {
            handleSubmit(name);
          }}
        >
          <AddIcon />
        </button>
      </div>
      {/* Output componet here */}
      <View items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default Form;
