export interface TodoItem {
   id: number | string;
   title: string;
   completed: boolean;
   user: { name: string };
}
