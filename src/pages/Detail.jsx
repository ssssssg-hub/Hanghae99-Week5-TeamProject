import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { idTodo } from "../redux/modules/counter.js";

const Detail = () => {
  const todos = useSelector((state) => state.counter.list);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(idTodo(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>ID : {todos.id}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전
      </button>
      <h2>{todos.title}</h2>
      <h3>{todos.body}</h3>
    </div>
  );
};

export default Detail;
