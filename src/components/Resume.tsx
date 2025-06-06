const Resume = () => {
  return (
    <section id="resume" className="py-20 md:py-32 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">Download my resume below:</p>
          <a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

