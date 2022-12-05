import { useContext } from "react";

//Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box, IconButton, useTheme } from "@mui/material";
import { ThemeContext } from "../../utils/theme";

const Header = () => {
  const theme = useTheme();
  console.log(theme, "theme");
  const colorMode = useContext(ThemeContext);

  return (
    <Box display="flex" style={{ background: "#001E3C" }}>
      <Box>
        <IconButton onClick={colorMode.toggleTheme}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon sx={{ color: "#fff" }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
