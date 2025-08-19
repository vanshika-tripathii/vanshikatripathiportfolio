// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

//         {experiences.map((experience, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={experience.id}
//               className={`mb-16 flex justify-${isLeft ? "end" : "start"} relative`}
//             >
//               {/* Circle */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//                 <img
//                   src={experience.img}
//                   alt={experience.company}
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </div>

//               {/* Card */}
//               <div
//                 className={`w-full sm:max-w-md p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
//                   isLeft ? "mr-auto pr-12" : "ml-auto pl-12"
//                 }`}
//               >
//                 <div className="flex items-center space-x-6">
//                   {/* Company Logo */}
//                   <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                     <img
//                       src={experience.img}
//                       alt={experience.company}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Details */}
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {experience.date}
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-4 text-gray-400">{experience.desc}</p>

//                 <div className="mt-4">
//                   <h5 className="font-medium text-white">Skills:</h5>
//                   <ul className="flex flex-wrap mt-2">
//                     {experience.skills.map((skill, idx) => (
//                       <li
//                         key={idx}
//                         className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                       >
//                         {skill}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (desktop only) */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full hidden md:block"></div>

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className="relative flex flex-col md:flex-row items-center mb-16 w-full"
            >
              {/* Circle */}
              <div
                className={`
                  flex justify-center items-center z-10
                  w-12 h-12 md:w-16 md:h-16 rounded-full
                  bg-gray-400 border-4 border-[#8245ec] 
                  mb-6 md:mb-0
                  ${isLeft ? "md:-mr-8" : "md:-ml-8"}
                `}
              >
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-1/2 p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105
                ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"}`}
              >
                <div className="flex items-center space-x-4 md:space-x-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm md:text-md text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm md:text-base">
                  {experience.desc}
                </p>

                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs md:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
