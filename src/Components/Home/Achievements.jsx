
import { m as motion } from 'framer-motion';
import {
  FaTrophy,
  FaCode,
  FaRocket,
  FaCertificate,
  FaBuilding
} from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    title: "TCS – Enterprise Data Analysis",
    description: "Used SQL and Python to process and validate 10K+ records. Contributed to dashboards and operational reporting for DNB Bank Norway.",
    icon: FaBuilding,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 2,
    title: "Unisire – Startup Founder",
    description: "Co-founded a career platform with 1,000+ active users. Connected 500+ industry professionals and led product and community growth.",
    icon: FaRocket,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    id: 3,
    title: "LeetCode – Problem Solving",
    description: "Solved 500+ coding problems, earned 14+ badges, and participated in coding contests.",
    icon: FaCode,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    id: 4,
    title: "Coding Ninjas – Rankings",
    description: "Secured 1st and 2nd positions multiple times on Coding Ninjas leaderboards.",
    icon: FaTrophy,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    id: 5,
    title: "Professional Certifications",
    description: "Certified in MERN Stack Development, Data Structures & Algorithms, and C++. Expanding skills in SQL, Python, Excel, and Power BI.",
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
      className="h-full bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group neon-border-card"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${achievement.bg} rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform`} />

      <div className={`w-11 h-11 rounded-lg ${achievement.bg} ${achievement.color} flex items-center justify-center text-xl mb-4 relative z-10`}>
        <Icon />
      </div>

      <h3 className="text-base font-bold text-stone-900 mb-2 relative z-10">
        {achievement.title}
      </h3>

      <p className="text-stone-600 text-sm leading-relaxed relative z-10">
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-stone-50 relative">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        {/* Five-card layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-[1500px] mx-auto">
          {achievements.map((item, index) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
