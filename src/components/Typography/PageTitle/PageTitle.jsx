// src/components/Typography/PageTitle/PageTitle.jsx
import React from "react";
import "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  return <h1 className="page-title">{children}</h1>;
};

export default PageTitle;
