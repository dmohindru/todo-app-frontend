import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AppCard from "./AppCard";
import alwaysConvenient from "../images/alwaysConvenient.jpg";
import beMoreEfficient from "../images/beMoreEfficient.jpg";
import getOrganized from "../images/getOrganized.jpg";
import rememberEverything from "../images/rememberEverything.png";
import secured from "../images/secured.png";
import stayUptoDate from "../images/stayUptoDate.png";

const LandingPage: React.FC = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flex: 10 }}>
      {/* Desktop Layout */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Welcome to Todo App
        </Typography>
        <Box
          gridTemplateColumns="repeat(12, 1fr)"
          gap="20px"
          sx={{
            my: 5,
            display: {
              md: "grid",
              sm: "none",
            },
          }}
        >
          {/* First column */}
          <Box
            gridRow="span 3"
            gridColumn="span 4"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <AppCard imgUrl={alwaysConvenient} text="Always Convenient" />
          </Box>
          {/* Second column */}
          <Box
            gridRow="span 3"
            gridColumn="span 4"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <AppCard imgUrl={getOrganized} text="Get Organized" />
            <AppCard imgUrl={beMoreEfficient} text="Be More Efficient" />
          </Box>

          {/* Third column */}
          <Box
            gridRow="span 3"
            gridColumn="span 4"
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            <AppCard imgUrl={stayUptoDate} text="Stay Upto Date" />
            <AppCard imgUrl={rememberEverything} text="Remember Everything" />
            <AppCard imgUrl={secured} text="Secured" />
          </Box>
        </Box>
        {/* Mobile Layout */}
        <Box
          sx={{
            display: {
              sm: "flex",
              md: "none",
            },
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <AppCard imgUrl={alwaysConvenient} text="Always Convenient" />
          <AppCard imgUrl={getOrganized} text="Get Organized" />
          <AppCard imgUrl={beMoreEfficient} text="Be More Efficient" />
          <AppCard imgUrl={stayUptoDate} text="Stay Upto Date" />
          <AppCard imgUrl={rememberEverything} text="Remember Everything" />
          <AppCard imgUrl={secured} text="Secured" />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
