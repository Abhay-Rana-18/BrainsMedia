import React from "react";
import { FaBullseye, FaGlobe, FaUsers } from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className="bg-black py-12 mt-10" id="mission">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-black via-yellow-300/80 to-black text-black mb-8 py-5">
          Our Mission
        </h2>
        <p className="text-center text-yellow-50 md:mb-12 md:px-[10rem] md:mt-20 mt-10">
          At Brains Media Solutions, our mission is to deliver top-notch digital
          marketing services that help businesses grow and succeed in the
          digital landscape.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-7">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-900 px-3 py-8 md:p-10 rounded-lg shadow-lg text-center">
              <img src="/images/goals.png" alt="#" className="w-20 m-auto" />
              <h3 className="text-xl font-bold text-gray-400 my-4">
                Achieve Goals
              </h3>
              <p className="text-gray-500">
                We help our clients achieve their business goals through
                innovative and effective digital marketing strategies.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-900 px-3 py-8 md:p-10 rounded-lg shadow-lg text-center">
              <img
                src="/images/peoples.png"
                alt="#"
                className="w-20 m-auto my-4"
              />
              <h3 className="text-xl font-bold text-gray-400 mb-2">
                Build Relationships
              </h3>
              <p className="text-gray-500">
                We focus on building strong relationships between our clients
                and their customers through engaging content and social media.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-900 px-3 py-8 md:p-10  rounded-lg shadow-lg text-center">
              <img
                src="/images/globe.png"
                alt="#"
                className="w-20 m-auto my-4"
              />
              <h3 className="text-xl font-bold text-gray-400 mb-2">
                Expand Reach
              </h3>
              <p className="text-gray-500">
                Our services are designed to expand our clients' reach,
                connecting them with a global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
