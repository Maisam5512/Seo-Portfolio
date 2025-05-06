// import Link from 'next/link';
// import Image from 'next/image';
// import { CodeBracketIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// export default function Header() {
//   return (
//     <header className="bg-gradient-to-r from-primary-800 to-primary-600 text-white">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <ul className="flex justify-center space-x-8">
//           <li>
//             <Link href="#skills" className="flex items-center hover:text-blue-200 transition-colors">
//               <CodeBracketIcon className="h-5 w-5 mr-2" />
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link href="#experience" className="flex items-center hover:text-blue-200 transition-colors">
//               <BriefcaseIcon className="h-5 w-5 mr-2" />
//               Experience
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" className="flex items-center hover:text-blue-200 transition-colors">
//               <EnvelopeIcon className="h-5 w-5 mr-2" />
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//         <div className="w-32 h-32 mx-auto relative mb-6">
//           <Image 
//             src="/assets/images/Profile.jpeg" 
//             alt="Syed Tehzeeb Ul Hassan" 
//             fill
//             className="rounded-full object-cover border-4 border-white"
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Syed Tehzeeb Ul Hassan</h1>
//         <h2 className="text-xl md:text-2xl text-blue-100">SEO Expert & Local SEO Specialist</h2>
        
//         <div className="mt-6 text-blue-100 space-y-1">
//           <p><strong>Phone:</strong> <a href="tel:+923045454869" className="hover:text-white">+92 304 545 4869</a></p>
//           <p><strong>Email:</strong> <a href="mailto:syedtehzeeb5566@gmail.com" className="hover:text-white">syedtehzeeb5566@gmail.com</a></p>
//           <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/syed-tehzeeb-ul-hassan-4baa69332" className="hover:text-white">View Profile</a></p>
//           <p><strong>Location:</strong> Islamabad, Pakistan</p>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client'
import Link from 'next/link';
import Image from 'next/image';
import { CodeBracketIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <ul className="flex justify-center space-x-8">
          {[
            { href: "#skills", icon: CodeBracketIcon, text: "Skills" },
            { href: "#experience", icon: BriefcaseIcon, text: "Experience" },
            { href: "#contact", icon: EnvelopeIcon, text: "Contact" }
          ].map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center group">
                <div className="relative px-3 py-2">
                  <span className="relative z-10 flex items-center text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.text}
                  </span>
                  <span className="absolute inset-0 bg-cyan-500 bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300 scale-95 group-hover:scale-105"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="w-32 h-32 mx-auto relative mb-6 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md -z-10"></div>
          <Image 
            src="/assets/images/Profile.jpeg" 
            alt="Syed Tehzeeb Ul Hassan" 
            fill
            className="rounded-full object-cover border-4 border-gray-200 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          Syed Tehzeeb Ul Hassan
          <span className="inline-block ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-cyan-300 mb-8 relative inline-block group">
          <span className="relative z-10">SEO Expert & Local SEO Specialist</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
        
        <div className="mt-6 text-gray-300 space-y-3 max-w-md mx-auto">
          {[
            { label: "Phone", value: "+92 304 545 4869", href: "tel:+923045454869" },
            { label: "Email", value: "syedtehzeeb5566@gmail.com", href: "mailto:syedtehzeeb5566@gmail.com" },
            { label: "LinkedIn", value: "View Profile", href: "https://www.linkedin.com/in/syed-tehzeeb-ul-hassan-4baa69332" },
            { label: "Location", value: "Islamabad, Pakistan" }
          ].map((item, index) => (
            <p key={index} className="group">
              <strong className="text-gray-200">{item.label}:</strong> {item.href ? (
                <a href={item.href} className="hover:text-cyan-400 transition-colors duration-300 relative inline-block px-1">
                  <span className="relative z-10">{item.value}</span>
                  <span className="absolute bottom-0 left-1 right-1 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ) : (
                <span className="px-1">{item.value}</span>
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}