import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { SparklesPreview } from './SparklesPreview';
import { TextRevealCard } from '../ui/text-reveal-card';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 backface-hidden">
                            <img
                                src={profileImg}
                                alt="Dax Patel"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center items-center w-full mb-6 gap-4"
                >
                    <span className="text-5xl md:text-7xl font-bold tracking-tight dark:text-white text-slate-900">I'm</span>
                    <TextRevealCard
                        text="Dax Patel"
                        revealText="Engineer"
                        className="bg-transparent border-none w-auto p-0 flex flex-col items-center justify-center shadow-none"
                    >
                    </TextRevealCard>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
                >
                    A passionate developer showcasing my journey, skills, and connections to the world. I specialize in building high-quality web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="https://www.linkedin.com/in/dax-patel-835456348/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Connect on LinkedIn <FiArrowRight />
                    </a>
                    <a
                        href="#skills"
                        className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
                    >
                        Explore Skills
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full mt-20"
                >
                    <SparklesPreview />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
