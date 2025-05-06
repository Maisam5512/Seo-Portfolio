// export default function Bio() {
//     return (
//       <section id="bio" className="py-16 bg-gray-100">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
//             <p className="text-gray-600 text-center">
//               I am an experienced SEO Expert & Local SEO Specialist with over 15 months of hands-on experience. 
//               My skills include on-page, off-page, technical, and local SEO with a passion for results-driven 
//               strategies. I have worked on both e-commerce and local business websites.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }


export default function Bio() {
  return (
    <section id="bio" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative">
            <span className="relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            I am an experienced <span className="text-blue-600 font-medium">SEO Expert</span> & <span className="text-blue-600 font-medium">Local SEO Specialist</span> with over 15 months of hands-on experience. 
            My skills include on-page, off-page, technical, and local SEO with a passion for results-driven 
            strategies. I have worked on both e-commerce and local business websites.
          </p>
        </div>
      </div>
    </section>
  );
}