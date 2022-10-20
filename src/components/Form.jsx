import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/modules/counter";
import shortid from "shortid";

const Form = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const dispatch = useDispatch();

  const id = shortid.generate();

  const change = (e) => {
    const { name, value } = e.target;
    console.log();
    setTodo({ ...todo, [name]: value }); //(위에서 만든 name 변수로 쓰려면 [] 인에써야됨)
  };

  const submit = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.body) return;
    setTodo({
      id,
      title: "",
      body: "",
      isDone: false,
    });
    dispatch(addTodo({ ...todo, id }));
  };
  return (
    <div>
      <form onSubmit={submit}>
        제목
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={change}
        ></input>
        내용
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={change}
        ></input>
        <button>확인</button>
      </form>
    </div>
  );
};

export default Form;
