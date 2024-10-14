import { Grid, styled, Container, Typography } from "@mui/material";
import Avatar from "../../../../assets/Imagens/avatar.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "60%", // Reduced width for mobile
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    display: "block",
    margin: "0 auto", // Center the image
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={5} display="flex" justifyContent="center">
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Anderson Lucena
              </Typography>

              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Dev Front-End
              </Typography>

              <Grid container justifyContent="center" spacing={3} pt={3}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <ArrowDownwardIcon /> <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <ContactMailIcon /> <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
