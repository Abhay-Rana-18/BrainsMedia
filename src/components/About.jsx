import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="bg-black p-6 mt-20" id="about">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-gradient-to-r from-black via-yellow-300/80 to-black text-black mb-8 py-5">
          About Us
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-12 gradient-border-bottom mb-3 text-center text-yellow-50 p-2">
          No.1 Digital Marketing and Social Media Agency in Belgaum
        </h2>
        <div className="flex flex-col gap-4 text-gray-400 p-1 md:py-10 md:px-20">
          <p>
            Brains Media Solutions Pvt. Ltd is a full-service Digital Marketing
            Agency based in Belgaum, Karnataka, India. Our journey began in
            2008, and since then, we have evolved and adapted to the dynamic
            landscape of the digital marketing industry.
          </p>
          <p>
            But in 2015, we took a major step and fully transformed into a
            specialized digital marketing company. Today, we cater to the
            diverse needs of businesses in Belgaum, Hubli, Dharwad, Maharashtra,
            Pune, Chennai and PAN India.
          </p>
          <p>
            As a full-service digital marketing company, we offer various
            services to help businesses thrive online. Our affordable digital
            marketing services are curated to capture new leads and convert them
            into profitable customers. Our digital marketing services list
            include:
          </p>
          <ul className="">
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500/60 mr-2" />
              Content marketing
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500/60 mr-2" />
              Social media marketing (SMM)
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500/60 mr-2" />
              Search engine optimization (SEO)
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500/60 mr-2" />
              Web design and development
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500/60 mr-2" />
              Pay-per-click (PPC) advertising
            </li>
          </ul>
          <p>
            Whether you are a small local business or a large enterprise, we are
            here to be your trusted partner in increasing your digital presence
            and taking your online success to new heights.
          </p>
          <p>
            Contact us today, and let’s embark on a journey towards digital
            excellence!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
