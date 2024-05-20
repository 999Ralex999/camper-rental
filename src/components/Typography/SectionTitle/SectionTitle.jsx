// src/components/Typography/SectionTitle/SectionTitle.jsx
import React from "react";
import "./SectionTitle.module.css";

const SectionTitle = ({ children }) => {
  return <h2 className="section-title">{children}</h2>;
};

export default SectionTitle;
