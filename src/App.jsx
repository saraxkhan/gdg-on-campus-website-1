import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Atom,
  Braces,
  CalendarDays,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  ExternalLink,
  Flame,
  GitBranch,
  Layers3,
  Lightbulb,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const joinUrl = 'https://example.com/replace-with-registration-link';
const navItems = [
  ['About', '#about'],
  ['Activities', '#activities'],
  ['Teams', '#teams'],
  ['Events', '#events'],
  ['Contact', '#contact'],
];

const activities = [
  { icon: Code2, title: 'Technical workshops', text: 'Get hands-on with tools and ideas that turn curiosity into practical skills.', color: 'blue', number: '01' },
  { icon: Rocket, title: 'Hackathons', text: 'Find your people, work through a challenge, and ship something together.', color: 'red', number: '02' },
  { icon: Layers3, title: 'Google Study Jams', text: 'Learn at your own pace with guided paths and a community to keep you going.', color: 'yellow', number: '03' },
  { icon: MessageCircle, title: 'Developer sessions', text: 'Share what you know, ask better questions, and learn from other builders.', color: 'green', number: '04' },
];

const technologies = [
  { name: 'Google Cloud', icon: Cloud, color: 'blue', label: 'Cloud infrastructure' },
  { name: 'Firebase', icon: Flame, color: 'yellow', label: 'App development' },
  { name: 'Flutter', icon: Layers3, color: 'blue', label: 'Cross-platform UI' },
  { name: 'Gemini & Gen AI', icon: Sparkles, color: 'green', label: 'Generative AI' },
  { name: 'TensorFlow', icon: Atom, color: 'red', label: 'Machine learning' },
];

const teams = [
  { title: 'Technical', icon: Braces, text: 'Build learning experiences, explore tools, and help members turn ideas into working projects.', color: 'blue' },
  { title: 'Design', icon: Palette, text: 'Shape how the community looks and feels, from event visuals to thoughtful experiences.', color: 'red' },
  { title: 'Management', icon: Users, text: 'Bring people together and make each workshop, meetup, and collaboration run smoothly.', color: 'yellow' },
  { title: 'Social media', icon: MessageCircle, text: 'Tell the stories, share the useful bits, and help more students find their community.', color: 'green' },
];

const events = [
  { date: 'DD MMM YYYY', type: 'WORKSHOP', title: 'Build your first cloud project', text: 'A sample event description. Replace this with confirmed details before publishing.', color: 'blue' },
  { date: 'DD MMM YYYY', type: 'COMMUNITY', title: 'Ideas into prototypes', text: 'A sample event description. Replace this with confirmed details before publishing.', color: 'yellow' },
  { date: 'DD MMM YYYY', type: 'STUDY JAM', title: 'Explore generative AI', text: 'A sample event description. Replace this with confirmed details before publishing.', color: 'green' },
];

function GoogleMark() {
  return <span aria-hidden="true" className="google-mark"><i /><i /><i /><i /></span>;
}

function SectionLabel({ children, light = false }) {
  return <div className={`section-label${light ? ' section-label-light' : ''}`}><span />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="GDG on Campus BIET home">
            <GoogleMark />
            <span className="brand-copy"><strong>GDG on Campus</strong><small>BIET Lucknow</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`nav-links${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="button button-small button-light nav-join" href={joinUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Join us <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grain" />
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> GOOGLE DEVELOPER GROUPS ON CAMPUS</div>
              <h1>Build<span className="period blue-text">.</span><br />Learn<span className="period red-text">.</span><br />Connect<span className="period yellow-text">.</span></h1>
              <p className="hero-description">A student-led community at BIET Lucknow for curious minds, creative builders, and everyone ready to make technology mean something.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#about">Explore community <ArrowDownRight size={17} /></a>
                <a className="text-link" href={joinUrl} target="_blank" rel="noreferrer">Join us <ArrowRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="note-line" />A place to start building, together.</div>
            </div>
            <div className="hero-art" aria-label="A stylized code editor showing a community project" role="img">
              <div className="art-backdrop" />
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-dot dot-blue" /><div className="art-dot dot-red" /><div className="art-dot dot-yellow" /><div className="art-dot dot-green" />
              <div className="code-window">
                <div className="window-bar"><div className="window-lights"><i /><i /><i /></div><span>community.jsx</span><GitBranch size={13} /></div>
                <div className="code-body">
                  <div className="code-row"><span className="line-no">01</span><span><b className="code-purple">const</b> <b className="code-blue">community</b> = {'{'}</span></div>
                  <div className="code-row indent"><span className="line-no">02</span><span><b className="code-red">learn</b>: <em>true</em>,</span></div>
                  <div className="code-row indent"><span className="line-no">03</span><span><b className="code-yellow">build</b>: <em>true</em>,</span></div>
                  <div className="code-row indent"><span className="line-no">04</span><span><b className="code-green">together</b>: <em>true</em>,</span></div>
                  <div className="code-row"><span className="line-no">05</span><span>{'}'};</span></div>
                  <div className="code-spacer" />
                  <div className="code-row"><span className="line-no">06</span><span><b className="code-purple">export default</b> <b className="code-blue">community</b>;</span></div>
                  <div className="cursor-line"><span className="line-no">07</span><i /></div>
                </div>
                <div className="window-status"><span><span className="status-dot" /> Ready to create</span><span>UTF-8&nbsp;&nbsp; JavaScript</span></div>
              </div>
              <div className="art-caption"><span className="caption-icon"><Sparkles size={15} /></span><span><strong>Good things start here.</strong><small>One idea. Many possibilities.</small></span></div>
              <div className="art-index">FIG. 01 <span>COMMUNITY IN MOTION</span></div>
            </div>
          </div>
          <div className="hero-bottom page-width"><span>LUCKNOW, INDIA</span><span>LEARN OUT LOUD&nbsp; · &nbsp;BUILD IN PUBLIC</span><a href="#about" aria-label="Scroll to about section"><ChevronDown size={18} /></a></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="page-width intro-grid">
            <div className="intro-heading"><SectionLabel>01 / ABOUT US</SectionLabel><h2>Tech is better<br />when we <span className="serif-italic">make it</span><br />together.</h2></div>
            <div className="intro-copy"><p className="intro-lead">Google Developer Groups on Campus is a community for students who want to explore technology, collaborate with others, and build projects that matter.</p><p>At BIET Lucknow, it’s a space to try something new, learn by doing, share what you discover, and meet people who are just as curious as you are. No matter where you’re starting from, there’s room to grow here.</p><a className="under-link" href="#activities">See what we do <ArrowRight size={15} /></a><div className="intro-stamp"><span>CURIOUS<br />BY NATURE</span><Lightbulb size={22} /></div></div>
          </div>
          <div className="page-width value-strip"><div><span className="value-number">01</span><strong>Explore</strong><span>Follow a question</span></div><div><span className="value-number">02</span><strong>Collaborate</strong><span>Find your people</span></div><div><span className="value-number">03</span><strong>Create</strong><span>Make it real</span></div></div>
        </section>

        <section className="activities-section section-pad" id="activities">
          <div className="page-width">
            <div className="section-topline"><div><SectionLabel light>02 / WHAT WE DO</SectionLabel><h2>Learn by <span className="serif-italic">doing.</span></h2></div><p>Make space for the hands-on, the unexpected, and the ideas that get better when shared.</p></div>
            <div className="activity-grid">{activities.map(({ icon: Icon, title, text, color, number }) => <article className="activity-card" key={title}><div className="card-meta"><span className={`icon-tile ${color}`}><Icon size={20} /></span><span>{number} / 04</span></div><h3>{title}</h3><p>{text}</p><a href={joinUrl} target="_blank" rel="noreferrer" aria-label={`Learn about ${title} and join the community`}><ArrowRight size={18} /></a></article>)}</div>
          </div>
        </section>

        <section className="tech-section section-pad" id="technology">
          <div className="page-width tech-layout"><div className="tech-heading"><SectionLabel>03 / THE TOOLKIT</SectionLabel><h2>Big ideas.<br /><span className="serif-italic">Real tools.</span></h2><p>Explore technologies across the Google ecosystem and beyond. The best place to begin? Wherever your curiosity takes you.</p><a className="under-link" href="#teams">Find your starting point <ArrowRight size={15} /></a></div><div className="tech-list">{technologies.map(({ name, icon: Icon, color, label }, index) => <div className="tech-row" key={name}><span className="tech-index">0{index + 1}</span><span className={`tech-icon ${color}`}><Icon size={20} /></span><span className="tech-name">{name}</span><span className="tech-label">{label}</span><ArrowRight className="tech-arrow" size={17} /></div>)}</div></div>
        </section>

        <section className="teams-section section-pad" id="teams">
          <div className="page-width"><div className="section-topline teams-topline"><div><SectionLabel>04 / FIND YOUR CREW</SectionLabel><h2>Many talents.<br /><span className="serif-italic">One community.</span></h2></div><p>There’s more than one way to make an impact. Bring what you’re good at, or discover something new.</p></div><div className="team-grid">{teams.map(({ title, icon: Icon, text, color }, index) => <article className="team-card" key={title}><span className={`team-icon ${color}`}><Icon size={19} /></span><span className="team-number">0{index + 1}</span><h3>{title} team</h3><p>{text}</p><a href={joinUrl} target="_blank" rel="noreferrer" aria-label={`Join the ${title} team`}><ArrowRight size={16} /></a></article>)}</div></div>
        </section>

        <section className="events-section section-pad" id="events">
          <div className="page-width"><div className="events-heading"><div><SectionLabel light>05 / ON THE RADAR</SectionLabel><h2>Make a date<br />with <span className="serif-italic">possibility.</span></h2></div><div className="sample-notice"><CalendarDays size={17} /><span><strong>Sample events</strong><br />Dates and details are editable placeholders, not confirmed college events.</span></div></div><div className="event-grid">{events.map((event) => <article className="event-card" key={event.title}><div className="event-card-top"><span className={`event-tag ${event.color}`}>{event.type}</span><span className="event-date"><CalendarDays size={14} />{event.date}</span></div><h3>{event.title}</h3><p>{event.text}</p><div className="event-bottom"><span>PLACEHOLDER EVENT</span><ArrowRight size={16} /></div></article>)}</div></div>
        </section>

        <section className="join-section" id="contact"><div className="join-shape join-shape-one" /><div className="join-shape join-shape-two" /><div className="page-width join-content"><SectionLabel>06 / YOUR NEXT STEP</SectionLabel><h2>Make something<br /><span className="serif-italic">worth sharing.</span></h2><p>Bring your questions, your half-formed ideas, your whole self. There’s a place for you in this community.</p><a className="button button-join" href={joinUrl} target="_blank" rel="noreferrer">Join the community <ArrowRight size={17} /></a><div className="join-placeholder"><ExternalLink size={13} /> Registration URL placeholder: replace with the official link</div></div><div className="join-spark spark-one" /><div className="join-spark spark-two" /><div className="join-check"><Check size={19} /></div></section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main"><div className="footer-brand"><a className="brand" href="#home"><GoogleMark /><span className="brand-copy"><strong>GDG on Campus</strong><small>BIET Lucknow</small></span></a><p>Learn out loud. Build in public.<br />Find your people along the way.</p></div><div className="footer-nav"><span className="footer-label">EXPLORE</span>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div className="footer-social"><span className="footer-label">FIND US ONLINE</span><a href="https://example.com/replace-with-official-instagram-url" target="_blank" rel="noreferrer">Instagram <ExternalLink size={13} /></a><a href="https://example.com/replace-with-official-linkedin-url" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a><a href="https://example.com/replace-with-official-youtube-url" target="_blank" rel="noreferrer">YouTube <ExternalLink size={13} /></a><small>Social URLs are placeholders.</small></div><a className="back-top" href="#home" aria-label="Back to top"><ArrowDownRight size={18} /></a></div>
        <div className="page-width footer-bottom"><span>© 2026 GDG ON CAMPUS · BIET LUCKNOW</span><span>BUILT WITH CURIOSITY <span className="footer-color-dots"><i /><i /><i /><i /></span></span></div>
      </footer>
    </>
  );
}

export default App;