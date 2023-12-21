import { Box, Stack, styled } from "@mui/material";
import SideBarItems from "./SideBarItems";

const SideBar: React.FC = () => {
  const data = [
    { titleName: "Grocery" },
    { titleName: "School List" },
    { titleName: "Shopping List" },
    { titleName: "Office Work" },
    { titleName: "Fun Todo" },
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
            <SideBarItems titleName={item.titleName} />
          ))}
        </Stack>
      </Box>
    </SideBarBox>
  );
};

export default SideBar;
