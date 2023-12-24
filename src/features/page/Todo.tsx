import { Box, Switch, IconButton, Typography, Paper } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
interface TodoProps {
  id: string;
  title: string;
  done: boolean;
}
const Todo: React.FC<TodoProps> = ({ id, title, done }) => {
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
          px: 2,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Switch checked={done} />
          <IconButton>
            <ClearIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Todo;
