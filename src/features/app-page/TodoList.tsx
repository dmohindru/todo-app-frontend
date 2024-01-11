import { Box } from "@mui/material";
import Todo from "./Todo";

const todoList = [
  { id: "id-1", title: "todo 1", done: false },
  { id: "id-2", title: "todo 2", done: true },
  { id: "id-3", title: "todo 3", done: false },
  { id: "id-4", title: "todo 4", done: false },
  { id: "id-5", title: "todo 5", done: false },
  { id: "id-6", title: "todo 6", done: false },
  { id: "id-7", title: "todo 7", done: true },
  { id: "id-8", title: "todo 8", done: false },
  { id: "id-9", title: "todo 9", done: false },
  { id: "id-10", title: "todo 10", done: false },
];
const TodoList: React.FC = () => {
  return (
    <Box sx={{ width: "100%", my: 5 }}>
      {todoList.map((todo, i) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} done={todo.done} />
      ))}
    </Box>
  );
};

export default TodoList;
