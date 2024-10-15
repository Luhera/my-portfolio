import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import styled from "@mui/system/styled";
import Projeto01 from "../../../../assets/Imagens/Projeto01.png";
import Projeto02 from "../../../../assets/Imagens/Projeto02.png";

// Mantendo o StyledImg apenas para usar na imagem do projeto
const StyledImg = styled("img")({
  width: "100%", // Ajusta a imagem ao tamanho do quadrado
  height: "auto", // Mantém a proporção da imagem
});

// Adicionando a cor de fundo igual ao Hero
const ProjectsSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Cor igual ao Hero
  padding: theme.spacing(6, 0),
}));

const ProjectsSectionComponent = () => {
  const projects = [
    {
      title: "Desafio- Frot-End",
      date: "Jul 2024 - Jul 2024",
      description:
        "The blog, é um projeto realizado para mostrar minhas habilidades em next.js, CSS, HTML e Javascript.",
      technologies: "Next.js,Tailwind CSS,Typescript,JavaScript,HTML,Vercel",
      image: Projeto01, // Usando a imagem importada
      projectLink: "https://desafio-front-end-six.vercel.app/", // Link para o projeto online
      codeLink: "https://github.com/Luhera/Desafio-FrontEnd?tab=readme-ov-file", // Link para o código no GitHub
    },
    {
      title: "Análise de Acidentes de Trânsito em Belo Horizonte",
      date: "Jan 2024 - Mar 2024",
      description:
        "Outro exemplo de projeto com diferentes tecnologias, Data Science, Faculdade Senac PE ",
      technologies: "Python,Dash,Plotly,Pandas,Jupyter Notebook",
      image: Projeto02, // Outra foto ou caminho para a imagem
      projectLink: "", // Link para o segundo projeto online
      codeLink: "https://github.com/Luhera/DataScience", // Link para o código no GitHub
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          color="primary.contrastText"
        >
          Projetos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                {/* Usando StyledImg para renderizar a imagem dentro do quadrado */}
                <StyledImg src={project.image} alt={project.title} />
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    color="primary.contrastText"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                  >
                    {project.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    color="primary.contrastText"
                  >
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Technologies: {project.technologies}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* Botões com links para o projeto online e o código */}
                  <Button
                    size="small"
                    color="primary"
                    href={project.projectLink}
                    target="_blank"
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href={project.codeLink}
                    target="_blank"
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsSectionComponent;
