import { m as motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaGithub, FaDatabase, FaCode, FaServer, FaPython, FaSass, 
  FaBrain, FaObjectGroup, FaProjectDiagram, FaJira, FaTrello, 
  FaGoogle, FaUsers, FaComments, FaLightbulb, FaHandshake, FaSyncAlt,
  FaChevronDown
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiTypescript, 
  SiCplusplus, SiRedux, SiDjango, SiSqlite, SiSupabase, 
  SiNotion, SiN8N, SiAmazondynamodb
} from 'react-icons/si';
import { skillCategories } from '../../data/skills'; 

// --- Icon Mapping ---
const skillIconMap = {
  // Languages
  'JavaScript': FaJs,
  'TypeScript': SiTypescript,
  'Python': FaPython,
  'C++': SiCplusplus,

  // Frontend
  'React.js': FaReact,
  'Redux': SiRedux,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'SASS': FaSass,
  'Tailwind CSS': SiTailwindcss,

  // Backend
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'Django': SiDjango,
  'REST APIs': FaServer,
  'REST Framework': FaServer,

  // Databases
  'MongoDB': SiMongodb,
  'SQL': FaDatabase,
  'SQLite': SiSqlite,
  'Supabase': SiSupabase,

  // CS Fundamentals
  'DSA': FaBrain,
  'OOPs': FaObjectGroup,
  'DBMS': FaDatabase,
  'OS': FaServer,
  'System Design': FaProjectDiagram,

  // Tools
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'Jira': FaJira,
  'Trello': FaTrello,
  'Notion': SiNotion,
  'Google Workspace': FaGoogle,
  'n8n': SiN8N,

  // Soft Skills
  'Leadership': FaUsers,
  'Communication': FaComments,
  'Problem Solving': FaLightbulb,
  'Teamwork': FaHandshake,
  'Adaptability': FaSyncAlt
};

const SkillCard = ({ skill, index }) => {
  const Icon = skillIconMap[skill] || FaCode;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="relative group h-full"
    >
      <div className="h-full p-4 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden z-0 neon-border-card flex flex-col items-center text-center md:items-start md:text-left gap-3 md:flex-row md:gap-4">
        <div className="relative z-10">
           {/* Icon Box */}
           <div className="w-12 h-12 rounded-lg bg-stone-50 text-stone-600 flex items-center justify-center text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
             <Icon />
           </div>
        </div>
        
        <div className="relative z-10 flex items-center">
           <h4 className="text-stone-700 font-semibold text-sm group-hover:text-stone-900 transition-colors">
             {skill}
           </h4>
        </div>

        {/* Hover Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // Default for mobile

  // Flatten all skills for "All" view with category metadata
  const allSkills = skillCategories.reduce((acc, cat) => {
    return [...acc, ...cat.skills.map(s => ({ name: s, category: cat.category }))];
  }, []);

  const categories = ["All", ...skillCategories.map(c => c.category)];

  useEffect(() => {
    // Determine skills list based on category
    let skillsList = [];
    if (activeCategory === "All") {
      skillsList = allSkills;
    } else {
      const categoryData = skillCategories.find(c => c.category === activeCategory);
      skillsList = categoryData ? categoryData.skills.map(s => ({ name: s, category: activeCategory })) : [];
    }
    setFilteredSkills(skillsList);

    // Reset visible count based on screen size when category changes
    // We want to force re-evaluation of the limit whenever category changes
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(10);
      } else {
        setVisibleCount(skillsList.length); // Show all on desktop by default
      }
    };

    handleResize(); // Initial check
    
    // Optional: Update on resize if dynamic switching is needed
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory]);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, filteredSkills.length));
  };

  const visibleSkills = filteredSkills.slice(0, visibleCount);
  const remainingCount = filteredSkills.length - visibleCount;

  return (
    <section id="skills" className="py-24 bg-stone-50/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
           <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-4"
           >
             Technical <span className="text-emerald-600">Arsenal</span>
           </motion.h2>
           <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600"
           >
             Explore the technologies I use to craft exceptional digital experiences. 
             Filter by category to see specific skill sets.
           </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat ? 'text-white' : 'text-stone-600 hover:text-stone-900 bg-white border border-stone-200'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  className="absolute inset-0 bg-stone-900 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat === 'Full-Stack / Tools' ? 'Tools' : cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode='popLayout'>
            {visibleSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill.name} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {visibleCount < filteredSkills.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              layout
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-stone-600 font-bold rounded-full border border-stone-200 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm hover:shadow-md"
            >
              <span>Show Next 10 Skills</span>
              <span className="text-xs font-normal text-stone-400">({remainingCount} more)</span>
              <FaChevronDown className="group-hover:translate-y-1 transition-transform" size={12} />
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
