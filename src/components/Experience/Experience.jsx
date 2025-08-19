import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-experience-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          Here’s a summary of my professional and internship experiences so far
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Experience Entries */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative flex flex-col sm:flex-row items-center mb-16 w-full"
          >
            {/* Timeline Circle */}
            <div className="absolute sm:static left-1/2 transform -translate-x-1/2 sm:translate-x-0 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 mb-6 sm:mb-0">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:w-1/2 p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto sm:text-left"}`}
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                {/* Company Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm sm:text-md text-gray-300">
                    {exp.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {exp.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
                {exp.type} {/* e.g., Internship / Part-time / Full-time */}
              </p>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
