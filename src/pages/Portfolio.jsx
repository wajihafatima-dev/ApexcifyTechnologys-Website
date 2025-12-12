import { useState } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ThumbnailWithFallback } from '../components/ThumbnailWithFallback';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjU1MDQ5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Mobile application for healthcare providers featuring appointment scheduling, patient records, and telemedicine capabilities.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTIwNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure',
    category: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure setup with automated deployment, monitoring, and disaster recovery systems.',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1NTAxOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    title: 'AI Chatbot Platform',
    category: 'AI & ML',
    description: 'Intelligent chatbot platform powered by natural language processing for customer service automation.',
    image: 'https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY1NTE4ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Python', 'TensorFlow', 'GPT-4', 'FastAPI'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 5,
    title: 'Financial Dashboard',
    category: 'Web Development',
    description: 'Comprehensive financial analytics dashboard with real-time data visualization and reporting tools.',
    image: 'https://images.unsplash.com/photo-1693880269221-c064425aa8a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTUzMDc2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Vue.js', 'D3.js', 'PostgreSQL', 'Express'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'Mobile fitness application with workout tracking, nutrition planning, and social features.',
    image: 'https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjU1MTU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Flutter', 'Firebase', 'GraphQL', 'Node.js'],
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'AI & ML'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </Motion.div>

        <Motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <ThumbnailWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-slate-900 px-6 py-3 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                    <h3 className="text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400 px-3 py-1">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  );
}
