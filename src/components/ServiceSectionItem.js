import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardActionArea, CardContent, Box } from "@mui/material";

const useStyles = makeStyles({
  card: {
    background: "rgba(0,0,0,0.9) !important",
  },
  backCard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    width: "100%",
    height: "180px",
    backgroundColor: "#ffff00 !important",
    marginBottom: "-167px",
    marginLeft: "-10px",
  },

  serviceIcon: {
    textAlign: "center",
    padding: "10px",
    "& .MuiSvgIcon-root": {
      fontSize: "3rem",
      color: "#ffffff",
    },
  },
  headingStyle: {
    color: "#ffffff",
  },
  textStyle: {
    color: "#Ffff00",
  },
});

const ServiceSectionItem = ({ icon, para, title }) => {
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.backCard}></Card>
      <Card className={classes.card}>
        <CardActionArea>
          <div className={classes.serviceIcon}>{icon}</div>
          <CardContent>
            <h4 className={classes.headingStyle}>{title}</h4>
            <p className={classes.textStyle}>{para}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ServiceSectionItem;
