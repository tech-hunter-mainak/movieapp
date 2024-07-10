import React, { useState } from "react";
import Login from "../components/Login";
import Chatbot from "../components/Chatbot";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import Moviesection from "../components/Moviesection";

function Home() {

  const handleData = (data) => {
    setHomeSection(data)
  }
  const section = <SideNav sendData={handleData} />

  const [homeSection, setHomeSection] = useState(<Moviesection />)

  return (
    <React.Fragment>
      <TopNav sendData={handleData} />
      <section id="home-main">
        {section}
        {homeSection}
      </section>
    </React.Fragment>
  );
}

export default Home;
