// import { EXPERIENCE } from '@/Components/constants/experienceData';
// import { BuildingOfficeIcon, CalendarIcon } from '@heroicons/react/24/outline';

// export default function Experience() {
//   return (
//     <section id="experience" className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
        
//         <div className="space-y-8">
//           {EXPERIENCE.map((exp, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
//                   <div className="flex items-center text-gray-600 mt-1">
//                     <BuildingOfficeIcon className="h-5 w-5 mr-2 flex-shrink-0" />
//                     <span>{exp.company}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center text-gray-500">
//                   <CalendarIcon className="h-5 w-5 mr-2 flex-shrink-0" />
//                   <span>{exp.period}</span>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <ul className="space-y-2 text-gray-600">
//                   {exp.responsibilities.map((resp, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-primary-600 mr-2">•</span>
//                       <span>{resp}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { EXPERIENCE } from '@/Components/constants/experienceData';
import { BuildingOfficeIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
          data-aos="fade-up"
        >
          <span className="relative inline-block">
            Professional Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </span>
        </h2>
        
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <BuildingOfficeIcon className="h-5 w-5 mr-2 flex-shrink-0 text-blue-500" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <CalendarIcon className="h-5 w-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="space-y-2 text-gray-600">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}