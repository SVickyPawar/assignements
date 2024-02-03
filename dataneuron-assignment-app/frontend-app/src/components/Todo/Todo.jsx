import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = ({ window }) => {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState({ count: 0, window });

  const handleAdd = () => {
    
    console.log('name',name);
    setTodo([...todo,{name:name,id:1,isCompleted:false}])
  };



   const handleUpdate = (count) => {

      };



  return (
    <div className="todo-container">
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter todo here...!"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div><h4>Count: {count ? count?.count : 0}</h4></div>
      <div className="todo-table-container">
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Todo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo?.length !== 0 &&
              todo?.map((el, i) => (
                <tr key={el._id}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.isCompleted ? "Done" : "Not Done"}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleUpdate({ ...el, isCompleted: !el?.isCompleted })
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;