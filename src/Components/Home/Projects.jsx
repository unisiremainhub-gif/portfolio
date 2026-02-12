import { m as motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaArrowRight, FaChrome, FaPalette } from 'react-icons/fa';
import { projects } from '../../data/projects'; 

const PLACEHOLDER = 'https://via.placeholder.com/1200x800?text=Project+Preview';

const getProjectImage = (project) => {
  return project?.image || PLACEHOLDER;
};

// --- STACKING CARD COMPONENT ---
const Card = ({ i, project, setModal, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  // Parallax for the image inside the card
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  
  // Scale for the card itself (stacking effect)
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -top-[5%] md:-top-[5%] w-[90vw] md:w-[1000px] h-[70vh] md:h-[500px] rounded-3xl overflow-hidden border border-stone-200 shadow-2xl origin-top bg-white neon-border-card"
        onClick={() => setModal(project)}
      >
        <div className="flex flex-col md:flex-row h-full">
            
            {/* Left: Content */}
            <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between bg-white relative z-20">
               <div>
                  <h2 className="text-3xl font-bold text-stone-900 mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map(tech => (
                       <span key={tech} className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs font-bold uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none">
                    {project.description}
                  </p>
               </div>
               
               <div className="flex items-center gap-4 mt-6 md:mt-0">
                  <button 
                     className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                     aria-label={`View details for ${project.title}`}
                  >
                     View Details <FaArrowRight size={12} />
                  </button>
                  {project.github && (
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors" 
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View source code on GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                  )}
               </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-[60%] h-full relative overflow-hidden bg-stone-100 group cursor-pointer">
              <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                 <img 
                    src={getProjectImage(project)} 
                    alt={`Preview of ${project.title}`}
                    loading="lazy"
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </motion.div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 Click to Expand
              </div>
            </div>

        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const [selectedProject, setSelectedProject] = useState(null);

  // Stacking logic
  const len = projects.length;

  return (
    <div ref={container} className="relative bg-stone-50" id="projects">
      
      {/* Intro Section - Standard Scroll */}
      <section className="py-24 px-6 container mx-auto text-center">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
         >
            <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase block">Selected Works</span>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900">
               Project <span className="text-emerald-600">Gallery</span>
            </h2>
            <p className="text-xl text-stone-600">
               A curated selection of robust applications and digital solutions.
            </p>
         </motion.div>
      </section>

      {/* Stacking Cards Container */}
      <div className="mt-[10vh]">
        {projects.map((project, i) => {
          // Calculate scale range for creating the stack effect
          const targetScale = 1 - ((len - i) * 0.05);
          const range = [i * (1 / len), 1];
          
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              setModal={setSelectedProject}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling past final card */}
      <div className="h-[20vh]" />


      {/* --- MODAL --- */}
      {selectedProject && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[600px] relative"
            >
               {/* Close Button Mobile */}
               <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 bg-white/50 p-2 rounded-full md:hidden"
                aria-label="Close modal"
               >
                 <FaTimes />
               </button>

               {/* Left: Interactive Image */}
               <div className="w-full md:w-[55%] h-64 md:h-full relative bg-stone-900 group">
                  <img 
                    src={getProjectImage(selectedProject)} 
                    alt={`Detail view of ${selectedProject.title}`}
                    className="w-full h-full object-contain md:object-cover opacity-90"
                  />
               </div>

               {/* Right: Content */}
               <div className="w-full md:w-[45%] p-8 md:p-10 flex flex-col h-full bg-white overflow-y-auto">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                         <h3 id="modal-title" className="text-3xl font-bold text-stone-900 mb-2">{selectedProject.title}</h3>
                         <div className="flex gap-2">
                           <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded tracking-wide">
                             {selectedProject.subProjects ? 'Multi-Tool Collection' : 'Key Project'}
                           </span>
                         </div>
                    </div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="hidden md:block text-stone-400 hover:text-stone-900 transition-colors"
                        aria-label="Close modal"
                    >
                        <FaTimes size={24} />
                    </button>
                 </div>

                 <p className="text-stone-600 text-base leading-relaxed mb-6 flex-grow">
                   {selectedProject.description}
                 </p>

                 <div className="space-y-6">
                    <div>
                       <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Technology Stack</h4>
                       <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-md text-sm font-medium border border-stone-200">
                              {tech}
                            </span>
                          ))}
                       </div>
                    </div>

                    {/* Rendering Sub-Projects OR Standard Buttons */}
                    {selectedProject.subProjects ? (
                        <div className="pt-4 space-y-3">
                            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">Available Extensions</h4>
                            {selectedProject.subProjects.map((sub, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors">
                                    <div className="flex justify-between items-center mb-1">
                                        <h5 className="font-bold text-stone-900">{sub.title}</h5>
                                        <a href={sub.link} target="_blank" rel="noreferrer" className="text-emerald-600 hover:text-emerald-700">
                                            <FaExternalLinkAlt size={14} />
                                        </a>
                                    </div>
                                    <p className="text-xs text-stone-600">{sub.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-4 pt-4">
                           {selectedProject.github && (
                               <a 
                                 href={selectedProject.github} 
                                 target="_blank" 
                                 rel="noreferrer" 
                                 className="flex-1 flex items-center justify-center gap-2 py-3 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-all active:scale-95"
                               >
                                   <FaGithub /> Code
                               </a>
                           )}
                           {selectedProject.live && (
                               <a 
                                 href={selectedProject.live} 
                                 target="_blank" 
                                 rel="noreferrer" 
                                 className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-200"
                               >
                                   <FaExternalLinkAlt /> Live Demo
                               </a>
                           )}
                        </div>
                    )}
                 </div>
               </div>
            </motion.div>
          </div>
      )}
    </div>
  );
}
