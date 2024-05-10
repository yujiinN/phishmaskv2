import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Report() {
  const [reportText, setReportText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of the report
    alert(`Report submitted: ${reportText}`);
    console.log("Report submitted:", reportText);
    // Reset the input field after submission
    setReportText("");
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-customBlue-500 to-customBlue-600 flex flex-col justify-center items-center">
        <Link to="/">
          <img
            src={require("../images/back.png")}
            alt="back"
            className="h-6 mb-4 absolute left-0"
          />
        </Link>

        <img
            src={require("../images/report.png")}
            alt="Open Logs"
            className="h-16 my-5"
          />

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
          <label className="block text-white font-bold mb-2">Report a Phishing:</label>
          <input
            type="text"
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            className="w-full mb-4 px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your report here..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Report;
