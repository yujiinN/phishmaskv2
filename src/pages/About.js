import React from "react";
import Navbar from "../components/Navbar-About";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-customBlue-500 to-customBlue-600 flex flex-col justify-center items-center p-2">
          <h3 className="text-white text-xl mb-4">Developers</h3>
          <div className="flex flex-wrap justify-center items-center">
            <div className="m-4 flex flex-col items-center">
              <img
                src={require("../images/team-member1.png")}
                alt="Team Member 1"
                className="h-20 w-20 rounded-full"
              />
              <p className="text-white text-xs text-center mt-2">John Kevin Tamayo</p>
            </div>
            <div className="m-4 flex flex-col items-center">
              <img
                src={require("../images/team-member2.png")}
                alt="Team Member 2"
                className="h-20 w-20 rounded-full"
              />
              <p className="text-white text-xs text-center mt-2">Lester Lawrence Sanchez</p>
            </div>
            <div className="m-4 flex flex-col items-center">
              <img
                src={require("../images/team-member3.png")}
                alt="Team Member 3"
                className="h-20 w-20 rounded-full"
              />
              <p className="text-white text-xs text-center mt-2">Blaine Panares</p>
            </div>
            <div className="m-4 flex flex-col items-center">
              <img
                src={require("../images/team-member4.png")}
                alt="Team Member 4"
                className="h-20 w-20 rounded-full"
              />
              <p className="text-white text-xs text-center mt-2">Ryan John Camado</p>
            </div>
            <div className="m-4 flex flex-col items-center">
              <img
                src={require("../images/team-member5.png")}
                alt="Team Member 5"
                className="h-20 w-20 rounded-full"
              />
              <p className="text-white text-xs text-center mt-2">Christian Lloyd Circulado</p>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default About;
