import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Annekartheek', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://x.com/AnneK6598', label: 'Twitter' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/anne-devi-sai-kartheek-a5b3b9278/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/karthik.anne/?next=%2F&hl=en', label: 'Instagram' }
  ];

  return (
    <footer className="py-8 bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:text-teal-500 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-center">
            <p>&copy; {currentYear} All rights reserved.</p>
            <p className="text-sm mt-1">Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;