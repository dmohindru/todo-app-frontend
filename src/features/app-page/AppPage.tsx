import { Box, Typography, ButtonGroup, styled } from "@mui/material";
import TodoButtonGroup from "./TodoButtonGroup";
import TodoList from "./TodoList";
import AddTodoActionButton from "./AddTodoActionButton";

const AppPage: React.FC = () => {
  const todoData = [
    {
      externalId: "some-uuid-1",
      todoTitle: "Todo 1",
      description: "Todo 1 desription",
      done: false,
      deleted: false,
    },
    {
      externalId: "some-uuid-2",
      todoTitle: "Todo 2",
      description: "Todo 2 desription",
      done: false,
      deleted: false,
    },
    {
      externalId: "some-uuid-3",
      todoTitle: "Todo 3",
      description: "Todo 3 desription",
      done: false,
      deleted: false,
    },
    {
      externalId: "some-uuid-4",
      todoTitle: "Todo 4",
      description: "Todo 4 desription",
      done: false,
      deleted: false,
    },
  ];
  return (
    // <Container>
    <Box sx={{ flex: 9, mx: 5 }}>
      <Box
        sx={{
          // backgroundColor: "lightgreen",
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ my: 5, textTransform: "uppercase", fontWeight: "bold" }}
        >
          Grocery
        </Typography>
        <TodoButtonGroup />
        <TodoList />
      </Box>
      <AddTodoActionButton />
    </Box>
    // </Container>
  );
};

export default AppPage;
