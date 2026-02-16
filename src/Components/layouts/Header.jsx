import { m as motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Entrepreneurship', href: '#entrepreneurship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Active Section Spy (Scroll Position Based)
  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. Handle Header Appearance
    setScrolled(latest > 50);

    // 2. Handle Active Section
    const viewportHeight = window.innerHeight;
    // Trigger point: 40% down the screen. This feels most natural for "what am I looking at?"
    const triggerPoint = viewportHeight * 0.4; 

    // We check sections in reverse order to catch the bottom-most active ones first if overlapping,
    // but standard Top->Bottom check is usually safer for "first one satisfying condition".
    // Alternatively, find the one that effectively "contains" the trigger point.
    
    let currentSection = activeSection;
    let found = false;

    // Check each section to see if the trigger point is inside it
    for (const link of navLinks) {
       const sectionId = link.href.substring(1);
       const element = document.getElementById(sectionId);
       
       if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          // top is distance from viewport top to element top
          // bottom is distance from viewport top to element bottom
          
          // If the top of the element is above the trigger point
          // AND the bottom is below the trigger point, it's active.
          if (top <= triggerPoint && bottom > triggerPoint) {
             currentSection = sectionId;
             found = true;
             break; 
          }
       }
    }
    
    if (found && currentSection !== activeSection) {
        setActiveSection(currentSection);
    }
  });



  const logoText = "nitin".split("");

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-100' 
            : 'h-24 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home"
            className="relative z-50 group cursor-pointer flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0 });
              setIsMenuOpen(false);
            }}
          >
            <motion.div className="text-3xl font-bold font-display tracking-tight flex gap-0.5 overflow-hidden">
               {logoText.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-stone-900 inline-block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ 
                    y: -5,
                    color: "#059669", // emerald-600
                    transition: { duration: 0.2 }
                    }}
                >
                  {letter}
                </motion.span>
               ))}
               <motion.span 
                 className="text-emerald-500"
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.5, type: 'spring' }}
               >.</motion.span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => {
                         e.preventDefault();
                         document.querySelector(link.href)?.scrollIntoView();
                         setActiveSection(link.href.substring(1));
                      }}
                      className={`relative z-10 block px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {link.name}
                      
                      {/* Active Pill Background */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-stone-900 rounded-full -z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 p-2 text-stone-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
             {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
          >
             <ul className="space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                         e.preventDefault();
                         setIsMenuOpen(false);
                         document.querySelector(link.href)?.scrollIntoView();
                         setActiveSection(link.href.substring(1));
                    }}
                    className={`text-4xl font-display font-medium block ${
                      activeSection === link.href.substring(1) 
                        ? 'text-stone-900' 
                        : 'text-stone-400 hover:text-stone-900 transition-colors'
                    }`}
                  >
                     {link.name}
                  </a>
                </motion.li>
              ))}
             </ul>

             <motion.div 
               className="absolute bottom-12 text-stone-400 text-sm font-mono"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
             >
                
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
