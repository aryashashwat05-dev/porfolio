import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Looking for a Software/Web Development Internship. Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Contact Information</h3>

            <div className="space-y-6">
              <a
                href="mailto:aryashashwat05@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-emerald-400/50"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="text-white font-semibold">aryashashwat05@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+916390005858"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-cyan-400/50"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <p className="text-white font-semibold">+91 6390005858</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-white font-semibold">Jaipur, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aryashashwat05-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-emerald-400/50"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/shashwat-arya-4b0450285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/50"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 border border-emerald-400/30">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Message</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 resize-none"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 font-semibold">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed">
              <span className="text-emerald-400 font-semibold">Seeking Software/Web Development Internship</span>
              <br />
              Ready to apply technical skills, learn industry best practices, and contribute to impactful products
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-center text-slate-400">
          <p className="mb-2">Built with React, TypeScript, and TailwindCSS</p>
          <p>© 2024 Shashwat Arya. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}