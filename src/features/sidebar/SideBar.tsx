import { Box, Stack, styled, Button } from "@mui/material";
import SideBarItems from "./SideBarItems";

const SideBar: React.FC = () => {
  const data = [
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
    <SideBarBox flex={3}>
      <Box position="fixed" sx={{ mt: 5 }}>
        <Stack spacing={4}>
          {data.map((item, i) => (
            <SideBarItems key={item.titleName} titleName={item.titleName} />
          ))}
          <Button fullWidth>Add</Button>
        </Stack>
      </Box>
    </SideBarBox>
  );
};

export default SideBar;
