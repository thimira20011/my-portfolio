import React, { useState, useEffect } from 'react';
import {
  BookOpenIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowDownCircleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/20/solid';
import { Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';

// Main App component
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to set initial theme based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  // All the data for the portfolio is stored here. You can easily edit it!
  const [portfolioData] = useState({
    name: "Thimira Niranjaya",
    title: "Software Developer",
    tagline: "Building beautiful and functional web applications.",
    profilePicUrl: "https://placehold.co/400x400/94A3B8/FFFFFF?text=Thimira", // Replace with your image URL
    resumeUrl: "#", // Replace with your resume's URL
    about: {
      bio: "Hello! I'm a passionate software developer with a knack for creating clean and efficient code. I specialize in front-end development and love to build user-friendly interfaces. My journey in tech started with a curiosity for how things work, and it has evolved into a career I love. In my free time, I enjoy reading, hiking, and exploring new technologies.",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Figma"]
    },
    projects: [
      {
        id: 1,
        title: "Project Alpha",
        description: "A dynamic web application for managing tasks and tracking progress. Built with React and a Node.js backend. Features include user authentication, real-time updates, and a clean user interface.",
        link: "https://github.com/your-username/project-alpha",
        techStack: ["React", "Node.js", "MongoDB"]
      },
      {
        id: 2,
        title: "Project Beta",
        description: "A collaborative note-taking application. Users can create, edit, and share notes with others. The application uses a real-time database and is designed to be highly scalable.",
        link: "https://github.com/your-username/project-beta",
        techStack: ["Vue.js", "Firebase", "CSS"]
      },
      {
        id: 3,
        title: "Portfolio Website",
        description: "This very website! A responsive and modern portfolio template built to showcase my projects and skills. Designed with a focus on simplicity and user experience.",
        link: "https://github.com/your-username/portfolio",
        techStack: ["React", "Tailwind CSS"]
      }
    ],
    socialLinks: {
      github: "https://github.com/your-username",
      linkedin: "https://linkedin.com/in/your-username",
      twitter: "https://twitter.com/your-username"
    },
    contact: {
      email: "jane.doe@example.com",
      phone: "+1 (555) 123-4567"
    }
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header data={portfolioData} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <About data={portfolioData.about} />
        <Projects data={portfolioData.projects} />
        <Contact data={portfolioData.contact} socialLinks={portfolioData.socialLinks} />
      </div>
    </div>
  );
}

// Header component for the hero section
const Header = ({ data, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="py-24 md:py-32 lg:py-40 text-center">
      <button
        onClick={toggleDarkMode}
        className="absolute top-8 right-8 p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-2 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{data.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300">
            {data.title}
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
            {data.tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              My Work
              <ArrowDownCircleIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={data.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              Download Resume
              <ArrowDownTrayIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img
            src={data.profilePicUrl}
            alt="Profile"
            className="w-full h-full rounded-full object-cover ring-4 ring-indigo-600 dark:ring-indigo-400 transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
};

// About Me component
const About = ({ data }) => {
  return (
    <section id="about" className="py-16 md:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        <UserIcon className="h-8 w-8 inline-block mr-2 text-indigo-600 dark:text-indigo-400" />
        About Me
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.bio}
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-full font-medium text-sm transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects component
const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 rounded-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        <BookOpenIcon className="h-8 w-8 inline-block mr-2 text-indigo-600 dark:text-indigo-400" />
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {data.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-500 transition duration-300 ease-in-out"
              >
                View on GitHub
                <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Me component
const Contact = ({ data, socialLinks }) => {
  // State for form fields
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(''); // 'success', 'error', or ''
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus('');

    try {
      // This is the endpoint for your serverless function
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setFormState({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setSubmissionStatus('error');
        console.error("Submission error:", result.message);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error("Network or fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        <EnvelopeIcon className="h-8 w-8 inline-block mr-2 text-indigo-600 dark:text-indigo-400" />
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <a href={`mailto:${data.email}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 ease-in-out">
                    {data.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">{data.phone}</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Find Me On</h3>
                <div className="flex space-x-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 ease-in-out"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 ease-in-out"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 ease-in-out"
                  >
                    <Twitter size={32} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>
                {submissionStatus === 'success' && (
                  <p className="text-green-500 text-sm">Message sent successfully!</p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-500 text-sm">Failed to send message. Please try again later.</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-white transition duration-300 ease-in-out ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
