import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin, Mail, Linkedin, Github, ExternalLink,
  Terminal, Code2, Server, Database, Cloud, Shield, Brain,
  ChevronRight, Award, GraduationCap, Languages, Cpu
} from "lucide-react";
import SplashScreen from "@/components/SplashScreen";

// ── Data ──────────────────────────────────────────────────────────────────────
const skills = [
  {
    icon: Code2,
    label: "LANGUAGES",
    color: "cyan",
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    icon: Terminal,
    label: "FRONTEND",
    color: "green",
    items: ["React", "Next.js", "Tailwind CSS", "Micro Frontends", "SSR/SSG", "Accessibility (WCAG)", "Webpack"],
  },
  {
    icon: Server,
    label: "BACKEND & APIs",
    color: "amber",
    items: ["FastAPI", "Django", "REST APIs", "GraphQL", "Microservices", "WebSockets"],
  },
  {
    icon: Database,
    label: "DATA & MESSAGING",
    color: "magenta",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Airflow"],
  },
  {
    icon: Cloud,
    label: "CLOUD & DEVOPS",
    color: "blue",
    items: ["AWS (EKS, ECS, SNS/SQS, S3, RDS, IAM)", "Docker", "Kubernetes", "CI/CD", "Ansible", "GitOps"],
  },
  {
    icon: Shield,
    label: "SECURITY & OBS.",
    color: "red",
    items: ["JWT", "OAuth2", "RBAC", "CloudWatch", "Prometheus", "Grafana"],
  },
  {
    icon: Brain,
    label: "AI & SEARCH",
    color: "cyan",
    items: ["LLM API Integration", "Vector Search", "RAG System"],
  },
];

const experience = [
  {
    company: "Commonwealth Bank",
    role: "Platform Engineer",
    period: "Apr 2025 – Present",
    location: "Bengaluru, Karnataka",
    stack: ["FastAPI", "React", "PostgreSQL", "Ansible", "Airflow", "GitOps", "K8s"],
    summary: "Build and operate platform services for regulated banking systems on AWS EKS with GitOps and observability.",
    bullets: [
      "Develop FastAPI microservices on AWS EKS and enhance React-based platform tooling, improving reliability and release stability.",
      "Implement monitoring and alerting using CloudWatch, Prometheus, and Grafana, improving incident detection and reducing MTTD.",
      "Standardize deployments and environment configuration using GitOps and Ansible, reducing configuration drift across environments.",
    ],
    current: true,
    level: 4,
    xp: 92,
  },
  {
    company: "Aspire Systems",
    role: "Module Lead",
    period: "Jul 2023 – Apr 2025",
    location: "Bengaluru, Karnataka",
    stack: ["TypeScript", "Next.js", "Tailwind", "FastAPI", "MongoDB", "EKS", "SNS"],
    summary: "Led modernization of a high-traffic web platform through micro-frontends.",
    bullets: [
      "Led a distributed team of 5 engineers, increasing delivery capacity by 75% within 3 months through structured onboarding and mentorship.",
      "Built and optimized Next.js applications serving 500K+ monthly users, reducing load time by 30% via SSR optimization.",
      "Implemented micro-frontend architecture enabling independent deployment of 5+ modules, reducing release cycles by 25%.",
      "Designed and deployed AWS-based microservices using EKS and SNS, improving scalability by 60% and reducing service coupling by 35%.",
    ],
    level: 3,
    xp: 78,
  },
  {
    company: "Sonata Software",
    role: "Digital Engineer",
    period: "Aug 2021 – Jul 2023",
    location: "Bengaluru, Karnataka",
    stack: ["JavaScript", "React", "Zustand", "Django", "MongoDB", "ECS", "S3"],
    summary: "Expanded from frontend to full stack ownership on a high-availability ticketing system.",
    bullets: [
      "Developed and maintained a ferry ticketing platform processing 50K+ transactions per month with 99.9% uptime.",
      "Expanded responsibilities to backend API development and integrations, improving data handling efficiency by 40%.",
      "Led code reviews and enforced best practices, improving code quality by 15%.",
    ],
    level: 2,
    xp: 60,
  },
  {
    company: "Raylog Industries",
    role: "Web Developer",
    period: "Jan 2019 – Jul 2021",
    location: "Bengaluru, Karnataka",
    stack: ["JavaScript", "Express", "SCSS", "React", "Redux", "MySQL", "AWS"],
    summary: "Modernized React applications and built admin dashboards for operational visibility.",
    bullets: [
      "Improved application performance by 45% by refactoring a legacy React codebase into modular components.",
      "Built real-time admin dashboards with interactive visualizations to improve operational visibility.",
    ],
    level: 1,
    xp: 40,
  },
];

const certifications = [
  { title: "AppSec Champion", issuer: "Secure Code Warrior – 2025", org: "Commonwealth Bank, Bengaluru", badge: "🛡️" },
  { title: "Performance Optimization Specialist", issuer: "Internal Recognition for System Performance Improvements", org: "Commonwealth Bank, Bengaluru", badge: "⚡" },
  { title: "Play To Win Award", issuer: "Top performance and innovation in delivering impactful solutions", org: "Sonata Software, Bengaluru", badge: "🏆" },
  { title: "Web Wizard Award", issuer: "Excellence in web development and exceeding project goals", org: "Raylog Industries, Bengaluru", badge: "⭐" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const colorMap: Record<string, string> = {
  green: "text-glow-green border-primary",
  cyan: "text-glow-cyan",
  amber: "text-glow-amber",
  magenta: "text-[hsl(300_100%_65%)] [text-shadow:0_0_8px_hsl(300_100%_65%/0.9),0_0_20px_hsl(300_100%_65%/0.4)]",
  blue: "text-[hsl(220_100%_70%)] [text-shadow:0_0_8px_hsl(220_100%_70%/0.9),0_0_20px_hsl(220_100%_70%/0.4)]",
  red: "text-[hsl(0_100%_65%)] [text-shadow:0_0_8px_hsl(0_100%_65%/0.9),0_0_20px_hsl(0_100%_65%/0.4)]",
};

// ── Components ────────────────────────────────────────────────────────────────
function SectionHeading({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-glow-green font-['Press_Start_2P'] text-[10px]">▶▶</span>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-glow-green" style={{ filter: 'drop-shadow(0 0 6px hsl(120 100% 50%/0.9))' }} />
          <h2 className="font-['Press_Start_2P'] text-xs sm:text-sm text-glow-green tracking-wider">{title}</h2>
        </div>
        {subtitle && <span className="text-[10px] text-muted-foreground font-['Share_Tech_Mono']">{subtitle}</span>}
      </div>
      <div className="flex items-center gap-1">
        <div className="h-0.5 w-4 bg-primary" style={{ boxShadow: 'var(--crt-glow)' }} />
        <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, hsl(120 100% 50% / 0.6), hsl(120 100% 50% / 0.1), transparent)' }} />
      </div>
    </div>
  );
}

function PixelBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`retro-card transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}

function XPBar({ value, max = 100, color = "green" }: { value: number; max?: number; color?: string }) {
  const pct = Math.round((value / max) * 100);
  const fillColor = color === "amber" ? "linear-gradient(90deg, hsl(38 100% 35%), hsl(38 100% 55%))" : "linear-gradient(90deg, hsl(120 100% 35%), hsl(120 100% 55%))";
  const glowColor = color === "amber" ? "0 0 6px hsl(38 100% 50%/0.8)" : "0 0 6px hsl(120 100% 50%/0.8)";
  return (
    <div className="hp-bar flex-1">
      <div className="hp-bar-fill" style={{ width: `${pct}%`, background: fillColor, boxShadow: glowColor }} />
    </div>
  );
}

function SkillCard({ icon: Icon, label, items, color }: { icon: React.ElementType; label: string; items: string[]; color: string }) {
  const headingColor = colorMap[color] || "text-glow-green";
  return (
    <PixelBox className="p-4 group cursor-default">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-muted-foreground text-xs">{">"}</span>
        <Icon className={`w-3.5 h-3.5 ${headingColor}`} />
        <span className={`text-[9px] font-['Press_Start_2P'] tracking-widest ${headingColor}`}>{label}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="pixel-tag">{item}</span>
        ))}
      </div>
    </PixelBox>
  );
}

function ExperienceCard({ job }: { job: typeof experience[0] }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-8 last:pb-0">
      {/* Timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, hsl(120 100% 50%/0.7), hsl(120 100% 50%/0.1))' }} />
      {/* Level indicator dot */}
      <div className={`absolute left-[-5px] top-3 w-2.5 h-2.5 border-2 ${job.current ? "bg-primary border-primary" : "bg-muted border-border"}`}
        style={job.current ? { boxShadow: 'var(--crt-glow)' } : {}} />

      <PixelBox className="p-4 sm:p-5">
        {/* Header row */}
        <div className="flex flex-col gap-1.5 mb-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-['Press_Start_2P'] text-[10px] sm:text-xs text-glow-amber">{job.company}</h3>
              {job.current && (
                <span className="pixel-tag text-[9px]" style={{ color: 'hsl(120 100% 60%)', borderColor: 'hsl(120 100% 40%)' }}>
                  ● ACTIVE
                </span>
              )}
            </div>
            <p className="text-sm text-glow-cyan font-['Share_Tech_Mono']">// {job.role}</p>
          </div>
          <div className="flex flex-row sm:flex-col sm:text-right items-center sm:items-end gap-2 sm:gap-0.5 text-xs text-muted-foreground flex-wrap">
            <span className="font-['Share_Tech_Mono']">{job.period}</span>
            <span className="flex items-center gap-1 font-['Share_Tech_Mono']">
              <MapPin className="w-3 h-3 shrink-0" />{job.location}
            </span>
          </div>
        </div>

        {/* Level + XP bar */}
        <div className="flex items-center gap-3 mb-3 p-2 bg-muted/50 border border-border/50">
          <span className="font-['Press_Start_2P'] text-[8px] text-glow-green whitespace-nowrap">LVL {job.level}</span>
          <XPBar value={job.xp} />
          <span className="font-['Share_Tech_Mono'] text-[10px] text-muted-foreground whitespace-nowrap">{job.xp} XP</span>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {job.stack.map((t) => (
            <span key={t} className="pixel-tag">{t}</span>
          ))}
        </div>

        <p className="text-xs text-muted-foreground font-['Share_Tech_Mono'] italic mb-3 leading-relaxed">
          {"> "}{job.summary}
        </p>

        <ul className="space-y-2">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-xs font-['Share_Tech_Mono'] leading-relaxed" style={{ color: 'hsl(120 60% 70%)' }}>
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </PixelBox>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && <SplashScreen onStart={() => setStarted(true)} />}
    <div
      className="min-h-screen bg-background crt-screen relative"
      style={{
        transition: "opacity 0.5s ease",
        opacity: started ? 1 : 0,
        pointerEvents: started ? "auto" : "none",
      }}
    >
      <div className="star-field" />

      {/* Marquee ticker */}
      <div className="marquee-text border-b border-border/50 py-1 px-0 overflow-hidden bg-muted/30">
        <span className="marquee-inner">
          {Array(3).fill("★ PAVAN AMBEKAR  //  SENIOR FULL STACK ENGINEER  //  7+ YEARS  //  REACT · PYTHON · AWS  //  BENGALURU, INDIA  //  AVAILABLE FOR OPPORTUNITIES  ★  ").join("")}
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-10">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <header className="mb-10">
          {/* Boot prompt */}
          <div className="font-['Share_Tech_Mono'] text-xs text-muted-foreground mb-4 space-y-0.5">
            <p><span className="text-glow-green">SYSTEM</span> : Booting resume.exe...</p>
            <p><span className="text-glow-green">SYSTEM</span> : Loading player profile... <span className="text-glow-amber">OK</span></p>
            <p><span className="text-glow-green">SYSTEM</span> : All modules loaded. <span className="blink text-glow-green">_</span></p>
          </div>

          <div className="pixel-border p-4 sm:p-6">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" style={{ boxShadow: 'var(--crt-glow)' }} />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" style={{ boxShadow: 'var(--crt-glow)' }} />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" style={{ boxShadow: 'var(--crt-glow)' }} />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" style={{ boxShadow: 'var(--crt-glow)' }} />

            {/* PLAYER SELECT title bar */}
            <div className="font-['Press_Start_2P'] text-[8px] text-muted-foreground mb-4 flex items-center justify-between">
              <span>[ PLAYER SELECT ]</span>
              <span className="text-glow-amber">★★★★☆</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Avatar pixel art placeholder */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 border-border flex items-center justify-center"
                style={{ background: 'hsl(240 25% 10%)', boxShadow: 'inset 0 0 12px hsl(120 100% 50%/0.1)' }}>
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: 'hsl(120 100% 50%)', filter: 'drop-shadow(0 0 6px hsl(120 100% 50%/0.8))' }} />
              </div>

              <div className="flex-1">
                <h1 className="font-['Press_Start_2P'] text-base sm:text-2xl text-glow-green mb-1 leading-tight">
                  PAVAN<br className="sm:hidden" /> AMBEKAR
                </h1>
                <p className="font-['Share_Tech_Mono'] text-sm text-glow-cyan mb-2">Senior Full Stack Engineer</p>
                <p className="font-['Share_Tech_Mono'] text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 shrink-0" /> Bengaluru, India
                </p>

                {/* Stats bars */}
                <div className="space-y-1.5">
                  {[
                    { stat: "FULL STACK", val: 95 },
                    { stat: "CLOUD/DEVOPS", val: 85 },
                    { stat: "AI/ML OPS", val: 70 },
                  ].map(({ stat, val }) => (
                    <div key={stat} className="flex items-center gap-2">
                      <span className="font-['Press_Start_2P'] text-[7px] text-muted-foreground w-20 shrink-0">{stat}</span>
                      <XPBar value={val} />
                      <span className="font-['Share_Tech_Mono'] text-[10px] text-muted-foreground w-8 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Separator className="my-4" style={{ background: 'hsl(120 60% 25% / 0.5)' }} />

            {/* Contact links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
              {[
                { href: "mailto:pavan.ambekarr@gmail.com", icon: Mail, label: "pavan.ambekarr@gmail.com" },
                { href: "https://linkedin.com/in/pavan-ambekar", icon: Linkedin, label: "linkedin.com/in/pavan-ambekar" },
                { href: "https://github.com/pavan-ambekar", icon: Github, label: "github.com/pavan-ambekar" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-2.5 py-2 px-2 text-xs font-['Share_Tech_Mono'] text-muted-foreground hover:text-primary transition-colors min-h-[44px] border border-transparent hover:border-border/50">
                  <span className="text-glow-green">{">"}</span>
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>

            <div className="p-3 border border-border/50 bg-muted/30 font-['Share_Tech_Mono'] text-xs leading-relaxed" style={{ color: 'hsl(120 60% 75%)' }}>
              <span className="text-glow-green text-[10px]">README.txt: </span>
              Senior Full Stack Engineer with{" "}
              <span className="text-glow-green font-bold">7+ years</span> of experience building scalable, cloud-native web
              applications using{" "}
              <span className="text-glow-cyan">React</span> and{" "}
              <span className="text-glow-cyan">Python</span>. Experienced in microservices, AWS
              deployments, and performance optimization for high-availability products. Delivered{" "}
              <span className="text-glow-amber">AI-enabled features</span> (LLM integrations) as part of modern product capabilities.
            </div>
          </div>
        </header>

        {/* ── PLAYER STATS ─────────────────────────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={Code2} title="PLAYER STATS" subtitle="// technical skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <SkillCard key={s.label} {...s} />
            ))}
          </div>
        </section>

        {/* ── QUEST LOG ────────────────────────────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={Terminal} title="QUEST LOG" subtitle="// professional experience" />
          <div>
            {experience.map((job) => (
              <ExperienceCard key={job.company} job={job} />
            ))}
          </div>
        </section>

        {/* ── TRAINING ARC ─────────────────────────────────────────────────── */}
        <section className="mb-10 sm:mb-12">
          <SectionHeading icon={GraduationCap} title="TRAINING ARC" subtitle="// education" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { degree: "B.E., Electronics & Communication Engineering", school: "Ballari Institute of Technology & Management (BITM)", year: "2021", location: "Ballari, Karnataka" },
              { degree: "Diploma, Electronics & Communication", school: "HSK Polytechnic", year: "2018", location: "Ballari, Karnataka" },
            ].map((edu) => (
              <PixelBox key={edu.school} className="p-4">
                <p className="font-['Press_Start_2P'] text-[8px] text-glow-amber leading-relaxed mb-2">{edu.degree}</p>
                <p className="font-['Share_Tech_Mono'] text-sm text-glow-cyan">{edu.school}</p>
                <div className="flex items-center justify-between mt-3 text-[10px] text-muted-foreground font-['Share_Tech_Mono']">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 shrink-0" />{edu.location}</span>
                  <span className="text-glow-green font-bold">{edu.year}</span>
                </div>
              </PixelBox>
            ))}
          </div>
        </section>

        {/* ── ACHIEVEMENTS ──────────────────────────────────────────────────── */}
        <section className="mb-10 sm:mb-12">
          <SectionHeading icon={Award} title="ACHIEVEMENTS" subtitle="// certifications & awards" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <PixelBox key={c.title} className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0 mt-0.5">{c.badge}</span>
                  <div>
                    <p className="font-['Press_Start_2P'] text-[8px] text-glow-amber leading-relaxed mb-1">{c.title}</p>
                    <p className="font-['Share_Tech_Mono'] text-xs text-muted-foreground leading-relaxed">{c.issuer}</p>
                    <p className="font-['Share_Tech_Mono'] text-[10px] text-glow-green mt-1.5">{c.org}</p>
                  </div>
                </div>
              </PixelBox>
            ))}
          </div>
        </section>

        {/* ── LANGUAGES ─────────────────────────────────────────────────────── */}
        <section className="mb-8">
          <SectionHeading icon={Languages} title="LANGUAGES" subtitle="// spoken & written" />
          <div className="flex flex-wrap gap-2">
            {["English", "Hindi", "Kannada", "Telugu", "Marathi"].map((lang) => (
              <span key={lang}
                className="font-['Press_Start_2P'] text-[8px] px-4 py-3 min-h-[44px] flex items-center"
                style={{
                  background: 'hsl(240 25% 8%)',
                  border: '2px solid hsl(120 60% 25%)',
                  color: 'hsl(120 100% 70%)',
                  boxShadow: 'inset -2px -2px 0 hsl(120 60% 10%), inset 2px 2px 0 hsl(120 100% 60%/0.1)',
                }}>
                {lang}
              </span>
            ))}
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer className="text-center pt-6 border-t border-border/40">
          <div className="font-['Press_Start_2P'] text-[8px] text-muted-foreground mb-2">
            — GAME OVER? NAH. —
          </div>
          <a
            href="https://github.com/pavan-ambekar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-['Share_Tech_Mono'] text-muted-foreground hover:text-primary transition-colors py-2 px-3 min-h-[44px]"
          >
            <span className="text-glow-green">//</span>
            Built with React · GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
          <p className="font-['Press_Start_2P'] text-[7px] text-muted-foreground mt-1">
            INSERT COIN TO CONTINUE <span className="blink">▮</span>
          </p>
        </footer>

      </div>
    </div>
    </>
  );
};

export default Index;
