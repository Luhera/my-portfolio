import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  // Função para rolar até a seção correspondente
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem onClick={() => scrollToSection("about")}>Sobre</MenuItem>
        <MenuItem onClick={() => scrollToSection("skills")}>Skills</MenuItem>
        <MenuItem onClick={() => scrollToSection("projects")}>
          Projetos
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
