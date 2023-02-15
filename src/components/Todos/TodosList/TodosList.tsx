import { Dispatch, SetStateAction } from "react";
import { TodoItem } from "../TodoTypes";
import TodosItem from "./TodosItem";

export interface TodoListProps {
   items: TodoItem[];
   setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
}
const TodosList = ({ items, setTodoList }: TodoListProps) => {
   return (
      <>
         {items.length > 1 && (
            <ul>
               {items?.map((el) => (
                  <TodosItem
                     key={el.id}
                     item={el}
                     items={items}
                     setTodoList={setTodoList}
                  />
               ))}
            </ul>
         )}
      </>
   );
};
export default TodosList;
