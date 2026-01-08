import { ExternalLink, Github, Lock, Package } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AgoraVote',
      subtitle: 'Anonymous Student Voting System',
      description: 'A secure, privacy-first digital voting platform for student communities with privacy-preserving visualization techniques and real-time result dashboards.',
      tech: ['Next.js', 'React', 'TypeScript', 'Firebase', 'TailwindCSS'],
      features: [
        'Secure authentication & role-based access',
        'Privacy-preserving visualization (min-k anonymity)',
        'Real-time data synchronization',
        'Admin dashboard with analytics'
      ],
      icon: Lock,
      color: 'from-emerald-500 to-green-500',
      liveUrl: 'https://agoravote.netlify.app',
      githubUrl: 'https://github.com/aryashashwat05-dev/AgroVote',
      gradient: 'from-emerald-500/20 to-green-500/20'
    },
    {
      title: 'PackMaximize',
      subtitle: 'Optimization Utility Application',
      description: 'An optimization tool implementing the Fractional Knapsack algorithm to maximize value under constraints. Built with both Java and Python implementations.',
      tech: ['Java', 'Python', 'Algorithms', 'Data Structures'],
      features: [
        'Fractional Knapsack algorithm',
        'Cross-language implementation',
        'Greedy optimization approach',
        'Efficient space utilization'
      ],
      icon: Package,
      color: 'from-cyan-500 to-blue-500',
      githubUrl: 'https://github.com/aryashashwat05-dev/PackMaximize',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world applications built with modern technologies, focusing on clean architecture and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-400">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
                          <span className="text-emerald-400 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm text-slate-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex-1 justify-center"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 flex-1 justify-center"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/aryashashwat05-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 rounded-full hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
          >
            <Github size={20} />
            <span>View More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}