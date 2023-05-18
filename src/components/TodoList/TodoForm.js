import React ,{useState} from "react";
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
function TodoForm(props) {
  const Button = styled.button`
  background: ${props => props.$primary ? "palevioletred" : "white"};
  color: ${props => props.$primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin-top: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  const [deadline, setDeadline] = useState(new Date());

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      text: "",
      description:"",
    },
  });
  const onSubmit = (data) => {
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: data.text,
      description: data.description,
      createdAt: new Date(),
      complete: false,
      deadline: deadline,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <input
          type="text"
          id="text"
          placeholder="Add a todo"
          {...register("text", { required: true })}
          className={`${errors.text ? "todo-input" : "todo-input"}`}
        />
        {errors.text && (
          <div className="invalid-feedback">This field is required</div>
        )}
        <input
          type="text"
          id="description"
          placeholder="Add a description"
          {...register("description", { required: true })}
          className={`${errors.description ? "todo-input" : "todo-input"}`}
        />
        {errors.description && (
          <div className="invalid-feedback">This field is required</div>
        )}
        <label htmlFor="">Deadline :</label>
        <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
      <Button >{props.edit ? "Update" : "Add todo"}</Button>
    </form>
  );
}

export default TodoForm;
