// import { PROJECTS } from '@/Components/constants/projectsData';
// import dynamic from 'next/dynamic';

// export default function Projects() {
//   return (
//     <section id="projects" className="py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {PROJECTS.map((project) => {
//             const IconComponent = dynamic(() =>
//               import('@heroicons/react/24/outline').then((mod) => mod[project.icon as keyof typeof mod])
//             );
            
//             const colorClasses = {
//               blue: 'text-blue-600',
//               green: 'text-green-600',
//               purple: 'text-purple-600',
//               red: 'text-red-600',
//               yellow: 'text-yellow-600'
//             };
            
//             return (
//               <div key={project.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <div className="flex items-center mb-4">
//                   {IconComponent && (
//                     <IconComponent className={`h-8 w-8 ${colorClasses[project.color as keyof typeof colorClasses]} mr-3`} />
//                   )}
//                   <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//                 </div>
//                 <p className="text-gray-600">{project.description}</p>
//                 {project.tags && (
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {project.tags.map((tag) => (
//                       <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//                 {project.link && (
//                   <a 
//                     href={project.link} 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block mt-4 text-primary-600 hover:text-primary-800 font-medium"
//                   >
//                     View Project →
//                   </a>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { PROJECTS } from '@/Components/constants/projectsData';
import dynamic from 'next/dynamic';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
          data-aos="fade-up"
        >
          <span className="relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            const IconComponent = dynamic(() =>
              import('@heroicons/react/24/outline').then((mod) => mod[project.icon as keyof typeof mod])
            );
            
            const colorClasses = {
              blue: 'text-blue-600',
              green: 'text-green-600',
              purple: 'text-purple-600',
              red: 'text-red-600',
              yellow: 'text-yellow-600'
            };
            
            return (
              <div 
                key={project.title} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  {IconComponent && (
                    <IconComponent className={`h-8 w-8 ${colorClasses[project.color as keyof typeof colorClasses]} mr-3`} />
                  )}
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium group"
                  >
                    View Project
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}