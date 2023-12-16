import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Todo.css";

// const todoItems = [
//   { name: "grocery", id: 1 },
//   { name: "cloths", id: 2 },
//   { name: "meat", id: 3 },
//   { name: "shoes", id: 4 },
//   { name: "car", id: 5 },
// ];

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [todoName, setTodoName] = useState("");

  // console.log(todoItems);

  const addTodo = () => {
    const todo = {
      name: todoName,
      id: new Date().valueOf(),
    };

    // setTodoItems((prev) => [todo, ...prev]);

    // const newTodoList = todoItems;
    // newTodoList.unshift(todo);

    setTodoItems([todo, ...todoItems]);
    setTodoName("");
  };
  const updateObject = (id, newName) => {
    // Create a new array with the updated object
    const updatedData = todoItems.map((item) => {
      if (item.id === id) {
        // Create a new object with the updated name
        return { ...item, name: newName };
      }
      return item;
    });

    // Update the state with the new array
    setTodoItems(updatedData);
  };
  const deleteTodoItem = (todo) => {
    const newTodoList = todoItems.filter((item) => item.id !== todo.id);
    setTodoItems(newTodoList);
  };

  return (
    <div className="todo-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <input
          style={{
            width: "200px",
            backgroundColor: "#023047",
            color: "#219ebc",
            borderRadius: "4px",
            padding: "10px 10px",
            marginRight: "10px",
          }}
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
          type="text"
          placeholder="Type here..."
        />
        <button
          style={{
            width: "100px",
            backgroundColor: "#023047",
            color: "#219ebc",
            borderRadius: "4px",
            padding: "10px 10px",
            cursor: "pointer",
          }}
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div
        style={{
          width: "500px",
          backgroundColor: "#ffb703",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "8px",
          minHeight: "300px",
        }}
      >
        {todoItems?.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            No Todo added!
          </div>
        ) : (
          todoItems.map((todoItem) => (
            <div key={todoItem.id}>
              <TodoItem
                data={todoItem}
                deleteTodo={deleteTodoItem}
                editTodoItem={updateObject}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
