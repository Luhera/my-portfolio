import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import styled from "@mui/system/styled";

const AboutSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6, 0),
}));

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Git",
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "JAVA",
    "Material UI",
  ];

  return (
    <AboutSection id="about">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <WorkIcon fontSize="large" />
                <Typography variant="h6">Experience</Typography>
                <Typography>2+ years</Typography>
                <Typography>Frontend Development</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <SchoolIcon fontSize="large" />
                <Typography variant="h6">Education</Typography>
                <Typography>Senac Pernambuco Graduation</Typography>
                <Typography>Systems Analysis and Development</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body1" align="center" paragraph>
          <Typography padding={2}>
            My name is Anderson, I'm 25 years old, front-end developer with
            experience in projects using HTML, CSS, JavaScript, React and Vue,
            I'm interested in working as a frontend developer junior.
          </Typography>
          <Box
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Presentation Videos
            </Typography>
            <Grid container spacing={4} justifyContent="center">
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
                    frameBorder="0"
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
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Typography>
        <Typography id="skills" variant="h4" align="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Card>
                <CardContent>
                  <Typography>{skill}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
