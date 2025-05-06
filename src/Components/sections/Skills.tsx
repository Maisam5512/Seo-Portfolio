// import { SKILLS } from '@/Components/constants/skillsData';
// import dynamic from 'next/dynamic';

// const SkillCard = ({ 
//   title, 
//   icon, 
//   items, 
//   color = 'blue',
//   isTools = false 
// }: {
//   title: string;
//   icon: string;
//   items: string[];
//   color?: string;
//   isTools?: boolean;
// }) => {
//   const IconComponent = dynamic(() =>
//     import('@heroicons/react/24/outline').then((mod) => mod[icon as keyof typeof mod])
//   );

//   const colorClasses = {
//     blue: 'text-blue-600',
//     green: 'text-green-600',
//     purple: 'text-purple-600',
//     red: 'text-red-600',
//     yellow: 'text-yellow-600'
//   };

//   const bgColorClasses = {
//     blue: 'bg-blue-100 text-blue-800',
//     green: 'bg-green-100 text-green-800',
//     purple: 'bg-purple-100 text-purple-800',
//     red: 'bg-red-100 text-red-800',
//     yellow: 'bg-yellow-100 text-yellow-800'
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//       <div className="flex items-center mb-4">
//         {IconComponent && <IconComponent className={`h-8 w-8 ${colorClasses[color as keyof typeof colorClasses]} mr-3`} />}
//         <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//       </div>
//       {isTools ? (
//         <div className="flex flex-wrap gap-2">
//           {items.map((item) => (
//             <span key={item} className={`text-sm px-3 py-1 rounded-full ${bgColorClasses[color as keyof typeof bgColorClasses]}`}>
//               {item}
//             </span>
//           ))}
//         </div>
//       ) : (
//         <ul className="space-y-2 text-gray-600">
//           {items.map((item) => (
//             <li key={item} className="flex items-start">
//               <span className={`${colorClasses[color as keyof typeof colorClasses]} mr-2`}>✓</span>
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default function Skills() {
//   return (
//     <section id="skills" className="py-16">
//       <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Skills</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {SKILLS.map((skill) => (
//           <SkillCard 
//             key={skill.title}
//             title={skill.title}
//             icon={skill.icon}
//             items={skill.items}
//             color={skill.color}
//             isTools={skill.isTools}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



import { SKILLS } from '@/Components/constants/skillsData';
import * as Icons from '@heroicons/react/24/outline';

const SkillCard = ({ 
  title, 
  icon, 
  items, 
  color = 'blue',
  isTools = false 
}: {
  title: string;
  icon: string;
  items: string[];
  color?: string;
  isTools?: boolean;
}) => {
  // const IconComponent = dynamic(() =>
  //   import('@heroicons/react/24/outline').then((mod) => mod[icon as keyof typeof mod])
  // );

  const IconComponent = Icons[icon as keyof typeof Icons];

  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600'
  };

  const bgColorClasses = {
    blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    green: 'bg-green-100 text-green-800 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    red: 'bg-red-100 text-red-800 hover:bg-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
  };

  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      <div className="flex items-center mb-4">
        {IconComponent && <IconComponent className={`h-8 w-8 ${colorClasses[color as keyof typeof colorClasses]} mr-3`} />}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      {isTools ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span 
              key={item} 
              className={`text-sm px-3 py-1 rounded-full ${bgColorClasses[color as keyof typeof bgColorClasses]} transition-colors`}
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <ul className="space-y-2 text-gray-600">
          {items.map((item) => (
            <li key={item} className="flex items-start">
              <span className={`${colorClasses[color as keyof typeof colorClasses]} mr-2`}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
          data-aos="fade-up"
        >
          <span className="relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard 
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              items={skill.items}
              color={skill.color}
              isTools={skill.isTools}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}