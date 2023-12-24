import { Tooltip, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTodoActionButton: React.FC = () => {
  return (
    <>
      <Tooltip
        title="Add a TODO"
        sx={{ poistion: "fixed", bottom: 20, left: "calc(50%)" }}
      >
        <Fab>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default AddTodoActionButton;
