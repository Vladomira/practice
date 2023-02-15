import { useState } from "react";
import { makeTodosRequest } from "../../../api/todos/todos-request";
import { TodoItem } from "../TodoTypes";
import { TodoListProps } from "./TodosList";

type TodosItemProps = TodoListProps & {
   item: TodoItem;
};
const TodosItem = ({ item, items, setTodoList }: TodosItemProps) => {
   const { id, completed, title, user } = item;
   const [isCompleted, setisCompleted] = useState(completed);

   const handleCompleted = async () => {
      const changeCompleted = `mutation ChangeStatus {
        updateTodo(id: "${id}", input: {completed: ${isCompleted}} ){
            completed
        }
    }`;
      const { data } = await makeTodosRequest(changeCompleted);
      if (data.updateTodo.completed) {
         setisCompleted(false);
      } else if (!data.updateTodo.completed) {
         setisCompleted(true);
      }
   };
   const onDelete = async () => {
      const deleteById = `mutation deleteTodoById {
        deleteTodo(id: "${id}" )
    }`;
      await makeTodosRequest(deleteById);
      setTodoList((prev) => {
         const newItems = prev.filter((el) => el.id !== id);
         return newItems;
      });
   };
   return (
      <>
         <li
            style={{
               display: "flex",
               alignItems: "center",
            }}
         >
            <div
               style={{
                  background: `${isCompleted ? "blue" : "red"}`,
                  width: "20px",
                  height: "20px",
                  margin: "5px 5px 5px 0px",
               }}
               onClick={handleCompleted}
            />
            ID: {id}
            &nbsp;
            {title}
            {user?.name && (
               <p style={{ color: "blue", margin: "5px" }}>{user.name}</p>
            )}
            <button type="button" onClick={onDelete}>
               Delete
            </button>
         </li>
      </>
   );
};
export default TodosItem;
