import { useEffect, useState } from "react";
import { makeTodosRequest } from "../../api/todos/todos-request";
import { TodosForms } from "./Todos-Forms";
import TodosList from "./TodosList/TodosList";
import { TodoItem } from "./TodoTypes";

export const initTodoState = {
   id: 0,
   title: "",
   completed: false,
   user: { name: "" },
};

export const Todos = () => {
   const [todoList, setTodoList] = useState<TodoItem[]>([initTodoState]);

   const getTodos = async () => {
      const { data } = await makeTodosRequest(`query Todos {
               todos{
                   data{
                   id
                   title
                   completed
                   user{
                       name
                   }
               }}
           }`);
      setTodoList(data.todos.data.reverse());
   };

   useEffect(() => {
      getTodos();
   }, []);
   return (
      <>
         <TodosForms setTodoList={setTodoList} />
         <button onClick={getTodos}>Get tasks</button>
         <TodosList items={todoList} setTodoList={setTodoList} />
      </>
   );
};
