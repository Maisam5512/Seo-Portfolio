// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
//           <p className="text-gray-600 text-center mb-8">
//             Got a project waiting to be realized? Let's collaborate and make it happen!
//           </p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
//             <a 
//               href="mailto:syedtehzeeb5566@gmail.com" 
//               className="flex items-center justify-center bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors"
//             >
//               <EnvelopeIcon className="h-5 w-5 mr-2" />
//               Email Me
//             </a>
//             <a 
//               href="https://wa.me/923045454869" 
//               className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
//             >
//               <PhoneIcon className="h-5 w-5 mr-2" />
//               WhatsApp Me
//             </a>
//           </div>
          
//           <div className="text-center text-gray-600">
//             <p className="mb-2">
//               A portfolio showcasing my expertise in <strong className="text-primary-600">SEO</strong> with 
//               specialization in on-page, off-page, technical, and local SEO strategies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-100 transform transition-all hover:scale-[1.01]"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative">
            <span className="relative inline-block">
              Contact Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-gray-600 text-center mb-8 max-w-lg mx-auto leading-relaxed">
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="mailto:syedtehzeeb5566@gmail.com" 
              className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2.5" />
              <span className="font-medium">Email Me</span>
            </a>
            
            <a 
              href="https://wa.me/923045454869" 
              className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <PhoneIcon className="h-5 w-5 mr-2.5" />
              <span className="font-medium">WhatsApp Me</span>
            </a>
          </div>
          
          <div className="text-center text-gray-600 bg-blue-50/50 p-6 rounded-lg border border-blue-100">
            <p className="mb-2 leading-relaxed">
              A portfolio showcasing my expertise in <strong className="text-blue-600 font-semibold">SEO</strong> with 
              specialization in on-page, off-page, technical, and local SEO strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


