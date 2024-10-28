import {
  AppBar,
  MenuItem,
  Toolbar,
  styled,
  IconButton,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import logo from "../../../public/android-chrome-192x192.png"; // Ajuste o caminho conforme necessário

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  }));

  const StyledLogo = styled("img")({
    height: "40px",
    marginLeft: "10px",
  });

  const StyledMenuItem = styled(MenuItem)(() => ({
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }));

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <AppBar
      position="absolute"
      style={{ backgroundColor: "#1a1a1a", borderRadius: "50px" }}
    >
      <StyledToolbar>
        {/* Menu à esquerda */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {!isMobile && (
            <div style={{ display: "flex" }}>
              <StyledMenuItem onClick={() => scrollToSection("projects")}>
                PROJECTS
              </StyledMenuItem>
              <StyledMenuItem onClick={() => scrollToSection("skills")}>
                SKILLS
              </StyledMenuItem>
              <StyledMenuItem onClick={() => scrollToSection("about")}>
                ABOUT ME
              </StyledMenuItem>
              <StyledMenuItem onClick={() => scrollToSection("Videos")}>
                PRESENTATION VIDEOS
              </StyledMenuItem>
            </div>
          )}
        </div>

        {/* Logo no lado direito */}
        <StyledLogo src={logo} alt="Logo" />

        {/* Ícone de menu para mobile */}
        {isMobile && (
          <IconButton edge="end" color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        )}
      </StyledToolbar>

      {/* Menu Mobile */}
      <Drawer
        anchor="right"
        open={isMobileOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          style: { backgroundColor: "#1a1a1a", color: "#fff", width: "200px" },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <StyledMenuItem
            onClick={() => {
              scrollToSection("projects");
              toggleMobileMenu();
            }}
          >
            PROJECTS
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              scrollToSection("skills");
              toggleMobileMenu();
            }}
          >
            SKILLS
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              scrollToSection("about");
              toggleMobileMenu();
            }}
          >
            ABOUT ME
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              scrollToSection("Videos");
              toggleMobileMenu();
            }}
          >
            PRESENTATION VIDEOS
          </StyledMenuItem>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
