"use client";

import React, { useState, useEffect } from 'react';

// Custom hook for typing effect
function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  
  return displayedText;
}

export default function Home() {
  const nameText = useTypingEffect("Nisith Abeywardana", 80, 500);
  const subtitleText = useTypingEffect("Cybersecurity Enthusiast & CSIT Magnet Student", 40, 2000);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-sans">
      {/* Background Effect */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-background to-background opacity-80"></div>
      
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold font-mono text-primary tracking-tighter hover:glow-text transition-all cursor-pointer">
            <span className="text-white">~</span>/nisith
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-mono text-gray-400">
            <a href="#about" className="hover:text-primary transition-colors">./about.sh</a>
            <a href="#skills" className="hover:text-primary transition-colors">./skills.sh</a>
            <a href="#experience" className="hover:text-primary transition-colors">./experience.sh</a>
            <a href="#leadership" className="hover:text-primary transition-colors">./leadership.sh</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* Hero Section */}
        <section id="about" className="flex flex-col items-start justify-center min-h-[60vh] space-y-6">
          <div className="inline-flex items-center px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-sm rounded-full mb-4 cursor-default hover:bg-primary/20 transition-colors">
            <span className="animate-pulse mr-2">●</span> Class of 2028 | 4.0 GPA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight h-20 md:h-24">
            Hi, I'm <span className="text-primary glow-text">{nameText}</span>
            <span className="text-primary animate-blink">_</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-light h-8 md:h-10">
            {subtitleText}
          </h2>
          <p className="max-w-2xl text-gray-500 leading-relaxed text-lg pt-4">
            High School Sophomore at Middleton High School CSIT Magnet and Hillsborough College Dual Enrollment Student. 
            Passionate about information security, competitive CTFs, robotics, and leadership.
          </p>
          <div className="flex gap-4 pt-6">
            <a href="#contact" className="px-6 py-3 bg-primary text-background font-semibold rounded hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 font-mono">
              Initialize Contact
            </a>
            <a href="#experience" className="px-6 py-3 border border-white/20 hover:border-primary/50 hover:text-primary text-white font-semibold rounded hover:scale-105 transition-all duration-300 font-mono">
              View Logs
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <h3 className="text-3xl font-bold font-mono border-b border-white/10 pb-4 inline-block group">
            <span className="text-primary group-hover:glow-text transition-all">#</span> cat skills_and_certs.txt
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-primary font-mono text-lg mb-3">» Certifications</h4>
              <div className="flex flex-wrap gap-3">
                {["CompTIA Tech+", "ITS Device Configuration", "CIW JavaScript Specialist", "Javascript Coding Specialist"].map(cert => (
                  <span key={cert} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-mono hover:border-primary/50 hover:text-primary hover:scale-105 hover:bg-primary/10 transition-all cursor-default">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 border border-white/5 bg-white/5 rounded backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 group">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <span className="text-primary">{'//'}</span> Programming & Logic
                </h4>
                <p className="text-gray-400 text-sm">Python, JavaScript, foundational C, Assembly, and coding logic principles.</p>
              </div>
              <div className="p-5 border border-white/5 bg-white/5 rounded backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 group">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <span className="text-primary">{'//'}</span> Operating Systems & Tools
                </h4>
                <p className="text-gray-400 text-sm">Linux (Ubuntu/Debian), Windows Configuration, Bash, CLI.</p>
              </div>
              <div className="p-5 border border-white/5 bg-white/5 rounded backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 group">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <span className="text-primary">{'//'}</span> Cybersecurity
                </h4>
                <p className="text-gray-400 text-sm">Vulnerability Identification, System Hardening, Network Security.</p>
              </div>
              <div className="p-5 border border-white/5 bg-white/5 rounded backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 group">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <span className="text-primary">{'//'}</span> Database Management
                </h4>
                <p className="text-gray-400 text-sm">Relational database design, data entry, structure planning, organization concepts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Achievements Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <h3 className="text-3xl font-bold font-mono border-b border-white/10 pb-4 inline-block group">
            <span className="text-primary group-hover:glow-text transition-all">#</span> ls -la /experience
          </h3>
          <div className="grid md:grid-cols-1 gap-6">

            <div className="group p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-lg hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-sm text-primary group-hover:glow-text transition-all">01_Internship.exe</div>
                <div className="text-xs text-primary font-mono border border-primary/30 px-2 py-1 rounded-full bg-primary/10">Present</div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                Intern @ Make It Viral Media & Technologies
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Contributing as an intern, applying technical proficiency and supporting technology workflows in a professional, fast-paced media environment.
              </p>
            </div>

            <div className="group p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-lg hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-sm text-primary group-hover:glow-text transition-all">02_CyberPatriot.exe</div>
                <div className="text-xs text-gray-500 font-mono">1st Place FL State (Platinum)</div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                CyberPatriot Linux Lead & Subject Matter Expert
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineered and taught a custom Linux security curriculum to 3 competitive school teams, leading the chapter to a 1st Place Florida State Championship finish in the Platinum Tier.
              </p>
            </div>

            <div className="group p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-lg hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-sm text-primary group-hover:glow-text transition-all">03_Lockheed_Martin.exe</div>
                <div className="text-xs text-gray-500 font-mono">2nd Place Nationally</div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                CYBERQUEST & UACTF Competitor
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Secured 2nd place out of a national pool by engineering real-time attack/defense strategies and solving multi-layered challenges in cryptography, reverse engineering, and network security under strict time constraints.
              </p>
            </div>

            <div className="group p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-lg hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-sm text-primary group-hover:glow-text transition-all">04_FBLA_Cybersecurity.exe</div>
                <div className="text-xs text-gray-500 font-mono">5th Place FL State</div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                FBLA Cybersecurity State & District Competitor
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Secured 5th Place in the State of Florida at the FBLA State Leadership Conference (2026) and 2nd Place at the District Qualifier, demonstrating advanced knowledge in network security, information assurance, and incident response.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership & Extra Section */}
        <section id="leadership" className="space-y-8 scroll-mt-24">
          <h3 className="text-3xl font-bold font-mono border-b border-white/10 pb-4 inline-block group">
            <span className="text-primary group-hover:glow-text transition-all">#</span> ./execute_leadership.sh
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Leadership */}
            <div className="space-y-6">
              <div className="p-6 border border-white/5 bg-white/5 rounded backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300">
                <h4 className="text-primary font-mono text-lg mb-1">Vex Robotics Team 6260A Mercury</h4>
                <div className="text-white font-medium mb-3">Team Captain</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Manage strategic operations, build schedules, and programming workflows for a competitive robotics team to improve tournament performance.
                </p>
              </div>
              <div className="p-6 border border-white/5 bg-white/5 rounded backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300">
                <h4 className="text-primary font-mono text-lg mb-1">Scouting America</h4>
                <div className="text-white font-medium mb-3">Eagle Scout & Junior Assistant Scoutmaster</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Directed a comprehensive community service project involving budgeting, resource procurement, and volunteer management while progressing through multiple elected leadership tiers.
                </p>
              </div>
            </div>

            {/* Activities & Interests */}
            <div className="p-6 border border-white/5 bg-white/5 rounded backdrop-blur-sm h-full hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300">
              <h4 className="text-white font-bold mb-6 text-xl flex items-center gap-2">
                <span className="text-primary animate-pulse">■</span> Activities & Interests
              </h4>
              <ul className="space-y-5 text-gray-400 text-sm">
                <li className="flex items-start gap-3 group">
                  <span className="text-primary mt-1 group-hover:translate-x-1 transition-transform">▹</span> 
                  <span className="leading-relaxed"><strong>Interests:</strong> Varsity Baseball, 8-year Classical Pianist, Tenor Saxophone (Marching Band), Taekwondo (1st Degree Black Belt).</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary mt-1 group-hover:translate-x-1 transition-transform">▹</span> 
                  <span className="leading-relaxed"><strong>Community Service:</strong> Buddy Baseball Coach, AMROC Tampa Bay volunteer, Feeding Tampa Bay.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 mt-32 py-12 text-center text-gray-500 font-mono text-sm bg-black/20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-6 font-sans flex justify-center items-center gap-2">
            Initiate Connection <span className="text-primary animate-blink">_</span>
          </h3>
          <p className="mb-2 hover:text-gray-300 transition-colors cursor-default">Location: Tampa, FL</p>
          <p className="mb-2 hover:text-gray-300 transition-colors cursor-default">Phone: (656) 231-0894</p>
          <p className="mb-6 text-primary hover:glow-text transition-all cursor-default">Email: nisithabeywardana@gmail.com</p>
          
          <div className="mt-8 flex justify-center space-x-6 text-gray-400">
            <a href="mailto:nisithabeywardana@gmail.com" className="hover:text-primary transition-colors hover:glow-text hover:-translate-y-1 transform inline-block">
              [ Send Email ]
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
