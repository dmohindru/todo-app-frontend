import { Box, Stack, styled, Button } from "@mui/material";
import SideBarItems from "./SideBarItems";
import { useGetUserTodoListQuery } from "../app-page/TodoListSlice";
import { User } from "../../dto/dto";

const SideBar: React.FC = () => {
  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetUserTodoListQuery();

  console.log("data", data);
  console.log("isSuccess", isSuccess);

  const listData = [
    { id: "id-1", titleName: "Grocery" },
    { id: "id-2", titleName: "School List" },
    { id: "id-3", titleName: "Shopping List" },
    { id: "id-4", titleName: "Office Work" },
    { id: "id-5", titleName: "Fun Todo" },
  ];

  const SideBarBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      flex: 3,
    },
    [theme.breakpoints.down("sm")]: {
      flex: 1,
    },
  }));
  return (
    <SideBarBox>
      <Box position="fixed" sx={{ mt: 5 }}>
        <Stack spacing={4}>
          {data &&
            data.todoTitleList.map((item, i) => (
              <SideBarItems key={item.id} titleName={item.titleName} />
            ))}
          <Button fullWidth href="/app/add-todo-list">
            Add
          </Button>
        </Stack>
      </Box>
    </SideBarBox>
  );
};

export default SideBar;
