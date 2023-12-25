import { Button, ButtonGroup } from "@mui/material";
import { useState, useEffect } from "react";

type filterValue = "ALL" | "DONE" | "PENDING";
// TODO redo this component with <ToggleButtonGroup> and <ToggleButton>
const TodoButtonGroup: React.FC = () => {
  const [filter, setSelectedFilter] = useState<filterValue>("ALL");
  const handleButtonClick = (value: filterValue) => {
    setSelectedFilter(value);
  };

  useEffect(() => {
    console.log("filterValue:", filter);
  }, [filter]);

  return (
    <>
      <ButtonGroup fullWidth sx={{ mx: 5 }}>
        <Button
          variant={filter === "ALL" ? "contained" : "outlined"}
          onClick={() => handleButtonClick("ALL")}
          fullWidth
          style={{ flex: 1 }}
        >
          ALL
        </Button>
        <Button
          variant={filter === "DONE" ? "contained" : "outlined"}
          onClick={() => handleButtonClick("DONE")}
          fullWidth
          style={{ flex: 1 }}
        >
          DONE
        </Button>
        <Button
          variant={filter === "PENDING" ? "contained" : "outlined"}
          onClick={() => handleButtonClick("PENDING")}
          fullWidth
          style={{ flex: 1 }}
        >
          PENDING
        </Button>
      </ButtonGroup>
    </>
  );
};

export default TodoButtonGroup;
