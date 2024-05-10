import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Logs() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-customBlue-500 to-customBlue-600 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src={require("../images/back.png")}
              alt="back"
              className="h-6 mb-4 absolute left-0"
            />
          </Link>

          <img
            src={require("../images/open-logs.png")}
            alt="Open Logs"
            className="h-16 my-5"
          />

          <div className="overflow-auto max-h-200">
            <table className="border-collapse border border-white w-full max-w-xl">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-white px-4 py-2">Website</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-200">
                  <td className="border border-white px-4 py-2">example.com</td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="border border-white px-4 py-2">example.net</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border border-white px-4 py-2">example.org</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logs;
