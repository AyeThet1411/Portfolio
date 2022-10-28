import React, { useState } from "react";
import { LinearProgress, Box, Typography, Avatar } from "@mui/material";

export default function LinearProgressBar({ value, title, src }) {
  const [progress, setProgress] = useState(0);
  setTimeout(() => {
    setProgress(value);
  }, 2000);
  return (
    <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
      <Box width="50%" mr={1}>
        <Box display="flex">
          <Avatar src={src} />
          <Typography
            color="#ffffff"
            fontSize={15}
            pt={1}
          >{`${title}`}</Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ height: "10px", borderRadius: "10px", width: "100%" }}
        />
      </Box>
    </Box>
  );
}
