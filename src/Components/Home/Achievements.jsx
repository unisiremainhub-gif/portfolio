import { m as motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaRocket, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    title: "LeetCode",
    description: "Solved 500+ problems, earned 14+ badges, and ranked in multiple coding contests, demonstrating strong problem-solving ability.",
    icon: FaCode,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    id: 2,
    title: "Coding Ninjas",
    description: "Secured 1st and 2nd positions multiple times on leaderboards among a large learner community.",
    icon: FaTrophy,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    id: 3,
    title: "Unisire Launch",
    description: "Built and launched Unisire, a production-grade learning platform used by 200+ active users across multiple colleges, collaborating with 500+ industry professionals.",
    icon: FaRocket,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    id: 4,
    title: "Certifications",
    description: "Completed industry-recognized certifications in MERN Stack, Data Structures & Algorithms, and C++.",
    icon: FaCertificate,
    color: "text-blue-500",
    bg: "bg-blue-50"
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
             Key <span className="text-emerald-600">Achievements</span>
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
