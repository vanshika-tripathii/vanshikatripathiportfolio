
// // import React from "react";
// // import { education } from "../../constants";

// // const Education = () => {
// //   return (
// //     <section
// //       id="education"
// //       className="py-24 px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
// //     >
// //       {/* Section Title */}
// //       <div className="text-center mb-16">
// //         <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
// //         <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
// //         <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
// //           My education has been a journey of learning and development. Here are
// //           the details of my academic background
// //         </p>
// //       </div>

// //       {/* Education Timeline */}
// //       <div className="relative">
// //         {/* Vertical line */}
// //         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

// //         {/* Education Entries */}
// //         {education.map((edu, index) => (
// //           <div
// //             key={edu.id}
// //             className="relative flex flex-col sm:flex-row items-center mb-16 w-full"
// //           >
// //             {/* Timeline Circle */}
// //             <div className="absolute sm:static left-1/2 transform -translate-x-1/2 sm:translate-x-0 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 mb-6 sm:mb-0">
// //               <img
// //                 src={edu.img}
// //                 alt={edu.school}
// //                 className="hidden md:block w-16 h-16 object-contain mr-6"
// //               />
// //             </div>

// //             {/* Content Box */}
// //             <div
// //               className={`w-full sm:w-1/2 p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105
// //               ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto sm:text-left"}`}
// //             >
// //               <div className="flex items-start space-x-4 sm:space-x-6">
// //                 {/* School Logo */}
// //                 <div className="w-16 h-16 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
// //                   <img
// //                     src={edu.img}
// //                     alt={edu.school}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 {/* Text */}
// //                 <div className="flex flex-col">
// //                   <h3 className="text-lg sm:text-xl font-semibold text-white">
// //                     {edu.degree}
// //                   </h3>
// //                   <h4 className="text-sm sm:text-md text-gray-300">
// //                     {edu.school}
// //                   </h4>
// //                   <p className="text-xs sm:text-sm text-gray-500 mt-2">
// //                     {edu.date}
// //                   </p>
// //                 </div>
// //               </div>

// //               <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
// //                 Grade: {edu.grade}
// //               </p>
// //               <p className="mt-2 text-gray-400 text-sm sm:text-base">{edu.desc}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Education;
import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1 sm:left-1/2 top-0 transform sm:-translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row items-center mb-16 w-full"
          >
            {/* Timeline Circle */}
            <div className="absolute left-1 sm:left-1/2 transform -translate-x-1/2 top-17 sm:top-1/2 -translate-y-1/2 bg-white border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Content Box */}
            <div
              className={`ml-2 sm:ml-0 w-full sm:w-1/2 p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto sm:text-left"}`}
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                {/* School Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-md text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
