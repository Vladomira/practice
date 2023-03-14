import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { initTodoState } from "./Todos";
import TodosItem from "./TodosList/TodosItem";
import { TodoItem } from "./TodoTypes";

const TodoPage = () => {
   const [todo, setTodo] = useState<TodoItem>(initTodoState);
   const { id } = useParams();
   const navigate = useNavigate();

   const goBack = () => navigate(-1);
   const goHome = () => navigate("/", { replace: true });

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then((res) => res.json())
         .then((data) => setTodo(data));
   }, [id]);

   return (
      <>
         <button type="button" onClick={goBack}>
            Go back
         </button>
         <Link to={"/"}>Go home</Link>
         <h2>Todo info {id}</h2>
         <TodosItem item={todo} />
      </>
   );
};
export default TodoPage;
