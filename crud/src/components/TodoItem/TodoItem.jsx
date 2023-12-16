import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ data, deleteTodo, editTodoItem }) => {
  const [editedValue, setEditedValue] = useState(data.name);
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {
    deleteTodo(data);
  };

  const handleEdit = () => {
    editTodoItem(data.id, editedValue);
    setIsEdit(false);
  };

  return (
    <div className="todo-item">
      {isEdit ? (
        <>
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button
            style={{
              color: "#023047",
              backgroundColor: "#fb8500",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={handleEdit}
          >
            save
          </button>
        </>
      ) : (
        <>
          <span onClick={() => setIsEdit(true)}>{data.name}</span>
          <button
            style={{
              color: "#023047",
              backgroundColor: "#fb8500",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          >
            del
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
