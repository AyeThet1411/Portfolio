import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion'
import { Avatar, Box } from "@mui/material";
import img1 from "../images/client-1.png";
import img2 from "../images/client-2.png";
import img3 from "../images/client-3.png";
import "../components/Testimonial.css";
import SectionTitle from '../components/SectionTitle'
function Testimonnials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <motion.div className="testimonial" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <SectionTitle heading='Testimonials' subHeading='What Client Say About Us?' />
      <Slider {...settings}>
        <CardBox
          img={img1}
          name="Ye Yint Kyaw"
          job="Software Engineer"
          title="Great Services"
        />
        <CardBox
          img={img2}
          name="Wai Phue"
          job="Web Designer"
          title="Greact UI/UX"
        />
        <CardBox
          img={img3}
          name="Aung Aung"
          job="Web Developer"
          title="Good Ideas"
        />
        <CardBox
          img={img2}
          name="Hsu Yati"
          job="Web Designer"
          title="Greact UI/UX"
        />
      </Slider>
    </motion.div>
  );
}
const CardBox = ({ img, name, job, title }) => {
  return (
    <div className="client--card">
      <Box
        width={{ xs: "100%", md: "80%" }}
        padding={{ xs: "15px", md: "40px" }}
        className='testimonial-single-item'
      >
        <h2>{title}</h2>
        <p className="client--review">
          Lorem ipsum dotristique urna eros non tellusLorem ipsum dotristique
          urna eros non tellus
        </p>
        <div className="client--info">
          <div>
            <h4>{name}</h4>
            <p>{job}</p>
          </div>
          <Avatar
            src={img}
            imgProps={{ style: { borderRadius: "50%" } }}
            style={{ width: "80px", height: "80px" }}
            className="client-img"
          />
        </div>
      </Box>
    </div>
  );
};
export default Testimonnials;
