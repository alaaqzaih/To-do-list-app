import React, { useState, useRef } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
//  import SearchFilter from './SearchFilter'

// const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
//   const [filteredtasks, setFilteredtasks] = useState([]);

//   const [edit, setEdit] = useState({
//     id: null,
//     value: '',
//     description: ''
//   });

//   const submitUpdate = value => {
//     updateTodo(edit.id, value);
//     setEdit({
//       id: null,
//       value: ''
//     });
//   };

//   function onSearchFilterChangeed(searchText, filterBy) {
//     const _filteredtasks = todos.filter((item) => {
//         const upperCaseTitle = item.title.toUpperCase();
//         const upperCaseDesc = item.description.toUpperCase();
//         const upperCaseSearchTxt = searchText.toUpperCase();

//         if (filterBy === "title") {
//             return upperCaseTitle.includes(upperCaseSearchTxt)
//         } else if (filterBy === "desc") {
//             return upperCaseDesc.includes(upperCaseSearchTxt)
//         }
//         return upperCaseTitle.includes(upperCaseSearchTxt) || upperCaseDesc.includes(upperCaseSearchTxt)
//     })
//     setFilteredtasks(_filteredtasks)
// }

//   if (edit.id) {
//     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
//   }
//   return(
//     <div>
//     <SearchFilter onChange={onSearchFilterChangeed} />

//     {todos.map((todo, index) => (

//       <div
//         className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
//         key={index}
//       >
//         <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//           <h3>{todo.text}</h3>
//           <p>{todo.description}</p>
//         </div>
//         <div className='icons'>
//           <RiCloseCircleLine
//             onClick={() => removeTodo(todo.id)}
//             className='delete-icon'
//           />
//           <TiEdit
//             onClick={() =>setEdit({ id: todo.id, value: todo.text, description: todo.description })}
//             className='edit-icon'
//           />
//         </div>
//       </div>
//   ))}
//   </div>

// )
// };

// export default Todo;
const Todo = ({
  handleClick,
  filteredtasks,
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const checkbox = useRef();

  const [edit, setEdit] = useState({
    id: null,
    value: "",
    description: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
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
                onChange={(event) => handleClick(task.id, event.target.checked)}
              /></div>
            
              <TiEdit
                onClick={() =>
                  setEdit({
                    id: task.id,
                    value: task.text,
                    description: task.description,
                  })
                }
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
        </div>
      ))}
    </div>
  );
};
export default Todo;
