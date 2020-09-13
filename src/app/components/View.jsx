import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const View = ({ items, deleteItem }) => {
  return (
    <div className="mt-4">
      {items.map((item) => {
        return (
          <div
            className="card my-2"
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <li style={{ listStyle: "none" }}>{item.name}</li>
            <DeleteOutlineIcon
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => deleteItem(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default View;
