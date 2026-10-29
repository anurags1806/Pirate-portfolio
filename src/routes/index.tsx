import { createFileRoute } from "@tanstack/react-router";
import heroSea from "@/assets/hero-sea.jpg";
import wanted from "@/assets/wanted.jpg";
import {
  CountUp,
  Reveal,
  Waves,
  useScrollProgress,
  useScrolled,
} from "@/components/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anurag Singh — Wanted: Backend Engineer" },
      { name: "description", content: "Anurag Singh, SDE-2 backend engineer (Java, Go, Kafka, ScyllaDB, GCP). A One Piece–inspired portfolio." },
      { property: "og:title", content: "Anurag Singh — Wanted: Backend Engineer" },
      { property: "og:description", content: "SDE-2 backend engineer building distributed systems at 25k+ req/s." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const voyages = [
  {
    ship: "ShareChat",
    role: "SDE-2 — Backend Engineer",
    when: "Sept 2025 – Sept 2026",
    island: "Grand Line",
    log: [
      "Redesigned the Targeting Engine at 25k+ req/s — replaced a WarpStream consumer layer with an Apache Spark ETL on BigQuery writing directly to ScyllaDB.",
      "Reworked ScyllaDB schema with composite partition keys: p99 from ~150ms to ~10ms, infra cost down 74.4%.",
      "Moved REST APIs from user-scoped to entity-generic endpoints; zero-disruption cutover of 19 microservices across ShareChat and Moj.",
      "Region-aware GCS bucket routing, object retrieval and CDN fallback for resilient storage.",
      "Migrated Moj's Audio Pipeline Singapore → Mumbai (MySQL, GCS, Redis, upload service): p99 ~80ms → ~10ms.",
      "Built dashboards, alerting and CI/CD on GKE; led incident response and RCAs.",
    ],
  },
  {
    ship: "Samsung Electronics",
    role: "Software Engineer",
    when: "July 2022 – Sept 2025",
    island: "East Blue",
    log: [
      "Optimized REST APIs for a large content platform — 30% faster via Redis caching and indexing.",
      "Kafka messaging pipeline: +40% throughput, −30% latency.",
      "Spring Security + JWT auth across Spring Boot microservices.",
      "Java / Spring Boot services contributing to 99.9% uptime and 20% lower latency.",
      "MySQL schema design cutting query times by 40%; raised test coverage by 80% (JUnit, Mockito, MockK).",
    ],
  },
];

const fruits = [
  { name: "Code-Code Fruit", kind: "Languages", items: ["Java", "Go", "C++", "SQL", "JS"] },
  { name: "Spring-Spring Fruit", kind: "Frameworks", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "Microservices", "REST"] },
  { name: "Vault-Vault Fruit", kind: "Databases", items: ["MySQL", "ScyllaDB", "BigQuery", "Redis / Dragonfly"] },
  { name: "Stream-Stream Fruit", kind: "Messaging", items: ["Kafka", "WarpStream", "Apache Spark"] },
  { name: "Cloud-Cloud Fruit", kind: "Cloud & Infra", items: ["GCP", "OCI", "GCS", "Kubernetes", "Docker", "CI/CD"] },
  { name: "Haki", kind: "Concepts", items: ["Distributed Systems", "HLD / LLD", "DSA", "Design Patterns"] },
];

const bounty = [
  { to: 25, from: 0, decimals: 0, prefix: "", suffix: "k+", label: "req/s tamed" },
  { to: 74.4, from: 0, decimals: 1, prefix: "", suffix: "%", label: "infra cost cut" },
  { to: 10, from: 150, decimals: 0, prefix: "150→", suffix: "ms", label: "p99 latency" },
  { to: 19, from: 0, decimals: 0, prefix: "", suffix: "", label: "services migrated" },
];

function Index() {
  const progress = useScrollProgress();
  const scrolled = useScrolled(40);

  return (
    <main className="parchment min-h-screen">
      {/* Nav */}
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-ocean/90 text-ocean-foreground backdrop-blur transition-all duration-500",
          scrolled ? "py-1 shadow-[var(--shadow-poster)]" : "py-2",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-2xl text-gold transition-transform hover:scale-105">
            <span className="inline-block anim-bob">☠</span> Anurag
          </a>
          <div className="hidden gap-6 font-mono text-sm uppercase sm:flex">
            <a href="#voyage" className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">Voyage</a>
            <a href="#powers" className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">Powers</a>
            <a href="#treasure" className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">Treasure</a>
            <a href="#contact" className="relative transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">Den Den</a>
          </div>
        </div>
        {/* Reading progress — a rope paid out as you sail the page */}
        <div
          className="absolute inset-x-0 -bottom-1 h-1 origin-left bg-gold transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </nav>

      {/* Hero */}
      <header id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <img
          src={heroSea}
          alt="Pirate ship sailing at sunset"
          width={1920}
          height={1088}
          className="anim-slow-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 via-ocean/50 to-transparent" />

        {/* Floating spray motes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {["left-[12%] top-[28%]", "left-[38%] top-[62%]", "left-[64%] top-[22%]", "left-[82%] top-[70%]"].map((pos, i) => (
            <span
              key={pos}
              className={cn("anim-drift absolute h-2 w-2 rounded-full bg-gold/50", pos)}
              style={{ animationDelay: `${i * 1.4}s`, animationDuration: `${9 + i * 2}s` }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_auto]">
          <div className="text-ocean-foreground">
            <p className="anim-rise font-mono text-sm uppercase tracking-[0.3em] text-gold" style={{ animationDelay: "0.1s" }}>
              Setting sail for the next crew
            </p>
            <h1
              className="anim-rise mt-4 text-6xl leading-none text-outline md:text-8xl"
              style={{ animationDelay: "0.25s" }}
            >
              Anurag <span className="gold-shimmer">Singh</span>
            </h1>
            <p className="anim-rise mt-6 max-w-xl text-xl" style={{ animationDelay: "0.4s" }}>
              SDE-2 Backend Engineer navigating the Grand Line of distributed systems — Java, Go, Kafka & ScyllaDB at 25k+ req/s.
            </p>
            <div className="anim-rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.55s" }}>
              <a href="#contact" className="rounded-md border-2 border-foreground bg-primary px-6 py-3 font-display text-xl text-primary-foreground shadow-[var(--shadow-poster)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-1">
                Recruit me to your crew
              </a>
              <a href="#voyage" className="rounded-md border-2 border-gold px-6 py-3 font-display text-xl text-gold transition-colors duration-200 hover:bg-gold hover:text-accent-foreground">
                Read the log
              </a>
            </div>
          </div>

          {/* Wanted poster, hanging from a rope and swaying */}
          <div className="anim-rise mx-auto w-72" style={{ animationDelay: "0.7s" }}>
            <div aria-hidden className="mx-auto h-12 w-1.5 rounded bg-border/70" />
            <div className="anim-sway">
              <div className="poster rotate-2 p-5 text-center transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]">
                <p className="font-display text-6xl leading-none">WANTED</p>
                <img src={wanted} alt="Wanted poster portrait" width={896} height={752} className="mt-3 border-2 border-border sepia" />
                <p className="mt-2 font-mono text-xs uppercase tracking-widest">Dead or Alive</p>
                <p className="font-display text-3xl">Anurag Singh</p>
                <p className="font-display text-2xl text-primary">฿ 4,00,000,000-</p>
                <p className="font-mono text-[10px] uppercase">Marine HQ — Bangalore</p>
              </div>
            </div>
          </div>
        </div>

        <Waves className="bottom-0 h-24 text-ocean" speed={16} />
        <Waves className="bottom-0 h-16 text-ocean/70" speed={26} />
      </header>

      {/* Bounty stats */}
      <section className="relative border-y-4 border-border bg-ocean text-ocean-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          {bounty.map((s, i) => (
            <Reveal key={s.label} delay={i * 140} variant="zoom">
              <p className="font-display text-5xl text-gold">
                <CountUp
                  to={s.to}
                  from={s.from}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="font-mono text-xs uppercase tracking-widest">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Voyage */}
      <section id="voyage" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
        <Reveal>
          <SectionTitle kicker="Captain's Log" title="The Voyage So Far" />
        </Reveal>
        <div className="relative mt-12 space-y-12 border-l-4 border-dashed border-primary pl-8">
          {voyages.map((v, vi) => (
            <Reveal key={v.ship} variant="left" delay={vi * 120}>
              <article className="poster relative p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="anim-pulse-anchor absolute -left-[3.15rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-gold text-xl">
                  ⚓
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-4xl">{v.ship}</h3>
                  <span className="font-mono text-sm">{v.when}</span>
                </div>
                <p className="font-semibold text-primary">
                  {v.role} · <span className="italic text-muted-foreground">{v.island}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {v.log.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="text-primary transition-transform duration-300 hover:translate-x-1">✦</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Powers */}
      <section id="powers" className="relative scroll-mt-24 overflow-hidden bg-secondary py-24 text-secondary-foreground">
        <div aria-hidden className="pointer-events-none absolute -right-10 top-10 text-8xl opacity-10 anim-drift">☠</div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionTitle kicker="Devil Fruit Encyclopedia" title="Powers Acquired" light />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fruits.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 130} variant="zoom" className="h-full">
                <div className="poster h-full p-6 text-foreground transition-transform duration-300 hover:-rotate-2 hover:scale-[1.03]">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{f.kind}</p>
                  <h3 className="text-3xl text-primary">{f.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {f.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border-2 border-border bg-card px-2 py-1 font-mono text-xs transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treasure + Education */}
      <section id="treasure" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <Reveal>
          <SectionTitle kicker="Buried Treasure" title="Projects & Training" />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Reveal variant="right" className="h-full">
            <article className="poster h-full p-8 transition-transform duration-300 hover:-translate-y-1">
              <p className="anim-bob inline-block text-5xl">💰</p>
              <h3 className="mt-2 text-4xl">Music Metadata Service</h3>
              <p className="mt-1 font-mono text-xs uppercase">gRPC · Redis · Kafka · Docker · GitHub Actions</p>
              <ul className="mt-4 space-y-2">
                <li>✦ Open-source gRPC service for songs, artists & albums with Redis caching for low-latency reads.</li>
                <li>✦ Real-time play counts via Kafka + Redis sorted sets — trending top-K across millions of tracks.</li>
                <li>✦ Containerized, CI/CD automated, fully documented APIs and architecture.</li>
              </ul>
            </article>
          </Reveal>
          <Reveal variant="left" delay={150} className="h-full">
            <article className="poster h-full -rotate-1 p-8 transition-transform duration-300 hover:rotate-0">
              <p className="anim-drift inline-block text-5xl">🗺️</p>
              <h3 className="mt-2 text-3xl">Training Island</h3>
              <p className="mt-2 font-semibold">NIT Goa</p>
              <p>B.Tech, Electronics & Communication</p>
              <p className="mt-2 font-mono text-sm">2018 – 2022 · CGPA 8.3</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t-4 border-border bg-ocean py-24 text-center text-ocean-foreground">
        <Waves className="top-0 h-20 text-ocean/70" flip speed={22} />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal variant="zoom">
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
              <span aria-hidden className="ripple-ring absolute inset-0 rounded-full border-2 border-gold" />
              <span aria-hidden className="ripple-ring absolute inset-0 rounded-full border-2 border-gold" style={{ animationDelay: "1.4s" }} />
              <span className="anim-wobble text-6xl">🐌</span>
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold">Purupuru... Gacha!</p>
            <h2 className="mt-2 text-6xl text-outline md:text-7xl">Ring the Den Den Mushi</h2>
            <p className="mx-auto mt-4 max-w-xl">Looking for a backend engineer to join your crew? Let's talk.</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 font-display text-xl">
              <a href="mailto:anurags1806@gmail.com" className="rounded-md border-2 border-foreground bg-primary px-6 py-3 text-primary-foreground shadow-[var(--shadow-poster)] transition-transform duration-200 hover:-translate-y-1">
                ✉ anurags1806@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/anurags1806" target="_blank" rel="noreferrer" className="rounded-md border-2 border-gold px-6 py-3 text-gold transition-colors duration-200 hover:bg-gold hover:text-accent-foreground">
                LinkedIn
              </a>
              <a href="tel:+918999867766" className="rounded-md border-2 border-gold px-6 py-3 text-gold transition-colors duration-200 hover:bg-gold hover:text-accent-foreground">
                +91 89998 67766
              </a>
            </div>
          </Reveal>
          <p className="mt-16 font-mono text-xs opacity-70">© 2026 Anurag Singh · Fan-made One Piece tribute theme</p>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="text-center">
      <p className={`font-mono text-sm uppercase tracking-[0.3em] ${light ? "text-gold" : "text-primary"}`}>{kicker}</p>
      <h2 className="mt-2 text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}
