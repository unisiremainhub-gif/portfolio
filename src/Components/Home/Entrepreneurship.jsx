import { m as motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaRocket, FaCheck, FaArrowRight, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa';

const ventures = [
  {
    id: 1,
    title: "Unisire",
    subtitle: "Student Learning & Career Platform",
    role: "Co-Founder & Lead Developer",
    period: "2024 - Present",
    type: "EdTech Startup",
    icon: FaLightbulb,
    link: "https://www.unisire.com/",
    description: "India’s first and only student-focused learning and career assistance platform combining structured roadmaps, resume references, and automation tools in a single system.",
    achievements: [
      "Co-founded and led end-to-end product development, owning UI/UX, database design, and system architecture",
      "Designed a responsive React.js frontend with reusable components for specific user flows",
      "Engineered secure backend services using Django & SQL with scalable REST APIs",
      "Currently integrating complex backend logic into the live production environment"
    ],
    tech: ["React.js", "Tailwind CSS", "Python", "Django", "SQL", "REST APIs"]
  },
  {
    id: 2,
    title: "Tasyai",
    subtitle: "Job Marketplace & Collaboration Hub",
    role: "Founder",
    period: "2024 - Present",
    type: "Platform",
    icon: FaRocket,
    link: "https://tasyai.vercel.app/",
    description: "A comprehensive platform dedicated to connecting talent with opportunities, fostering collaboration, and managing equity distribution for startups and teams.",
    achievements: [
      "Developing a unified marketplace for job seekers and employers",
      "Implementing features for team collaboration and project management",
      "Designing equity management tools for startup co-founders"
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"]
  }
];

const VentureCard = ({ exp, index }) => {
  const isOdd = index % 2 !== 0;
  const Icon = exp.icon;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
       
       {/* Card Content Section */}
       <div className={`flex items-center w-full md:w-[calc(50%-40px)] ${isOdd ? 'justify-start' : 'justify-end'}`}>
          <motion.div
            initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className={`w-full bg-white p-6 md:p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative z-10 neon-border-card
                before:absolute before:content-[''] before:w-4 before:h-4 before:bg-white before:border-t before:border-r before:border-stone-100 before:rotate-45 
                ${isOdd ? 'before:-left-2 md:before:-left-2' : 'before:-left-2 md:before:-right-2 md:before:border-t md:before:border-r'}
                before:top-8 md:before:border-stone-100
            `}
          >
             {/* Header */}
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                   <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1 block">{exp.type}</span>
                   <div className="flex items-center gap-2">
                     <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">{exp.title}</h3>
                     {exp.link && (
                       <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-emerald-500 transition-colors" title="Visit Feature">
                         <FaExternalLinkAlt size={14} />
                       </a>
                     )}
                   </div>
                </div>
                <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-mono font-bold whitespace-nowrap">
                   {exp.period}
                </span>
             </div>

             <div className="flex items-center gap-2 mb-4 text-sm font-medium text-stone-500">
               <span className="p-1.5 bg-emerald-100 text-emerald-600 rounded-md"><Icon size={12} /></span>
               {exp.role}
             </div>

             <p className="text-stone-600 text-sm leading-relaxed mb-6">
               {exp.description}
             </p>

             <ul className="space-y-2 mb-6 bg-stone-50/50 p-4 rounded-lg">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-stone-700">
                     <FaCheck className="text-emerald-500 mt-1 flex-shrink-0" size={10} /> 
                     <span>{item}</span>
                  </li>
                ))}
             </ul>

             <div className="flex flex-wrap gap-2">
               {exp.tech.map(t => (
                 <span key={t} className="px-2 py-1 bg-white border border-stone-200 rounded text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wide">
                   {t}
                 </span>
               ))}
             </div>
          </motion.div>
       </div>

       {/* Center Node (Absolute on Mobile, Relative on Desktop) */}
       <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center md:relative md:w-20 h-full">
         
         <motion.div 
           initial={{ scale: 0, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ delay: 0.2, type: "spring" }}
           className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-500 border-4 border-stone-100 z-20 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
         />
       </div>

    </div>
  );
};

export default function Entrepreneurship() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="entrepreneurship" ref={containerRef} className="py-24 bg-stone-50 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
           <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-6"
           >
             Entrepreneurial <span className="text-emerald-600">Ventures</span>
           </motion.h2>
           <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
             Building and scaling innovative solutions from the ground up, turning ideas into impact.
           </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
           {/* THE TIMELINE TRACK (Grey Background Line) */}
           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2 md:translate-x-[-1px]" />

           {/* THE PROGRESS LINE (Animated Colored Line) */}
           <motion.div 
             className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-600 origin-top -translate-x-1/2 md:translate-x-[-1px] z-10"
             style={{ height: "100%", scaleY }}
           >
             {/* The "Spark" at the tip of the line */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_4px_rgba(16,185,129,0.6)] z-30">
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
             </div>
           </motion.div>

           <div className="space-y-12 md:space-y-24 pb-24">
             {ventures.map((exp, index) => (
               <VentureCard key={exp.id} exp={exp} index={index} />
             ))}
           </div>
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
        >
            <a href="#contact" className="inline-flex items-center gap-2 group px-6 py-3 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-all shadow-lg hover:shadow-emerald-500/20 neon-border-card">
                <span>Discuss a Venture</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </a>
        </motion.div>
      </div>
    </section>
  );
}
