import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Builder'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl animate-float"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-500">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold">
                SA
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Shashwat Arya
          </h1>

          <div className="h-20 mb-8">
            <p className="text-2xl md:text-3xl text-emerald-300">
              <span className="border-r-2 border-emerald-400 pr-1 animate-blink">{text}</span>
            </p>
          </div>

          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            B.Tech Computer Science student specializing in AI & Data Science.
            Building innovative web applications with React, Next.js, and modern technologies.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <a
              href="mailto:aryashashwat05@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="https://github.com/aryashashwat05-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shashwat-arya-4b0450285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Jaipur, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 6390005858</span>
            </div>
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-emerald-400" />
        </div>
      </div>
    </section>
  );
}