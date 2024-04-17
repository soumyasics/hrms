import React from "react";
import Select, { components } from "react-select";

const { ClearIndicator } = components;

const CustomClearIndicator = (props) => {
  return (
    <ClearIndicator {...props}>
      {/* Render an empty span to hide the clear all icon */}
      <span></span>
    </ClearIndicator>
  );
};
