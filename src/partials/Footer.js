import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";
import resume from "../resume/Santhosh-Resume.pdf";

function Footer() {
  return (
    <div className="text-center w-full mt-16">
      <a href={resume} target="_blank">
        <button class="bg-white inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <div class="p-1">
            <AiOutlineCloudDownload />
          </div>
          Resume
        </button>
      </a>
    </div>
  );
}

export default Footer;
