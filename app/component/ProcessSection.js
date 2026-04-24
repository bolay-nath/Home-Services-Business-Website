import Image from "next/image";
import { processSteps } from "./AllData";

const process = () => {
    return (
        <div>
           <section id="process" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
             <div className="max-w-6xl mx-auto text-center">
               <div className="mb-12">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                   Our Hassle-Free Painting Process
                 </h2>
                 <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                   We follow a structured method for delivering professional painting
                   services with efficiency and consistent quality.
                 </p>
               </div>
           
               {/* FIXED RESPONSIVE LAYOUT */}
               <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                 {processSteps.map((step, i) => (
                   <div
                     key={i}
                     className="w-[140px] sm:w-[160px] md:flex-1 md:min-w-[160px] max-w-[200px]
                     group flex flex-col items-center text-center
                     hover:scale-105 transition-all duration-300"
                   >
                     <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-4 border-white/50 group-hover:border-teal-100">
                       <Image
                         src={step.img}
                         alt={step.title}
                         fill
                         className="rounded-2xl object-cover group-hover:brightness-110 transition-all duration-300"
                       />
           
                       {/* Step Badge */}
                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full text-xs font-bold flex items-center justify-center shadow-lg">
                         {String(i + 1).padStart(2, "0")}
                       </div>
                     </div>
           
                     <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                       {step.title}
                     </h3>
           
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                       {step.desc}
                     </p>
                   </div>
                 ))}
               </div>
             </div>
           </section> 
        </div>
    );
};

export default process;