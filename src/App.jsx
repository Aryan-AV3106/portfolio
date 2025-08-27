import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-purple-400">Aryan Vakharia</h1>
        <nav className="flex gap-6 text-gray-300">
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl text-center mt-12">
        <h2 className="text-4xl font-bold mb-4">Aspiring Machine Learning Engineer</h2>
        <p className="text-gray-400 text-lg">
          First-year CS student at UAlbany | Passionate about AI, NLP & LLMs | Building hands-on projects 🚀
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/Aryan-AV3106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/aryan-vakharia-894a03360"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full max-w-4xl mt-16">
        <h3 className="text-2xl font-bold text-purple-400 mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 hover:border-purple-500 transition">
            <h4 className="text-lg font-semibold">Expense Tracker</h4>
            <p className="text-gray-400 text-sm mt-2">
              A simple Python CLI app to manage expenses with SQLite.
            </p>
            <a
              href="https://github.com/Aryan-AV3106/expense-tracker"
              target="_blank"
              className="text-purple-400 hover:underline text-sm mt-3 inline-block"
            >
              View Code →
            </a>
          </div>
          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 hover:border-purple-500 transition">
            <h4 className="text-lg font-semibold">Info Explorer</h4>
            <p className="text-gray-400 text-sm mt-2">
              Multi-API CLI app fetching weather, country info, and NASA APOD.
            </p>
            <a
              href="https://github.com/Aryan-AV3106/info_explorer"
              target="_blank"
              className="text-purple-400 hover:underline text-sm mt-3 inline-block"
            >
              View Code →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl text-center mt-16 mb-10">
        <h3 className="text-2xl font-bold text-purple-400">Get In Touch</h3>
        <p className="text-gray-400 mt-3">
          Open to internships, collaborations, and AI/ML research opportunities.
        </p>
        <a
          href="mailto:avakharia@albany.edu"
          className="flex items-center justify-center gap-2 mt-5 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition"
        >
          <Mail size={18} /> Contact Me
        </a>
      </section>
    </div>
  );
}
