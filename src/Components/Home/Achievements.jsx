
import { m as motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaRocket, FaCertificate, FaBuilding } from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    title: "TCS – Enterprise Data Analysis",
    description: "Worked with SQL and Python to extract, process, validate, and manage enterprise datasets covering 10K+ user records. Contributed to data-driven dashboards, operational reporting, and data accuracy for the DNB Bank Norway engagement.",
    icon: FaBuilding,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 2,
    title: "Unisire – Startup Founder",
    description: "Co-founded and built Unisire, a student-focused learning and career platform serving 1,000+ active users across multiple colleges. Led end-to-end product development, community building, and offline student engagement events while connecting with 500+ industry professionals.",
    icon: FaRocket,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    id: 3,
    title: "LeetCode – Problem Solving",
    description: "Solved 500+ coding problems, earned 14+ badges, and participated in multiple coding contests, demonstrating strong analytical thinking, logical reasoning, and structured problem-solving skills.",
    icon: FaCode,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    id: 4,
    title: "Coding Ninjas – Competitive Rankings",
    description: "Secured 1st and 2nd positions multiple times on Coding Ninjas leaderboards, showcasing consistency, competitive problem-solving ability, and technical proficiency.",
    icon: FaTrophy,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    id: 5,
    title: "Professional Certifications",
    description: "Completed certifications in MERN Stack Development, Data Structures & Algorithms, and C++. Continuously expanding expertise in SQL, Python, Excel, Power BI, and data analytics.",
    icon: FaCertificate,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group neon-border-card"
    >
       <div className={`absolute top-0 right-0 w-24 h-24 ${achievement.bg} rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform`} />
       
       <div className={`w-12 h-12 rounded-lg ${achievement.bg} ${achievement.color} flex items-center justify-center text-xl mb-4 relative z-10`}>
         <Icon />
       </div>
       
       <h3 className="text-xl font-bold text-stone-900 mb-2 relativ z-10">{achievement.title}</h3>
       <p className="text-stone-600 text-sm leading-relaxed relative z-10">
         {achievement.description}
       </p>
    </motion.div>
  );
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-stone-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
           <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-4"
           >
             Impact & <span className="text-emerald-600">Achievements</span>
           </motion.h2>
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "80px" }}
             viewport={{ once: true }}
             className="h-1 bg-emerald-500 mx-auto rounded-full"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((item, index) => (
            <AchievementCard key={item.id} achievement={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
