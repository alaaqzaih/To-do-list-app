import React, { useState, useRef } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import DialogComp from "../SubComponents/Dilog";
const Todo = ({
  handleClick,
  filteredtasks,
  todos,
  removeTodo,
  updateTodo,
}) => {
  const checkbox = useRef();
  const [detailbool, setdetailbool] = useState(false);
  const [id, setid] = useState();
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const submitUpdate = (value) => {
    updateTodo(value.id, value);
  };
  function showDetail(id, text, description) {
    setdetailbool(true);
    setid(id);
    setText(text);
    setDescription(description);
  }

  function funsetdetailbool() {
    setdetailbool(false);
  }

  return (
    <div>
      {filteredtasks.map((task, index) => (
        <div className="todoo">
          <div className="todo-row" key={index}>
            <h3>{task.text}</h3>
            <div className="icons">
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="filter"
                  ref={checkbox}
                  checked={task.complete}
                  style={{ transform: "scale(1.2)" }}
                  onChange={(event) =>
                    handleClick(task.id, event.target.checked)
                  }
                />
              </div>

              <TiEdit
                onClick={() => showDetail(task.id, task.text, task.description)}
                className="edit-icon"
              />
              <RiCloseCircleLine
                onClick={() => removeTodo(task.id)}
                className="delete-icon"
              />
            </div>
          </div>
          <div className="description">
            <p>{task.description}</p>
          </div>
          {detailbool ? (
            <DialogComp
              text={text}
              description={description}
              id={id}
              funsetdetailbool={funsetdetailbool}
              submitUpdate={submitUpdate}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
export default Todo;
