import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <p className="text-teal-500 font-medium mb-4 animate-fadeIn">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slideUp">
            KARTHEEK
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 dark:text-slate-400 mb-6 animate-slideUp animation-delay-100">
            I build things for the web.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 animate-slideUp animation-delay-200">
            I'm a Front end developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn animation-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-500 text-white rounded-md font-medium hover:bg-teal-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-teal-500 text-teal-500 dark:text-teal-400 rounded-md font-medium hover:bg-teal-500/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors animate-bounce"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;