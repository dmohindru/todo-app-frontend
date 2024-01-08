import { Box, Typography } from "@mui/material";
const AppDashBoard: React.FC = () => {
  return (
    <Box sx={{ flex: 9, mx: 5 }}>
      <Box display="flex" justifyContent="center" sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight="bold">
          This is app dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default AppDashBoard;
