import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>{subHeading}</p>
      <h2 className="heading">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
