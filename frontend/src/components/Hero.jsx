import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SparklesPreview } from './SparklesPreview';
import { TextRevealCard } from '../ui/text-reveal-card';
import { FlipWords } from '../ui/flip-words';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
                                HELLO, I'M
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full mb-6"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-2 pb-2">
                                Dax Patel
                            </h1>
                            <div className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                I am a
                                <FlipWords words={["Web Developer", "AI/ML Enthusiast", "Engineer", "Problem Solver"]} className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-bold" />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed"
                        >
                            A passionate developer showcasing my journey, skills, and connections to the world. I specialize in building high-quality web experiences focused on clean code and modern design.
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
                                className="px-6 py-3 bg-transparent border border-indigo-500/50 text-indigo-600 dark:text-indigo-400 rounded-full font-medium transition-all duration-300 hover:bg-indigo-500/10 flex items-center justify-center gap-2"
                            >
                                Explorer Skills
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center relative order-1 lg:order-2"
                    >
                        {/* Glowing Ring Effect */}
                        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>

                        {/* Profile Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/50">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
                                <img
                                    src={profileImg}
                                    alt="Dax Patel"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl hidden md:flex items-center gap-4 transform rotate-3 hover:rotate-0 transition-all duration-300">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-xl">🚀</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Open to Work</p>
                                    <p className="text-slate-400 text-xs">Hirings for 2026</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Text Reveal / Sparkles at bottom if needed, or integrated differently */}
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
