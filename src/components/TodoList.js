import React, { useState , useRef } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import SearchFilter from './SearchFilter'

function TodoList() {
  const [message, setMessage] = useState('');
  const checkbox = useRef();
  const [todos, setTodos] = useState([]);
  const [filteredtasks, setFilteredtasks] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // default sort order is descending

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
      return upperCaseTitle.includes(upperCaseSearchTxt) || upperCaseDesc.includes(upperCaseSearchTxt);
    });
  
    // sort the filtered array based on the current sort order
    const sortedTasks = sortOrder === 'comp'
      ? _filteredtasks.sort((a, b) => b.complete - a.complete)
      : _filteredtasks.sort((a, b) => sortOrder === 'asc' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt);
  
    setFilteredtasks(sortedTasks);
  }
  

  const addTodo = todo => {
    if (!todo.text || todo.text.trim() === '') {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setFilteredtasks(newTodos)

    console.log(...todos);
    console.log(todo);
  };

  const updateTodo = (todoId, newValue) => {
    
    if (!newValue.text || newValue.text.trim() === '') {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    setFilteredtasks(prev => prev.map(item => (item.id === todoId ? newValue : item)));

  };

  const removeTodo = id => {
    const removedArr = [...filteredtasks].filter(todo => todo.id !== id);

    setFilteredtasks(removedArr);
    setTodos(removedArr);

  };
  const sortTasks = (order) => {
    if (order === 'comp') {
      setFilteredtasks(prevTasks => prevTasks.sort((a, b) => {
        return  b.complete - a.complete ;
      }));
    } else {
      setFilteredtasks(prevTasks => prevTasks.sort((a, b) => {
        return order === 'asc' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt;
      }));
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
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <SearchFilter onChange={onSearchFilterChangeed} />
      <div className='sorting-counts'>
        <div className="sorting">
        <label>Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSort}>
          <option value="desc">Newest first</option>
          <option value="asc">Oldest first</option>
          <option value="comp">Complation status</option>
        </select>
        </div>
        <div className='counts'>Number Of Tasks: {totalTasksCount} <br></br>Completed Tasks : {completedTasksCount} <br></br>Uncompleted tasks : {notCompletedTasksCount} </div>
    

      </div>
    
      <Todo
       filteredtasks = {filteredtasks}
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        handleClick={handleClick}
      />
    </>
  );
}

export default TodoList;
