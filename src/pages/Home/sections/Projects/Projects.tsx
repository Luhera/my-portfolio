import { Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsSection = styled("div")(({ theme }) => ({
  backgroundColor: "#121212",
  padding: theme.spacing(6, 0),
}));

const CustomCard = styled("div")({
  backgroundColor: "#1e1e1e",
  color: "#e0e0e0",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
});

const CustomButton = styled(Button)({
  background: "linear-gradient(90deg, #FA12E3, #7312FA, #415CA7)",
  color: "#fff",
  "&:hover": {
    background: "linear-gradient(-90deg, #FA12E3, #7312FA, #415CA7)",
  },
  margin: "10px",
});

const Tag = styled("span")({
  display: "inline-block",
  backgroundColor: "#333",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  margin: "4px 4px 0 0",
});

const ProjectsSectionComponent = () => {
  const projects = [
    {
      title: "The Blog",
      description:
        "The blog is a project carried out for a technical challenge, with the proposal to create a responsive page, using the technologies mentioned.",
      technologies: ["Next.js", "Typescript", "JavaScript"],
      projectLink: "https://desafio-front-end-six.vercel.app/",
      codeLink: "https://github.com/Luhera/Desafio-FrontEnd?tab=readme-ov-file",
    },
    {
      title: "HEFESTO",
      description:
        "Hefesto is an IoT application that aims to control ergonomics in the workplace through measurement, analysis and provision of a dashboard, in addition to exporting data in CSV format in an iterative and dynamic way. It was developed together with Jõa Araujo, Vinicius Sartre, Anderson Lucena",
      technologies: ["Java,", "Spring Boot", "MySQL", " Vue.js", "Docker"],
      projectLink: "https://github.com/joaomn/Nascar",
      codeLink: "https://github.com/joaomn/Mustang",
    },
    {
      title: "SEGPORT",
      description:
        "Mobile activity (PI project), we were given a challenge to carry out a port security project for the Port of Suape with the aim of ensuring facilitated communication and emergency alert, certifying the safety of everyone involved in the port complex",
      technologies: ["NodeJS", "React Native", "MongoDB"],
      projectLink: "https://segporto.netlify.app/",
      codeLink: "https://github.com/ViniciusSartre/SEGPORT",
    },
    {
      title: "NONAA GASTRO",
      description:
        "Mobile activity/ adapting a template and placing my solution proposal, Project carried out to demonstrate my skills in creating a mobile template",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://luhera.netlify.app/",
      codeLink: "https://github.com/Luhera/CARDAPIO",
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
          Projects
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <CustomCard>
                <Typography
                  variant="h5"
                  style={{ color: "#FA12E3", fontWeight: "bold" }}
                  gutterBottom
                >
                  {project.title}
                </Typography>
                <div style={{ marginBottom: "10px" }}>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <Typography variant="body2" style={{ color: "#b0b0b0" }}>
                  {project.description}
                </Typography>
                <CustomButton
                  size="small"
                  href={project.projectLink}
                  rel="noopener noreferrer"
                >
                  View Projects
                </CustomButton>
                <CustomButton
                  size="small"
                  href={project.codeLink}
                  rel="noopener noreferrer"
                >
                  Github
                </CustomButton>
              </CustomCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsSectionComponent;
