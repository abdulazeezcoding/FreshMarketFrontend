import React from "react";
import { MdDelete } from "react-icons/md";

export default function ProductDelete({ productId }) {
  const onDeleteHandler = async () => {
    try {
      await fetch(`http://localhost:4000/api/product/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      });

      //   navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MdDelete
      onClick={onDeleteHandler}
      className="text-red-600 text-2xl cursor-pointer"
    />
  );
}
