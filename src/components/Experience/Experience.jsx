import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-experience-gradient clip-path-custom-3 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          Here’s a summary of my professional and internship experiences so far
        </p>
      </div>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Timeline items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center">
              {/* Circle on the timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-purple-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-3/4 h-3/4 object-contain rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full sm:w-1/2 p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0
                    ? "sm:pr-12 sm:mr-auto sm:text-right"
                    : "sm:pl-12 sm:ml-auto sm:text-left"
                }`}
              >
                {/* Card header */}
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

                {/* Card body */}
                <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
                  {exp.type}
                </p>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
