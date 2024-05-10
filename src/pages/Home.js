import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [isActivate, setIsActivate] = useState(false);

  const handleToggle = () => {
    setIsActivate(!isActivate);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-customBlue-500 to-customBlue-600 flex flex-col justify-center items-center">
        {isActivate ? (
          <img
            src={require("../images/safe.png")}
            alt="Safe"
            className="h-52 my-10"
          />
        ) : (
          <img
            src={require("../images/power.png")}
            alt="Power"
            className="h-52 my-10"
          />
        )}

        <div className="flex flex-col items-center space-y-6 mb-10">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isActivate}
              onChange={handleToggle}
            />
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          <div className="flex flex-row space-x-10">
            <Link to="/logs">
              <div className="flex flex-col items-center">
                <img
                  src={require("../images/open-logs.png")}
                  className="h-7"
                  alt="Open Logs"
                />
                <p className="mt-1 text-white">Open Logs</p>
              </div>
            </Link>

            <Link to="/report">
              <div className="flex flex-col items-center">
                <img
                  src={require("../images/report.png")}
                  className="h-7"
                  alt="Report"
                />
                <p className="mt-1 text-white">Report</p>
              </div>
            </Link>

            <Link to="/feedback">
              <div className="flex flex-col items-center">
                <img
                  src={require("../images/feedback.png")}
                  className="h-7"
                  alt="Feedback"
                />
                <p className="mt-1 text-white">Feedback</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
