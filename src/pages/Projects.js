import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion'
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import img1 from "../images/project-1.png";
import img2 from "../images/project-2.png";
import img3 from "../images/project-3.png";
import img4 from "../images/project-4.png";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <motion.div style={{marginBottom:'63px'}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} {...settings}>
        
        <ProjectCard
          img={img2}
          title="Happy Bakery "
          subheader="Ecommerce Design Website"
          link='https://ayethet1411.github.io/happyBakery/'
        />

        <ProjectCard
          img={img3}
          title="Holo Travel Blog"
          subheader="Creative Design Blog"
          link='https://ayethet1411.github.io/holo.github.io/'
        />
        
        <ProjectCard
          img={img4}
          title="Simple Expenses"
          subheader="Creative Design "
          link='https://ayethet1411.github.io/simple-expenses-manger/'
        />
        <ProjectCard
          img={img1}
          title="Goal Library"
          subheader="Creative Design Only"
        />
        
      </Slider>
    </motion.div>
  );
}
const ProjectCard = ({ img, title, subheader,link }) => {
  return (
    <Box className="flex" mb={14}>
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "#ffff00" }}>A</Avatar>}
          title={title}
          subheader={subheader}
        />
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <a href={link}>Visit My Project</a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <Button className="project-btn pre" onClick={onClick}>
      Pre
    </Button>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <Button className="project-btn next" onClick={onClick}>
      Next
    </Button>
  );
};
