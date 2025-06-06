const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500 relative group">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFEa6U7wVZJJw/profile-displayphoto-shrink_400_400/B56ZWpSKoLGsAk-/0/1742301893180?e=1754524800&v=beta&t=e-SrSVUSs_l669nIjT9TS4XfDLHRmkH1hn4PRTDAXTk"
                  alt="KARTHEEK"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Hello! I'm Kartheek, I am currently pursing B-Tech final year in NRI INSTITUTE OF TECHONOLOGY. in CSE Department.I am the passoniate FrontEnd Developer. 
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                 My academic journey has equipped me with a solid foundation in web technologies, I have experience in HTML, CSS, JavaScript , Python , TypeScript.build dynamic and interactive web applications. My projects often focus on creating seamless user experiences, ensuring accessibility, and optimizing performance across devices.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">▹</span> HTML
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">▹</span> CSS
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">▹</span> JAVA SCRIPT
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">▹</span> TYPE SCRIPT
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">▹</span> PYTHON
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">▹</span> GIT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;