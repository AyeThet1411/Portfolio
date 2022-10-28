import { Box, Typography, CircularProgress, Avatar } from "@mui/material";

import React, { useState } from "react";

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(0);
  setTimeout(() => {
    setProgress(props.value);
  }, 2000);
  return (
    <Box position="relative" ml="30px" padding="15px">
      <CircularProgress
        value={progress}
        variant="determinate"
        size={70}
        classes={props.style}
      />
      <Box
        top={30}
        left={30}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar src={props.img} />
      </Box>
      <Typography
        component="div"
        color="#ffffff"
        fontSize={15}
        ml={4}
      >{`${props.value}%`}</Typography>
    </Box>
  );
}
