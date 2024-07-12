import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import "../css/home.css"
import Moviesection from "../components/Moviesection";
import Signup from "../components/Signup";
import Offerbanner from "../components/Offerbanner";

function Home() {

  const handleData = (data) => {
    setHomeSection(data)
  }
  const section = <SideNav sendData={handleData} />
  const loginSection = <Signup sendData={handleData} />

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
