import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/counter";
import { Link } from "react-router-dom";

const List = () => {
  const todos = useSelector((state) => state.counter.list);
  const dispatch = useDispatch();
  console.log(todos);
  const deleteButton = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleButton = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <div>
      <h2>working</h2>
      <div>
        {todos.map((x) => {
          if (!x.isDone) {
            return (
              <div key={x.id}>
                <link to={`/${x.id}`} key={x.id}>
                  <div>상세보기</div>
                </link>
                <div>
                  <h2>{x.title}</h2>
                  <h3>{x.body}</h3>
                  <button onClick={() => deleteButton(x.id)}>삭제</button>
                  <button onClick={() => toggleButton(x.id)}>완료</button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done</h2>
      <div>
        {todos.map((x) => {
          if (x.isDone) {
            return (
              <div key={x.id}>
                <link to={`/${x.id}`} key={x.id}>
                  <div>상세보기</div>
                </link>
                <div>
                  <h2>{x.title}</h2>
                  <h3>{x.body}</h3>
                  <button onClick={() => deleteButton(x.id)}>삭제</button>
                  <button onClick={() => toggleButton(x.id)}>취소</button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;
