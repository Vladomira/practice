import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { makeTodosRequest } from "../../api/todos/todos-request";
import { TodoItem } from "./TodoTypes";

interface TodosFormsProps {
   setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
}

export const TodosForms = ({ setTodoList }: TodosFormsProps) => {
   const [addTodoValue, setAddTodoValue] = useState<string>("");
   const [searchValue, setSearchValue] = useState<string>("");

   const createTodo = async (event: SyntheticEvent) => {
      event.preventDefault();
      if (addTodoValue.length > 0) {
         const newTodo = `mutation createTodo{
              createTodo(input: {title: "${addTodoValue}", completed: false}){
                  title
                  completed
                  id
               
              }            
            }`;
         const { data } = await makeTodosRequest(newTodo);
         setTodoList((prev): TodoItem[] =>
            [...prev, data.createTodo].reverse()
         );
      }
   };

   const findTodo = async (event: SyntheticEvent) => {
      event.preventDefault();
      if (searchValue.length > 0) {
         const searchQuery = `query searchQuery{
            todos(options:{search: {q: "${searchValue}"}, sort:{field:"id", order: DESC}}){
                data{
                    id
                    title
                    completed
                    user {name}
                }
            }
           }`;
         const { data } = await makeTodosRequest(searchQuery);
         setTodoList([...data.todos.data]);
      }
   };
   return (
      <>
         <div>
            <h3>Add task</h3>
            <form name="addtask" onSubmit={createTodo}>
               <div>
                  <input
                     type="text"
                     name="taskname"
                     value={addTodoValue}
                     onChange={({ target: { value } }) =>
                        setAddTodoValue(value)
                     }
                  />
                  <button>Add</button>
               </div>
            </form>
         </div>
         <div>
            <h3>Find task</h3>
            <form name="findtask" onSubmit={findTodo}>
               <div>
                  <input
                     type="text"
                     name="searchname"
                     value={searchValue}
                     onChange={({ target: { value } }) => setSearchValue(value)}
                  />
                  <button>Seacrh</button>
               </div>
            </form>
         </div>
      </>
   );
};
