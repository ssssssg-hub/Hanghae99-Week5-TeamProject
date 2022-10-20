const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GETID_TODO = "GETID_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
export const idTodo = (payload) => {
  return {
    type: GETID_TODO,
    payload,
  };
};

const initialState = {
  list: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 공부 열심히하기",
      body: "심화주차까지 다 보기",
      isDone: false,
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "알고리즘 공부하기",
      body: "매주 두 문제씩 풀기",
      isDone: false,
    },
  ],
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_TODO:
      return {
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        list: state.list.map((item) =>
          // {
          //   if (item.id === action.payload) {
          //     return { ...item, isDone: !item.isDone };
          //   } else {
          //     return item;
          //   }

          //   // item.id===action.payload?{...item, isDone:!item.isDone} :item
          // }
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    case GETID_TODO:
      return {
        ...state,
        list: state.list.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default counter;
