import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  // Função para rolar até a seção correspondente
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem onClick={() => scrollToSection("about")}>About me</MenuItem>
        <MenuItem onClick={() => scrollToSection("skills")}>Skills</MenuItem>
        <MenuItem onClick={() => scrollToSection("projects")}>
          Projects
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
