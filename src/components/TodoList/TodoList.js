import React, { useState, useRef } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import SearchFilter from "../SubComponents/SearchFilter";
import Calendar from "../Calendar/Calendar";
import styled ,{keyframes} from "styled-components";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filteredtasks, setFilteredtasks] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 1rem 1rem;
  font-size: 2.2rem;
`;

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  function onSearchFilterChangeed(searchText, filterBy) {
    const _filteredtasks = todos.filter((item) => {
      const upperCaseTitle = item.text.toUpperCase();
      const upperCaseDesc = item.description.toUpperCase();
      const upperCaseSearchTxt = searchText.toUpperCase();

      if (filterBy === "title") {
        return upperCaseTitle.includes(upperCaseSearchTxt);
      } else if (filterBy === "desc") {
        return upperCaseDesc.includes(upperCaseSearchTxt);
      }
      return (
        upperCaseTitle.includes(upperCaseSearchTxt) ||
        upperCaseDesc.includes(upperCaseSearchTxt)
      );
    });
    const sortedTasks =
      sortOrder === "comp"
        ? _filteredtasks.sort((a, b) => b.complete - a.complete)
        : _filteredtasks.sort((a, b) =>
            sortOrder === "asc"
              ? a.createdAt - b.createdAt
              : b.createdAt - a.createdAt
          );

    setFilteredtasks(sortedTasks);
  }

  const addTodo = (todo) => {
    if (!todo.text || todo.text.trim() === "") {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setFilteredtasks(newTodos);

    console.log(...todos);
    console.log(todo);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || newValue.text.trim() === "") {
      return;
    }

    const updatedTodos = todos.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          text: newValue.text,
          description: newValue.description,
          complete: newValue.complete,
          createdAt: Date.now(),
        };
      }
      return item;
    });

    setTodos(updatedTodos);
    setFilteredtasks(updatedTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...filteredtasks].filter((todo) => todo.id !== id);

    setFilteredtasks(removedArr);
    setTodos(removedArr);
  };
  const sortTasks = (order) => {
    if (order === "comp") {
      setFilteredtasks((prevTasks) =>
        prevTasks.sort((a, b) => {
          return b.complete - a.complete;
        })
      );
    } else {
      setFilteredtasks((prevTasks) =>
        prevTasks.sort((a, b) => {
          return order === "asc"
            ? a.createdAt - b.createdAt
            : b.createdAt - a.createdAt;
        })
      );
    }
  };

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortTasks(order);
  };

  const handleClick = (id, checked) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: checked } : todo
    );
    setTodos(updatedTodos);
    setFilteredtasks(updatedTodos);
  };
  const completedTasksCount = todos.reduce((count, todo) => {
    return todo.complete ? count + 1 : count;
  }, 0);

  const notCompletedTasksCount = todos.reduce((count, todo) => {
    return !todo.complete ? count + 1 : count;
  }, 0);
  const totalTasksCount = todos.length;

  return (
    <>
      <div className="todo-app">
        <div className="todo-comp">
        <Title>
        What's the Plan for Today?   <Rotate> 📝  </Rotate>  </Title>
          <TodoForm onSubmit={addTodo} />
          <SearchFilter onChange={onSearchFilterChangeed} />
          <div className="sorting-counts">
            <div className="sorting">
              <label>Sort by:</label>
              <select id="sortOrder" value={sortOrder} onChange={handleSort}>
                <option value="desc">Newest first</option>
                <option value="asc">Oldest first</option>
                <option value="comp">Complation status</option>
              </select>
            </div>
            <div className="counts">
              Number Of Tasks: {totalTasksCount} <br></br>Completed Tasks :{" "}
              {completedTasksCount} <br></br>Uncompleted tasks :{" "}
              {notCompletedTasksCount}{" "}
            </div>
          </div>
          <Todo
            filteredtasks={filteredtasks}
            todos={todos}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            handleClick={handleClick}
          />
        </div>
        <div className="calendar">
          <Calendar todos={todos} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
