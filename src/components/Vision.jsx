import React from "react";
import { FaLightbulb, FaRocket, FaChartLine } from "react-icons/fa";

const VisionSection = () => {
  return (
    <section className="bg-black py-12 mt-10" id="vision">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-black via-yellow-300/80 to-black py-5 mb-8 text-black">
          Our Vision
        </h2>
        <p className="text-center text-yellow-50 md:mb-12 px-3 md:px-[10rem] md:mt-20 mt-10">
          At Brains Media Solutions, we envision a future where businesses of
          all sizes can harness the power of digital marketing to reach their
          full potential.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-900 px-3 py-8 md:p-10 rounded-lg shadow-lg text-center">
              <img src="/images/idea.png" alt="#" className="w-20 m-auto" />
              <h3 className="text-xl font-bold text-gray-400 my-4">
                Innovation
              </h3>
              <p className="text-gray-500">
                We strive to be at the forefront of digital marketing
                innovation, constantly seeking new ways to deliver value to our
                clients.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-900 px-3 py-8 md:p-10 rounded-lg shadow-lg text-center">
              <img src="/images/growth.png" alt="#" className="w-20 m-auto" />
              <h3 className="text-xl font-bold text-gray-400 my-4">Growth</h3>
              <p className="text-gray-500">
                Our goal is to drive growth for our clients, helping them to
                expand their reach and achieve their business objectives.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-900 px-3 py-8 md:p-10 rounded-lg shadow-lg text-center">
              <img src="/images/trophy.png" alt="#" className="w-20 m-auto" />
              <h3 className="text-xl font-bold text-gray-400 my-4">Success</h3>
              <p className="text-gray-500">
                We are committed to the success of our clients, providing the
                tools and support they need to thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
