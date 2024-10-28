import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "../../../../assets/Imagens/avatar.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Styled components
const StyledHero = styled("div")({
  backgroundColor: "#121212",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#e0e0e0",
});

const StyledImg = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "3px solid #FA12E3",
  marginBottom: "20px",
});

const StyledIcon = styled("a")({
  color: "#FA12E3",
  fontSize: "2rem",
  margin: "0 10px",
  textDecoration: "none",
  "&:hover": {
    color: "#7312FA",
  },
});

const StyledButton = styled("a")({
  display: "inline-block",
  background: "linear-gradient(90deg, #FA12E3, #7312FA, #415CA7)",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  marginTop: "20px",
  "&:hover": {
    background: "linear-gradient(-90deg, #FA12E3, #7312FA, #415CA7)",
  },
});

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="sm">
        <StyledImg src={Avatar} alt="Avatar" />
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FA12E3" }}>
          {`{ Olá! Sou `}
          <span style={{ color: "#7312FA" }}>Anderson Lucena</span>
          {` }`}
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          style={{ color: "#b0b0b0", marginBottom: "20px" }}
        >
          Desenvolvedor Front-End.
        </Typography>

        <div>
          <StyledIcon
            href="https://wa.me/5581993905410"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </StyledIcon>
          <StyledIcon
            href="mailto:alucena933"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </StyledIcon>
          <StyledIcon
            href="https://github.com/luhera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </StyledIcon>
          <StyledIcon
            href="https://linkedin.com/in/luhera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </StyledIcon>
        </div>

        <StyledButton href="/Curriculo.pdf" download>
          CV
        </StyledButton>
      </Container>
    </StyledHero>
  );
};

export default Hero;
