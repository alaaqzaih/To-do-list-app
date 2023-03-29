import React from "react";
import { useForm } from "react-hook-form";

function TodoForm(props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      text: props.edit ? props.edit.value : "",
      description: props.edit ? props.edit.description : "",
    },
  });
  const onSubmit = (data) => {
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: data.text,
      description: data.description,
      createdAt: new Date(),
      complete: false,
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
      <button className="todo-button">{props.edit ? "Update" : "Add todo"}</button>
    </form>
  );
}

export default TodoForm;
