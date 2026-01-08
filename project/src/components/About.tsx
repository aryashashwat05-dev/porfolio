import { Award, BookOpen, Code2, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Building end-to-end applications with React, Next.js, Firebase, and modern web technologies'
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Project-driven learning approach with hands-on experience in real-world applications'
    },
    {
      icon: Award,
      title: 'AI & Data Science',
      description: 'Specializing in Artificial Intelligence with practical experience in Python and OpenCV'
    },
    {
      icon: BookOpen,
      title: 'Published Researcher',
      description: 'Co-authored research on Water Quality Analysis by Artificial Intelligence'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-emerald-400">Who I Am</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Motivated B.Tech Computer Science student (Expected 2027) with a passion for building
                innovative solutions. I specialize in frontend and full-stack development with hands-on
                project experience.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                My approach combines practical problem-solving with continuous learning. I believe in
                learning by building real applications that solve actual problems, constantly refining
                and improving my craft.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">What I Do</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I build full-stack web applications with focus on clean architecture, user experience,
                and modern design principles. From secure voting platforms to optimization utilities,
                I create solutions that are both functional and elegant , using Prompt Engineering.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-400/30">
          <p className="text-center text-xl text-slate-300 leading-relaxed">
            <span className="text-emerald-400 font-semibold">Currently seeking</span> a Software/Web Development
            Internship to apply my technical skills, learn industry best practices, and contribute to
            impactful products while gaining real-world experience.
          </p>
        </div>
      </div>
    </section>
  );
}