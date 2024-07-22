import React from "react";
import {
  FaBullhorn,
  FaLaptop,
  FaSearch,
  FaPencilAlt,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <img src="/images/content.png" alt="" className="w-20 m-auto" />,
      title: "Content Marketing",
      description:
        "We create compelling content that engages your audience and promotes your brand effectively.",
      link: "https://brainsmediasolutions.com/content-writing-services/",
    },
    {
      icon: (
        <img src="/images/social-media.png" alt="" className="w-20 m-auto" />
      ),
      title: "Social Media Marketing",
      description:
        "Our SMM services help you connect with your audience and grow your social media presence.",
      link: "https://brainsmediasolutions.com/social-media-marketing-services/",
    },
    {
      icon: <img src="/images/seo.png" alt="" className="w-20 m-auto" />,
      title: "Search Engine Optimization (SEO)",
      description:
        "We improve your website’s visibility on search engines to attract more organic traffic.",
      link: "https://brainsmediasolutions.com/seo-search-engine-optimization/",
    },
    {
      icon: <img src="/images/web.png" alt="" className="w-20 m-auto" />,
      title: "Web Design and Development",
      description:
        "We design and develop websites that are visually appealing and highly functional.",
      link: "https://brainsmediasolutions.com/website-designing/",
    },
    {
      icon: <img src="/images/ppc.png" alt="" className="w-20 m-auto" />,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Our PPC campaigns drive targeted traffic to your website and increase conversions.",
      link: "https://brainsmediasolutions.com/ppc-pay-per-click/",
    },
  ];

  return (
    <section className="bg-black py-12 md:mt-20 mt-10" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-black via-yellow-300/80 to-black py-5 mb-8 text-black">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-20">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-900 px-3 py-8 md:p-10 rounded-xl shadow-lg text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-400 mt-8 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  className="md:text-md text-sm inline-block border-2 border-yellow-500/50 text-yellow-500/50 py-1 px-3 rounded-lg hover:bg-yellow-500/10 hover:text-white hover:border-yellow-500 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
