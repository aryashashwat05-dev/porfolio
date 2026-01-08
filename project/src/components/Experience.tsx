import { Briefcase, GraduationCap, Award, FileText } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech Computer Science',
      organization: 'Vivekananda Global University',
      location: 'Jaipur, India',
      period: 'June 2023 - Present',
      details: [
        'Specialization: Artificial Intelligence & Data Science',
        'CGPA: 7.5/10',
        'Department Event Coordinator (CSA) - October 2024'
      ],
      color: 'emerald'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Artificial Intelligence Intern',
      organization: 'Academor',
      location: 'Remote',
      period: 'Nov 2023 - Dec 2023',
      details: [
        'Built AI prototypes using Python, OpenCV, and automation workflows',
        'Applied computer vision concepts and system-level programming',
        'Strengthened problem-solving skills through guided tasks'
      ],
      color: 'cyan'
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Diploma in Computer Science Management',
      organization: 'Technosys',
      location: 'Jaipur, India',
      period: 'Apr 2016 - Jan 2018',
      details: [
        'Specialization: Hardware & Networking',
        'Foundation in computer systems and networking'
      ],
      color: 'emerald'
    }
  ];

  const certifications = [
    { name: 'Artificial Intelligence (Outstanding Performance)', org: 'Academor' },
    { name: 'Artificial Intelligence', org: 'EXIN' },
    { name: 'Cloud Computing', org: 'EXIN' },
    { name: 'SQL', org: 'IBM (Coursera)' }
  ];

  const publication = {
    title: 'A Review on Water Quality Analysis by Artificial Intelligence',
    journal: 'International Journal of Current Research and Academic Review',
    date: 'January 2024',
    authors: 'Aakriti Chauhan, Shashwat Arya, Tania Sharma, Deeplal'
  };

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`relative mb-12 ${isLeft ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`flex items-center gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block flex-1" />

                  <div className={`absolute left-8 md:left-1/2 w-16 h-16 -ml-8 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color === 'emerald' ? 'green' : 'blue'}-500 flex items-center justify-center border-4 border-slate-900 z-10`}>
                    <Icon size={24} />
                  </div>

                  <div className="flex-1 ml-24 md:ml-0">
                    <div className={`backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-${item.color}-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-${item.color}-500/20`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold text-${item.color}-400 mb-1`}>
                            {item.title}
                          </h3>
                          <p className="text-white font-semibold">{item.organization}</p>
                          <p className="text-slate-400 text-sm">{item.location}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full bg-${item.color}-500/20 text-${item.color}-400 text-sm whitespace-nowrap`}>
                          {item.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300">
                            <span className={`text-${item.color}-400 mt-1`}>▹</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-400">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="text-sm text-slate-400">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Publication</h3>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-white mb-2">{publication.title}</h4>
              <p className="text-sm text-slate-400 mb-2">{publication.journal}</p>
              <p className="text-sm text-slate-400 mb-3">{publication.date}</p>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-emerald-400">Authors:</span> {publication.authors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
