import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements, education } from "../components/ExperienceData";
import { Link } from "react-router-dom";
import { School, Work } from "@mui/icons-material";
import ProgressBar from "../components/ProgressBar";
import { makeStyles } from "@mui/styles";
import LinearProgressBar from "../components/LinearProgressBar";
import { Box, Grid, Typography, Fab } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import {motion} from 'framer-motion'
import bootstrapPng from "../images/bootstrap.png";
import nodejsPng from "../images/nodejs.png";
import htmlPng from "../images/html.png";
import cssPng from "../images/css.png";
import reactPng from "../images/react.png";
import jqueryPng from "../images/jquery.png";
import figmaPng from "../images/Figma.png";
import adobePng from "../images/adobe.png";
import photoshopPng from "../images/photoshop.png";
const useStyle = makeStyles({
  orange: {
    color: ` #FF5733 !important`,
  },
  skyBlue: {
    color: "#61DBFB !important",
  },
  blue: {
    color: "#264de4 !important",
  },
  darkBlue: {
    color: "#0769ad !important",
  },
  purple: {
    color: "#563d7c !important",
  },
  green: {
    color: "#68A063 !important",
  },
  darkGreen: {
    color: "#3FA037 !important",
  },
});

const Education = () => {
  const classes = useStyle();
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-in-sine" });
  }, []);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Grid>
        <SectionTitle heading="Resume" subHeading={"Educational Background"} />
        <Grid container>
          <Grid item sm={12} md={6}>
            <Grid item md={12}>
              <TimelineTitle title="Education" icon={<School />} />
            </Grid>
            <Grid item md={12} marginLeft="15px">
              <VerticalTimeline lineColor="black" layout="1-column-left">
                {education.map((element) => {
                  return (
                    <VerticalTimelineElement
                      key={element.id}
                      contentStyle={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid #ffff00" }}
                      date={element.date}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {element.Location}
                      </h4>
                      <p>{element.description}</p>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid item md={12}>
              <TimelineTitle title="Work Experiences" icon={<Work />} />
            </Grid>
            <Grid item md={12} marginLeft="15px">
              <VerticalTimeline lineColor="black" layout="1-column-left">
                {timelineElements.map((element) => {
                  return (
                    <VerticalTimelineElement
                      key={element.id}
                      contentStyle={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ffff00" }}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>

                      <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                      </p>

                      <Link to={element.type}>
                        <Fab
                          variant="extended"
                          className="vertical-timeline-element-btn"
                        >
                          {element.buttonText}
                        </Fab>
                      </Link>

                      <p>{element.date}</p>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sm={12}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <ProgressBar
              value={70}
              style={{ root: classes.orange }}
              img={htmlPng}
            />
            <ProgressBar
              value={80}
              img={cssPng}
              style={{ root: classes.blue }}
            />
            <ProgressBar
              value={50}
              img={bootstrapPng}
              style={{ root: classes.purple }}
            />
            <ProgressBar
              value={70}
              img={jqueryPng}
              style={{ root: classes.darkBlue }}
            />
            <ProgressBar
              value={60}
              img={reactPng}
              style={{ root: classes.skyBlue }}
            />
            <ProgressBar
              value={40}
              img={nodejsPng}
              style={{ root: classes.green }}
            />
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <LinearProgressBar value={70} title="Photoshop" src={photoshopPng} />
          <LinearProgressBar value={50} title="Adobe XD" src={adobePng} />
          <LinearProgressBar value={80} title="Figma" src={figmaPng} />
        </Grid>
      </Grid>
    </motion.div>
  );
};
const TimelineTitle = ({ title, icon }) => {
  return (
    <Box display="flex" p={3}>
      <Box className="timeline-title-icon">{icon}</Box>
      <Box>
        <Typography className="timeline-title">{title}</Typography>
      </Box>
    </Box>
  );
};
export default Education;
