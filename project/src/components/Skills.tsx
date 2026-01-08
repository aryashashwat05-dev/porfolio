import { useState } from 'react';
import { Code, Layers, Database, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      icon: Code,
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
      ]
    },
    frontend: {
      icon: Layers,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    backend: {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'Node.js/Express', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Firestore', level: 85 },
      ]
    },
    tools: {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Netlify/Vercel', level: 85 },
        { name: 'Windsurf', level: 80 },
      ]
    },
    concepts: {
      icon: Sparkles,
      title: 'Core Concepts',
      skills: [
        { name: 'Web Architecture', level: 85 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'Algorithms', level: 80 },
      ]
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/50 scale-105'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-3xl font-bold mb-8 text-center text-emerald-400">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <span className="text-emerald-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-emerald-400 mb-2">4+</div>
              <div className="text-slate-400">Certifications</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
              <div className="text-slate-400">Projects</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2+</div>
              <div className="text-slate-400">Years Learning</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1</div>
              <div className="text-slate-400">Publication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}