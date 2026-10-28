"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const EXPERTISE = [
  {
    title: "MERN Stack",
    description:
      "Full-stack applications built with MongoDB, Express, React and Node.js — architected for speed, clarity and scale.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    icon: CodeIcon,
  },
  {
    title: "WordPress",
    description:
      "Custom themes, WooCommerce stores and performance-tuned sites that stay effortless to manage.",
    tags: ["Custom Themes", "WooCommerce", "Elementor"],
    icon: WordPressIcon,
  },
  {
    title: "Article Writing",
    description:
      "Research-backed stories that inform, engage, and read unmistakably human from the first line.",
    tags: ["Research", "Long-form", "Editing"],
    icon: ArticleIcon,
  },
  {
    title: "Content Writing",
    description:
      "Website copy, landing pages and brand voice that turn quiet visitors into confident customers.",
    tags: ["Copywriting", "Brand Voice", "UX Copy"],
    icon: PenIcon,
  },
  {
    title: "SEO",
    description:
      "Technical audits, keyword strategy and on-page refinement that earn durable organic visibility.",
    tags: ["Technical SEO", "Keywords", "Analytics"],
    icon: SearchIcon,
  },
  {
    title: "Digital Marketing",
    description:
      "Social strategy, campaigns and email funnels designed around one thing: measurable growth.",
    tags: ["Strategy", "Social", "Email"],
    icon: MegaphoneIcon,
  },
];

const MARQUEE_ITEMS = [
  "MERN Stack",
  "WordPress",
  "Article Writing",
  "Content Writing",
  "SEO",
  "Digital Marketing",
  "Full-Stack Development",
];

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
      <path d="m13 4-2 16" />
    </svg>
  );
}

function WordPressIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M4.2 8.6h3.1l2.1 6.6 2.2-6.6h2.9l2 6.6 2.3-6.6h2.9" />
      <path d="M8.5 8.6 11 17.4 12 20" />
    </svg>
  );
}

function ArticleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function PenIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
      <path d="M8 11h6" />
      <path d="M11 8v6" />
    </svg>
  );
}

function MegaphoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m3 11 18-7-7 18-3-7z" />
      <path d="m11 15 4-4" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function GraduationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 9 12 4 2 9l10 5z" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold">
      <span className="font-mono">{index}</span>
      <span className="h-px w-10 bg-gold/40" />
      <span className="text-cream/60">{children}</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-cream/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className="absolute left-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold to-gold/40 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-display text-lg italic text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
            M
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-cream/70 sm:block">
            Mariya
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[11px] uppercase tracking-[0.22em] text-cream/60 transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-gold/60 hover:bg-gold hover:text-ink sm:flex"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-cream/10 bg-ink/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-80 border-b" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-6 pb-6 pt-2">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-cream/5 py-3 text-sm uppercase tracking-[0.18em] text-cream/75"
              >
                {link.label}
                <span className="font-mono text-[10px] text-gold/70">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#7a5c36]/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(245,240,231,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,231,0.055) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
            maskImage: "radial-gradient(ellipse 85% 65% at 50% 40%, black 30%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 65% at 50% 40%, black 30%, transparent 78%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/90">
                Available for freelance projects
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.04em] text-cream sm:text-7xl xl:text-[5.6rem]">
              <span className="block">Jannatul Islam</span>
              <span className="mt-1 block pr-4 font-display font-normal italic text-gradient-gold">
                Mariya
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Full-stack developer, WordPress specialist, and SEO-driven content
              strategist. I turn ideas into{" "}
              <span className="text-cream">fast, beautiful digital experiences</span>{" "}
              — and make sure the right people find them.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_40px_-8px_rgba(217,179,130,0.6)]"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#expertise"
                className="group inline-flex items-center gap-3 rounded-full border border-cream/15 px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-cream/80 transition-all duration-300 hover:border-gold/50 hover:text-cream"
              >
                Explore expertise
                <span className="h-px w-6 bg-cream/40 transition-all duration-300 group-hover:w-10 group-hover:bg-gold" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/10 pt-7">
              {[
                ["CSE", "Sonargaon University"],
                ["MERN", "Full-stack builds"],
                ["SEO", "Content & growth"],
              ].map(([big, small]) => (
                <div key={big} className="flex items-baseline gap-3">
                  <span className="font-display text-2xl italic text-gold">{big}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {small}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200} className="relative mx-auto max-w-md">
            <div className="absolute -inset-8 rounded-[3.5rem] bg-gold/10 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-cream/10 bg-gradient-to-b from-ink-card via-ink-soft to-ink">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,179,130,0.2),transparent_62%)]" />
              <div
                className="absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(245,240,231,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,0.05) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                  maskImage: "radial-gradient(circle at 50% 45%, black, transparent 72%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 45%, black, transparent 72%)",
                }}
              />

              <div className="relative flex items-center justify-between px-7 pt-7">
                <span className="text-[9px] uppercase tracking-[0.35em] text-cream/45">
                  Portfolio — 2026
                </span>
                <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-gold/80">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Open
                </span>
              </div>

              <div className="relative flex h-[62%] items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-cream/[0.08]" />
                <div className="spin-slow absolute h-52 w-52 rounded-full border border-dashed border-gold/25">
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
                </div>
                <div className="absolute h-40 w-40 rounded-full border border-cream/[0.07]" />
                <span className="relative font-display text-[8.5rem] leading-none text-gradient-gold opacity-90">
                  M
                </span>
                <span className="absolute bottom-4 right-8 font-display text-xl italic text-cream/40">
                  jm.
                </span>
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <div className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-muted">
                        Jannatul Islam Mariya
                      </p>
                      <p className="mt-1.5 font-display text-xl italic text-cream">
                        Developer &amp; storyteller
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 hover:rotate-45"
                      aria-label="Contact Mariya"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="floaty absolute -left-3 top-[28%] hidden rounded-full border border-cream/15 bg-ink/85 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-cream/80 backdrop-blur-md sm:block"
              style={{ "--rot": "-6deg" } as React.CSSProperties}
            >
              MERN Stack
            </div>
            <div
              className="floaty absolute -right-4 top-[46%] hidden rounded-full border border-gold/30 bg-ink/85 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-gold backdrop-blur-md sm:block"
              style={{ "--rot": "5deg", animationDelay: "1.2s" } as React.CSSProperties}
            >
              SEO &amp; Content
            </div>
            <div
              className="floaty absolute -right-2 bottom-[24%] hidden rounded-full border border-cream/15 bg-ink/85 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-cream/80 backdrop-blur-md sm:block"
              style={{ "--rot": "-4deg", animationDelay: "2.1s" } as React.CSSProperties}
            >
              WordPress
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee relative overflow-hidden border-y border-cream/10 bg-ink-soft/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 text-[11px] uppercase tracking-[0.35em] text-cream/55">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-gold/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel index="01">About</SectionLabel>
              <h2 className="mt-7 font-display text-4xl leading-[1.05] text-cream md:text-5xl">
                Where code meets{" "}
                <span className="italic text-gradient-gold">communication</span>
              </h2>
              <div className="mt-8 h-px w-full gold-line" />
              <p className="mt-8 font-display text-2xl italic leading-snug text-cream/55">
                &ldquo;Build it well. Then make sure it gets found.&rdquo;
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-cream/80 md:text-xl">
                I&apos;m Jannatul Islam Mariya — a Computer Science &amp; Engineering
                student at <span className="text-gold-soft">Sonargaon University</span>{" "}
                working at the intersection of development, content and growth.
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                On one side, I build responsive, full-stack products with the MERN
                stack and WordPress. On the other, I craft articles, website copy and
                SEO strategies that give those products a voice and an audience. That
                combination lets me take an idea from a blank page to a launched,
                discoverable brand.
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                I care about clean interfaces, fast load times, and writing that
                respects the reader. If you&apos;re building something meaningful,
                I&apos;d love to be part of it.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { value: "06", label: "Areas of expertise", sub: "Dev + content" },
                { value: "CSE", label: "Sonargaon University", sub: "B.Sc. ongoing" },
                { value: "Open", label: "For new projects", sub: "Freelance & full-time" },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={140 + i * 80}>
                  <div className="card-sheen h-full rounded-2xl border border-cream/10 bg-ink-card/60 p-6">
                    <p className="font-display text-3xl italic text-gold">{stat.value}</p>
                    <p className="mt-3 text-sm text-cream/80">{stat.label}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                      {stat.sub}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[28rem] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(217,179,130,0.07),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="02">Expertise</SectionLabel>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-[1.05] text-cream md:text-5xl">
              Six disciplines.{" "}
              <span className="italic text-gradient-gold">One standard.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              From the first line of code to the last search result — I cover the
              full journey of a digital product.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 80} className="h-full">
                <article
                  className="group relative h-full bg-ink p-8 transition-colors duration-500 hover:bg-ink-card md:p-10"
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
                    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
                  }}
                >
                  <div className="card-sheen absolute inset-0" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cream/10 bg-cream/[0.03] text-gold transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-cream/25">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-2xl text-cream">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cream/10 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-cream/50 transition-colors duration-500 group-hover:border-gold/20 group-hover:text-cream/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="03">Education</SectionLabel>
              <h2 className="mt-7 font-display text-4xl leading-[1.05] text-cream md:text-5xl">
                A foundation in{" "}
                <span className="italic text-gradient-gold">engineering</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Formal training in computer science, paired with hands-on work across
                real development and marketing projects.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-ink-card to-ink p-8 md:p-10">
                <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/10 blur-3xl" />

                <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.07] text-gold">
                      <GraduationIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                        Bachelor of Science
                      </p>
                      <h3 className="mt-2 font-display text-2xl leading-snug text-cream md:text-3xl">
                        Computer Science &amp; Engineering
                      </h3>
                      <p className="mt-2 text-sm text-cream/70">Sonargaon University</p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-gold">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    Ongoing
                  </span>
                </div>

                <div className="relative mt-10 border-t border-cream/10 pt-8">
                  <p className="text-sm leading-relaxed text-muted">
                    Building a strong foundation in software engineering, algorithms
                    and modern web technologies — while shipping real-world projects
                    alongside my studies.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Web Technologies",
                      "Algorithms",
                      "Databases",
                      "Problem Solving",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cream/10 bg-cream/[0.03] px-3.5 py-1.5 text-[9px] uppercase tracking-[0.15em] text-cream/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="card-sheen rounded-2xl border border-cream/10 bg-ink-card/60 p-6">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-muted">
                    Development
                  </p>
                  <p className="mt-2 font-display text-xl italic text-cream">
                    MERN &amp; WordPress
                  </p>
                </div>
                <div className="card-sheen rounded-2xl border border-cream/10 bg-ink-card/60 p-6">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-muted">
                    Strategy
                  </p>
                  <p className="mt-2 font-display text-xl italic text-cream">
                    Content, SEO &amp; growth
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cream/10 bg-gradient-to-b from-ink-card to-ink px-7 py-16 md:px-16 md:py-24">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/15 blur-[100px]" />
            <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-[#7a5c36]/25 blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,240,231,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,0.04) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage: "radial-gradient(ellipse at 50% 50%, black, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 50%, black, transparent 75%)",
              }}
            />

            <div className="relative text-center">
              <SectionLabel index="04">Contact</SectionLabel>
              <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
                Let&apos;s create something{" "}
                <span className="italic text-gradient-gold">worth remembering</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                Have a project, a role, or just an idea worth exploring? My inbox is
                always open.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:jannatul@pintu.com?subject=Project%20enquiry"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_50px_-10px_rgba(217,179,130,0.65)] sm:w-auto"
                >
                  <MailIcon className="h-4 w-4" />
                  jannatul@pintu.com
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="tel:+8801748284223"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-cream/15 px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-cream/85 transition-all duration-300 hover:border-gold/50 hover:text-cream sm:w-auto"
                >
                  <PhoneIcon className="h-4 w-4 text-gold" />
                  +880 1748-284223
                </a>
              </div>

              <div className="mx-auto mt-14 grid max-w-2xl gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-3">
                {[
                  ["Based in", "Dhaka, Bangladesh"],
                  ["Response", "Within 24 hours"],
                  ["Status", "Open to work"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-ink/80 px-5 py-5 backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-muted">
                      {label}
                    </p>
                    <p className="mt-1.5 text-sm text-cream/85">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 font-display text-base italic text-gold">
            M
          </span>
          <div>
            <p className="text-xs tracking-[0.15em] text-cream/80">
              JANNATUL ISLAM MARIYA
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-muted">
              Developer &amp; Digital Strategist
            </p>
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
          © {new Date().getFullYear()} — Designed &amp; built with intention
        </p>

        <a
          href="#top"
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-cream/60 transition-colors hover:text-gold"
        >
          Back to top
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold/50">
            <ArrowUpRight className="h-3 w-3 -rotate-45" />
          </span>
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
