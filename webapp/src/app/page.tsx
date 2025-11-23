import Link from "next/link";
import styles from "./page.module.css";

const stats = [
  { label: "Products launched", value: "28" },
  { label: "Average ROI", value: "4.2×" },
  { label: "Client NPS", value: "72" },
];

const services = [
  {
    title: "Product Strategy",
    description:
      "Map the market, align stakeholders, and define a roadmap that balances ambition with velocity.",
    points: ["AI-assisted discovery", "Vision sprints", "Growth modeling"],
  },
  {
    title: "Experience Design",
    description:
      "Pair interaction design with evocative storytelling to craft journeys people remember.",
    points: ["Design systems", "Motion prototyping", "UX research"],
  },
  {
    title: "Full-stack Delivery",
    description:
      "Ship modern web experiences with an automation-first mindset and quality baked in.",
    points: ["Next.js & Edge", "API orchestration", "Observability"],
  },
];

const process = [
  {
    title: "Discover",
    description:
      "We interview customers, watch the analytics, and run short experiments to surface the signal.",
  },
  {
    title: "Design",
    description:
      "Sketch, prototype, and iterate rapidly with cross-functional feedback loops baked into each cycle.",
  },
  {
    title: "Launch",
    description:
      "Deploy with confidence, automate the release pipeline, and watch your new experience light up.",
  },
];

const work = [
  {
    title: "Nebula Finance",
    headline: "Reimagined onboarding lifted activation by 26%",
    description:
      "We rebuilt Nebula's first-time flow with contextual insights, a progressive KYC path, and delightful motion.",
  },
  {
    title: "Sonder Travel",
    headline: "Dynamic pricing UI increased conversion 18%",
    description:
      "A real-time dashboard let operators balance yield and guest experience using live market telemetry.",
  },
  {
    title: "Northwind Health",
    headline: "Care navigation assistant cut tickets in half",
    description:
      "We designed a conversational tool that triages questions, surfaces the right plan data, and documents every step.",
  },
];

const testimonials = [
  {
    quote:
      "VisionFlow turned a vague idea into a product we’re proud to put in front of customers. Their pace and craft are unmatched.",
    name: "René Daniels",
    role: "Founder, Nebula Finance",
  },
  {
    quote:
      "The team blends design intuition with deep technical fluency. They made complex systems feel effortless.",
    name: "Priya Singh",
    role: "VP Product, Northwind Health",
  },
];

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <Link href="#top" className={styles.brand}>
              <span className={styles.logoMark}>VF</span>
              VisionFlow Studio
            </Link>
            <div className={styles.navlinks}>
              <Link href="#services">Services</Link>
              <Link href="#work">Work</Link>
              <Link href="#process">Process</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <Link href="#contact" className={styles.ctaSmall}>
              Start a project
            </Link>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.pill}>Design + Engineering in sync</span>
              <h1>
                Build digital products that feel alive, not templated.
              </h1>
              <p>
                We partner with teams shipping ambitious web experiences, blending research, visual
                storytelling, and rock-solid engineering to move from spark to launch without
                friction.
              </p>
              <div className={styles.heroActions}>
                <Link href="#contact" className={styles.primaryButton}>
                  Book a working session
                </Link>
                <Link href="#work" className={styles.secondaryButton}>
                  Explore our work
                </Link>
              </div>
              <ul className={styles.heroStats}>
                {stats.map((item) => (
                  <li key={item.label}>
                    <span>{item.value}</span>
                    <small>{item.label}</small>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.cardPrimary}>
                <h3>Realtime product pulse</h3>
                <p>
                  Metrics, user feedback, and launch health stitched into a single command center.
                </p>
                <div className={styles.signalList}>
                  <div>
                    <span className={styles.signalDot} />
                    <strong>Shipping velocity</strong>
                    <time>Release 21.4</time>
                  </div>
                  <div>
                    <span className={styles.signalDot} data-variant="pulse" />
                    <strong>Engagement lift</strong>
                    <time>+18% WoW</time>
                  </div>
                  <div>
                    <span className={styles.signalDot} data-variant="calm" />
                    <strong>Support volume</strong>
                    <time>-42 tickets</time>
                  </div>
                </div>
              </div>
              <div className={styles.orbit}>
                <span />
                <span />
                <span />
                <div className={styles.orbitCore}>
                  <p>Ideas</p>
                  <p>Execution</p>
                  <p>Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>What we do</span>
              <h2>Pragmatic craft across the product journey</h2>
              <p>
                From zero-to-one concepts to scale-stage platforms, we help teams align vision,
                unlock focus, and deliver experiences customers love using the best of the modern
                web.
              </p>
            </header>
            <div className={styles.gridCards}>
              {services.map((service) => (
                <article key={service.title} className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className={styles.sectionAlt}>
          <div className={styles.container}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Selected work</span>
              <h2>Outcomes we’ve helped unlock</h2>
              <p>
                We embed with your team, shoulder-to-shoulder, until the metrics move and the story
                clicks.
              </p>
            </header>
            <div className={styles.gridShowcase}>
              {work.map((item) => (
                <article key={item.title} className={styles.caseCard}>
                  <div className={styles.caseHeader}>
                    <h3>{item.title}</h3>
                    <p>{item.headline}</p>
                  </div>
                  <p className={styles.caseBody}>{item.description}</p>
                  <button type="button" className={styles.subtleButton}>
                    View engagement snapshot
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className={styles.container}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>How we work</span>
              <h2>Purpose-built for iterative momentum</h2>
              <p>
                Every engagement is designed to reduce handoffs and keep decision-makers, designers,
                and engineers in tight sync. Think of us as an extension of your product org.
              </p>
            </header>
            <div className={styles.processFlow}>
              {process.map((step, index) => (
                <div key={step.title} className={styles.processCard}>
                  <div className={styles.stepCount}>{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.sectionAltSoft}>
          <div className={styles.container}>
            <div className={styles.testimonialsShell}>
              {testimonials.map((item) => (
                <blockquote key={item.name} className={styles.testimonial}>
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactPanel}>
              <div>
                <span className={styles.eyebrow}>Let’s build</span>
                <h2>Bring your next product sprint to life</h2>
                <p>
                  Share a few details about your project and we’ll reach out with a tailored
                  working-session agenda within 24 hours.
                </p>
              </div>
              <form className={styles.contactForm} action="#" method="post">
                <label>
                  Name
                  <input type="text" name="name" placeholder="How should we address you?" required />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@productcompany.com"
                    required
                  />
                </label>
                <label>
                  Project focus
                  <select name="focus" defaultValue="launch">
                    <option value="launch">New product launch</option>
                    <option value="scale">Scale existing product</option>
                    <option value="refresh">Experience refresh</option>
                    <option value="discovery">Discovery & research</option>
                  </select>
                </label>
                <label className={styles.fullWidth}>
                  What’s on your mind?
                  <textarea
                    name="details"
                    placeholder="Give us the spark or the constraints. We’ll take it from there."
                    rows={4}
                  />
                </label>
                <button type="submit">Send request</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div>
              <p className={styles.logoLockup}>
                <span className={styles.logoMark}>VF</span>
                VisionFlow Studio
              </p>
              <p className={styles.footerCopy}>
                Building products that balance craft and momentum. Operating remote-first across the
                globe.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="#services">Services</Link>
              <Link href="#process">Process</Link>
              <Link href="#work">Work</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} VisionFlow Studio</span>
            <span>Made with Next.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
