import React from "react";
import { FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-customBlue-600 text-white py-2 px-6">
      <div className="flex items-center space-x-4">
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="text-xl" />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-xl" />
        </a>

        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl" />
        </a>

        <a href="mailto:example@example.com">
          <MdEmail className="text-xl" />
        </a>

        <div className="text-xs mt-2">
          <p>&copy; 2023 PhishMask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
