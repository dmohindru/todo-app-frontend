import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const LandingPage: React.FC = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "lightgreen", flex: 10 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Welcome to Todo App
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
