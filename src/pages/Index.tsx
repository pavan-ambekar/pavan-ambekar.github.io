import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin, Mail, Phone, Linkedin, Github, ExternalLink,
  Terminal, Code2, Server, Database, Cloud, Shield, Brain,
  ChevronRight, Award, GraduationCap, Languages
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const skills = [
  {
    icon: Code2,
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    icon: Terminal,
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Micro Frontends", "SSR/SSG", "Accessibility (WCAG)", "Webpack"],
  },
  {
    icon: Server,
    label: "Backend & APIs",
    items: ["FastAPI", "Django", "REST APIs", "GraphQL", "Microservices", "WebSockets"],
  },
  {
    icon: Database,
    label: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Airflow"],
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    items: ["AWS (EKS, ECS, SNS/SQS, S3, RDS, IAM)", "Docker", "Kubernetes", "CI/CD", "Ansible", "GitOps"],
  },
  {
    icon: Shield,
    label: "Security & Observability",
    items: ["JWT", "OAuth2", "RBAC", "CloudWatch", "Prometheus", "Grafana"],
  },
  {
    icon: Brain,
    label: "AI & Search",
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
  },
];

const certifications = [
  { title: "AppSec Champion", issuer: "Secure Code Warrior – 2025", org: "Commonwealth Bank, Bengaluru" },
  { title: "Performance Optimization Specialist", issuer: "Internal Recognition for System Performance Improvements", org: "Commonwealth Bank, Bengaluru" },
  { title: "Play To Win Award", issuer: "Top performance and innovation in delivering impactful solutions", org: "Sonata Software, Bengaluru" },
  { title: "Web Wizard Award", issuer: "Excellence in web development and exceeding project goals", org: "Raylog Industries, Bengaluru" },
];

// ── Components ────────────────────────────────────────────────────────────────
function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/30">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-lg font-semibold tracking-wide text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/20 to-transparent" />
    </div>
  );
}

function SkillCard({ icon: Icon, label, items }: { icon: React.ElementType; label: string; items: string[] }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card active:border-primary/40 hover:border-primary/40 transition-all duration-300 group">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mono">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50 mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ job }: { job: typeof experience[0] }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
      {/* Timeline dot */}
      <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 ${job.current ? "bg-primary border-primary shadow-[0_0_8px_hsl(165_80%_55%/0.8)]" : "bg-muted border-border"}`} />

      <div className="group p-4 sm:p-5 rounded-lg border border-border bg-card active:border-primary/30 hover:border-primary/30 transition-all duration-300">
        {/* Header — stacks on mobile */}
        <div className="flex flex-col gap-1 mb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-base text-foreground">{job.company}</h3>
              {job.current && (
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/15 text-primary border border-primary/30 mono uppercase tracking-wider">
                  current
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-accent">{job.role}</p>
          </div>
          <div className="flex flex-row sm:flex-col sm:text-right items-center sm:items-end gap-2 sm:gap-0.5 text-xs text-muted-foreground mono flex-wrap">
            <span>{job.period}</span>
            <span className="hidden sm:block">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 shrink-0" />
              {job.location}
            </span>
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {job.stack.map((t) => (
            <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0.5 font-mono border-border/70 text-muted-foreground">
              {t}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground italic mb-3">{job.summary}</p>

        {/* Bullets */}
        <ul className="space-y-2">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-secondary-foreground leading-relaxed">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Index = () => {
  return (
    <div className="min-h-screen bg-background scanline">
      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-8">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <header className="mb-12">
          {/* Prompt prefix */}
          <div className="mono text-sm text-primary/60 mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>~/pavan-ambekar</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">cat resume.json</span>
          </div>

          <div className="p-6 rounded-xl border border-primary/20 bg-card glow-primary">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">
                  <span className="text-gradient-primary">Pavan Ambekar</span>
                </h1>
                <p className="text-base font-semibold text-accent mono tracking-wide">Senior Full Stack Engineer</p>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Bengaluru, India
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-sm mono">
                <a href="mailto:pavan.ambekarr@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> pavan.ambekarr@gmail.com
                </a>
                <a href="tel:+919036696269" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" /> +91 9036696269
                </a>
                <a href="https://linkedin.com/in/pavan-ambekar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/pavan-ambekar
                </a>
                <a href="https://github.com/pavan-ambekar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-3.5 h-3.5" /> github.com/pavan-ambekar
                </a>
              </div>
            </div>

            <Separator className="my-4 bg-border/60" />

            <p className="text-sm leading-relaxed text-secondary-foreground">
              Senior Full Stack Engineer with{" "}
              <span className="text-primary font-semibold">7+ years</span> of experience building scalable, cloud-native web
              applications using{" "}
              <span className="text-accent font-medium">React</span> and{" "}
              <span className="text-accent font-medium">Python</span>. Experienced in microservices-based systems, AWS
              deployments, and performance optimization for high-availability products. Also delivered{" "}
              <span className="text-primary font-medium">AI-enabled features</span> (LLM integrations) as part of modern
              product capabilities.
            </p>
          </div>
        </header>

        {/* ── Technical Skills ────────────────────────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={Code2} title="Technical Skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <SkillCard key={s.label} {...s} />
            ))}
          </div>
        </section>

        {/* ── Experience ──────────────────────────────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={Terminal} title="Professional Experience" />
          <div>
            {experience.map((job, i) => (
              <ExperienceCard key={job.company} job={job} index={i} />
            ))}
          </div>
        </section>

        {/* ── Education ───────────────────────────────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { degree: "B.E., Electronics & Communication Engineering", school: "Ballari Institute of Technology & Management (BITM)", year: "2021", location: "Ballari, Karnataka" },
              { degree: "Diploma, Electronics & Communication", school: "HSK Polytechnic", year: "2018", location: "Ballari, Karnataka" },
            ].map((edu) => (
              <div key={edu.school} className="p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300">
                <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                <p className="text-sm text-accent mt-0.5">{edu.school}</p>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground mono">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ──────────────────────────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={Award} title="Certifications & Achievements" />
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c.title} className="p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-all group duration-300">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}</p>
                    <p className="text-xs text-primary/70 mono mt-1">{c.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Languages ───────────────────────────────────────────────────────── */}
        <section className="mb-8">
          <SectionHeading icon={Languages} title="Languages" />
          <div className="flex flex-wrap gap-2">
            {["English", "Hindi", "Kannada", "Telugu", "Marathi"].map((lang) => (
              <span key={lang} className="px-3 py-1.5 rounded-md border border-border bg-card text-sm text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all duration-200 mono">
                {lang}
              </span>
            ))}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────────── */}
        <footer className="text-center pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground mono">
            <span className="text-primary/60">{"// "}</span>
            Built with React · Source on{" "}
            <a href="https://github.com/pavan-ambekar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Index;
