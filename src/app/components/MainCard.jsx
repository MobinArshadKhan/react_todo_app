import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

const MainCard = () => {
  return (
    <div
      style={{
        width: "450px",
        minHeight: "450px",
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="card border-success mb-3 ml-auto mr-auto">
        <div className="card-header bg-transparent border-success">
          <h3 className="text-center">TODO</h3>
        </div>
        <div className="card-body">
          <Form />
        </div>
        <div className="card-footer bg-transparent border-success">
          <p className="text-secondary">Mobin Arshad Khan</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
