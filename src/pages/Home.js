import React from "react";
import Landing from "../components/home/Landing";
import Me from "../components/home/Me";
import Projects from "../components/home/Projects";
const Home = (props) => {
  return (
    <>
      <Landing />
      <Me />
      <Projects />
    </>
  );
};

export default Home;
