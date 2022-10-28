import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { DesktopMac, DeveloperMode, DesignServices } from "@mui/icons-material";
import SectionTitle from "../components/SectionTitle";
import ServiceSectionItem from "../components/ServiceSectionItem";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  servicesContainerCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "25px",
    padding: "50px 0",
  },
});

const Services = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-in-sine" });
  }, []);
  return (
    <div>
      <SectionTitle heading="Services" subHeading="what I will do for you" />
      <Grid container className={classes.servicesContainerCard}>
        <Grid item xs={8} md={4} pb={5} data-aos="fade-left">
          <ServiceSectionItem
            title="UI/UX Design"
            icon={<DesignServices />}
            para="I develop web-apps using
          HTML,Css and Javascript (MERN stack)"
          />
        </Grid>
        <Grid item xs={8} md={4} pb={1} data-aos="fade-right">
          <ServiceSectionItem
            title="Front-end React"
            icon={<DesktopMac />}
            para="I develop web-apps using
          HTML,Css and Javascript (MERN stack)"
          />
        </Grid>
        <Grid item xs={8} md={4} pb={1} data-aos="fade-up">
          <ServiceSectionItem
            title="Web Development"
            icon={<DeveloperMode />}
            para="I develop web-apps using
          HTML,Css and Javascript (MERN stack)"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
