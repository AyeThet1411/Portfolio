import React, { useRef, useState,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FormGroup, Button, TextField, Grid, Modal, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Facebook,
  Twitter,
  Instagram,
  Email,
  Phone,
  LinkedIn,
} from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#000",
};
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffff00",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffff00",
    },
  },
});
const Result = () => {
  return (
    <div>
      <p>Your message has been successfully sent. I will contact you soon.</p>
    </div>
  );
};
const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [result, showResult] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nu6q9nn",
        "template_v8j2pj5",
        form.current,
        "hazNMdvBTsJiyF-4H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <Grid>
      <Grid  ml={{ md: 15, sm: 10, xs: 8}} mr={{ md: 12, sm: 8, xs: 6}} >
        <h2 className="heading">&nbsp;Ways To Contact Me&nbsp;</h2>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          borderRadius={5}
          p={5}
          mt={3}
          mb={6}          
          bgcolor={"#ffffff"}
        >
          <Grid item md={8} sm={8} xs={12}>
            <form ref={form} onSubmit={sendEmail}>
              <FormGroup>
                <CssTextField
                  label="Name"
                  id="standard-basic"
                  variant="standard"
                  name="fullName"
                />
                <CssTextField
                  label="Email"
                  id="standard-basic"
                  variant="standard"
                  name="email"
                />
                <br />
                <CssTextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                  name="message"
                />
                <Button
                  className="general-btn contact-btn"
                  type="submit"
                  onClick={handleOpen}
                >
                  Send
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>{result ? <Result /> : null}</Box>
                </Modal>
              </FormGroup>
            </form>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <div className="contact-box" data-aos='fade-right'>
              <Facebook />
              <p>Aye Thet Su Khaing</p>
            </div>
            <div className="contact-box" data-aos='fade-left'>
              <Twitter />
              <p>Aye Thet Su Khaing</p>
            </div>
            <div className="contact-box" data-aos='fade-right'>
              <LinkedIn />
              <p>jessica_IU</p>
            </div>
            <div className="contact-box" data-aos='fade-left'>
              <Instagram />
              <p>nory_yaya</p>
            </div>
            <div className="contact-box" data-aos='fade-right'>
              <Email />
              <a href="mailto:ayethetsukhiang1999@gmail.com"><p>atsk1999@gmail.com</p></a>
            </div>
            <div className="contact-box" data-aos='fade-left'>
            <Phone />
              <a href="tel:+09962691608">
               <p>+959-962691608</p>
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
