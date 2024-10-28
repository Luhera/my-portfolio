import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Titillium Web", sans-serif',
  },
});

const AboutSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6, 0),
}));

const CubeContainer = styled("div")({
  perspective: "1000px",
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "40px auto",
});

const Cube = styled("div")({
  width: "150px",
  height: "150px",
  position: "relative",
  transformStyle: "preserve-3d",
  transform: "rotateX(-20deg) rotateY(-20deg)",
  animation: "rotate 8s infinite linear",
  "@keyframes rotate": {
    "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
    "100%": { transform: "rotateX(360deg) rotateY(360deg)" },
  },
});

const CubeFace = styled("div")({
  position: "absolute",
  width: "150px",
  height: "150px",
  backgroundColor: "#121212",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
  border: "2px solid",
});

const CubeFaceFront = styled(CubeFace)({
  transform: "rotateY(0deg) translateZ(75px)",
  borderColor: "red",
});

const CubeFaceBack = styled(CubeFace)({
  transform: "rotateY(180deg) translateZ(75px)",
  borderColor: "blue",
});

const CubeFaceLeft = styled(CubeFace)({
  transform: "rotateY(-90deg) translateZ(75px)",
  borderColor: "green",
});

const CubeFaceRight = styled(CubeFace)({
  transform: "rotateY(90deg) translateZ(75px)",
  borderColor: "yellow",
});

const CubeFaceTop = styled(CubeFace)({
  transform: "rotateX(90deg) translateZ(75px)",
  borderColor: "purple",
});

const CubeFaceBottom = styled(CubeFace)({
  transform: "rotateX(-90deg) translateZ(75px)",
  borderColor: "orange",
});

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  textAlign: "center",
  padding: theme.spacing(3),
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const About = () => {
  const skills = [
    "HTML",
    "NEXT.js",
    "TypeScript",
    "JavaScript",
    "React",
    "CSS",
  ];

  return (
    <ThemeProvider theme={theme}>
      <AboutSection id="about">
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            My name is Anderson, I'm 25 years old, a front-end developer with
            experience in projects using HTML, CSS, JavaScript, React, and Vue.
            I'm interested in working as a junior frontend developer.
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <WorkIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Experience
                  </Typography>
                  <Typography>2+ years</Typography>
                  <Typography>Frontend Development</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Education
                  </Typography>
                  <Typography>Senac Pernambuco Graduation</Typography>
                  <Typography>Systems Analysis and Development</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

          <Typography
            id="Videos"
            variant="h4"
            align="center"
            gutterBottom
            sx={{ mt: 4 }}
          >
            Presentation Videos
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Video in Portuguese
                </Typography>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/JDjyWKFJ6Oo"
                  title="Vídeo de Apresentação 1"
                  allowFullScreen
                ></iframe>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Video in English
                </Typography>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/2jkv-QqOI90"
                  title="Vídeo de Apresentação 2"
                  allowFullScreen
                ></iframe>
              </Paper>
            </Grid>
          </Grid>

          <Typography id="skills" variant="h4" align="center" gutterBottom>
            Skills
          </Typography>
          <CubeContainer>
            <Cube>
              <CubeFaceFront>{skills[0]}</CubeFaceFront>
              <CubeFaceBack>{skills[1]}</CubeFaceBack>
              <CubeFaceLeft>{skills[2]}</CubeFaceLeft>
              <CubeFaceRight>{skills[3]}</CubeFaceRight>
              <CubeFaceTop>{skills[4]}</CubeFaceTop>
              <CubeFaceBottom>{skills[5]}</CubeFaceBottom>
            </Cube>
          </CubeContainer>
        </Container>
      </AboutSection>
    </ThemeProvider>
  );
};

export default About;
