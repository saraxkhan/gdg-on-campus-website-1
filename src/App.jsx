import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Atom,
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
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { OFFICIAL_GDG_URL, GOOGLE_DEVELOPERS_COMMUNITY_URL, isValidExternalUrl, RECRUITMENT_FORM_EMBED_URL, RECRUITMENT_FORM_URL, SOCIAL_LINKS } from './config/siteConfig.js';
import { activities, organizers, pastEvents, teams } from './data/chapterData.js';
import RecruitmentQr from './components/RecruitmentQr.jsx';
import TechQuiz from './components/TechQuiz.jsx';
import TeachableMachineDemo from './components/TeachableMachineDemo.jsx';

const navItems = [
  ['About', '#about'],
  ['Activities', '#activities'],
  ['Teams', '#teams'],
  ['Events', '#events'],
  ['Meet GDG', '#meet'],
  ['Stall quiz', '#quiz'],
  ['AI demo', '#ai-demo'],
];
const recruitmentFormConfigured = isValidExternalUrl(RECRUITMENT_FORM_URL);
const recruitmentEmbedConfigured = isValidExternalUrl(RECRUITMENT_FORM_EMBED_URL);

const technologies = [
  { name: 'Google Cloud', icon: Cloud, color: 'blue', label: 'Cloud infrastructure' },
  { name: 'Firebase', icon: Flame, color: 'yellow', label: 'App development' },
  { name: 'Flutter', icon: Layers3, color: 'blue', label: 'Cross-platform UI' },
  { name: 'Gemini & Gen AI', icon: Sparkles, color: 'green', label: 'Generative AI' },
  { name: 'TensorFlow', icon: Atom, color: 'red', label: 'Machine learning' },
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
            <a className="button button-small button-light nav-join" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Join Official GDG <ArrowRight size={15} /></a>
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
                <a className="text-link" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Join Official GDG <ArrowRight size={16} /></a>
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
            <div className="intro-copy"><p className="intro-lead">GDG on Campus Bansal Institute of Engineering &amp; Technology is a student developer community for people who want to explore technology, learn, and innovate together.</p><p>Members explore new technologies through hands-on workshops, collaborate on projects, and learn about web and mobile development, cloud computing, artificial intelligence, and more. It’s a place to share knowledge and grow together, whether you’re just starting out or building on what you know.</p><div className="official-actions"><a className="button button-dark" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Visit Official GDG Community <ExternalLink size={14} /></a><a className="button button-outline" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Join Official GDG <ArrowRight size={15} /></a></div><div className="intro-stamp"><span>CURIOUS<br />BY NATURE</span><Lightbulb size={22} /></div></div>
          </div>
          <div className="page-width value-strip"><div><span className="value-number">01</span><strong>Explore</strong><span>Follow a question</span></div><div><span className="value-number">02</span><strong>Collaborate</strong><span>Find your people</span></div><div><span className="value-number">03</span><strong>Create</strong><span>Make it real</span></div></div>
        </section>

        <section className="activities-section section-pad" id="activities">
          <div className="page-width">
            <div className="section-topline"><div><SectionLabel light>02 / WHAT WE DO</SectionLabel><h2>Learn by <span className="serif-italic">doing.</span></h2></div><p>Make space for the hands-on, the unexpected, and the ideas that get better when shared.</p></div>
            <div className="activity-grid">{activities.map(({ title, text, color }, index) => <article className="activity-card" key={title}><div className="card-meta"><span className={`icon-tile ${color}`}><Code2 size={20} /></span><span>{String(index + 1).padStart(2, '0')} / {String(activities.length).padStart(2, '0')}</span></div><h3>{title}</h3><p>{text}</p><a href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer" aria-label={`Visit the official GDG community to learn about ${title}`}><ArrowRight size={18} /></a></article>)}</div><p className="activity-disclaimer">These describe the kinds of community learning activities, not a list of confirmed BIET events.</p>
          </div>
        </section>

        <section className="tech-section section-pad" id="technology">
          <div className="page-width tech-layout"><div className="tech-heading"><SectionLabel>03 / THE TOOLKIT</SectionLabel><h2>Big ideas.<br /><span className="serif-italic">Real tools.</span></h2><p>Explore technologies across the Google ecosystem and beyond. The best place to begin? Wherever your curiosity takes you.</p><a className="under-link" href="#teams">Find your starting point <ArrowRight size={15} /></a></div><div className="tech-list">{technologies.map(({ name, icon: Icon, color, label }, index) => <div className="tech-row" key={name}><span className="tech-index">0{index + 1}</span><span className={`tech-icon ${color}`}><Icon size={20} /></span><span className="tech-name">{name}</span><span className="tech-label">{label}</span><ArrowRight className="tech-arrow" size={17} /></div>)}</div></div>
        </section>

        <section className="teams-section section-pad" id="teams">
          <div className="page-width"><div className="section-topline teams-topline"><div><SectionLabel>04 / FIND YOUR CREW</SectionLabel><h2>Many talents.<br /><span className="serif-italic">One community.</span></h2></div><p>These are college working teams, separate from official GDG membership. Bring what you’re good at, or discover something new.</p></div><div className="team-grid">{teams.map(({ title, icon: Icon, text, color }, index) => <article className="team-card" key={title}><span className={`team-icon ${color}`}><Icon size={19} /></span><span className="team-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#recruitment" aria-label={`Apply to the ${title}`}><ArrowRight size={16} /></a></article>)}</div></div>
        </section>

        <section className="meet-section section-pad" id="meet">
          <div className="page-width"><div className="section-topline"><div><SectionLabel>05 / MEET GDG</SectionLabel><h2>A community to<br /><span className="serif-italic">grow together.</span></h2></div><p>GDG on Campus BIET brings students together to explore technology, learn through practice, and share what they discover.</p></div><div className="meet-layout"><div className="meet-card"><span className="feature-kicker"><Users size={15} /> CHAPTER ORGANIZERS</span><h3>People behind<br />the community.</h3><p>Organizer names and profiles below are listed on the official chapter page.</p><div className="organizer-list">{organizers.map((organizer) => <a className="organizer-row" href={organizer.profile} target="_blank" rel="noreferrer" key={organizer.name}><span className="organizer-avatar" aria-hidden="true">{organizer.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><span><strong>{organizer.name}</strong><small>{organizer.role}</small></span><ExternalLink size={14} /></a>)}</div></div><div className="meet-side"><div className="meet-official"><GoogleMark /><div><span className="feature-kicker">OFFICIAL CHAPTER PAGE</span><h3>Membership lives<br />over there.</h3><p>Join GDG through the official community page. This companion site does not recreate or collect official membership.</p><a className="under-link" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Visit the official community <ExternalLink size={14} /></a></div></div><div className="meet-links"><a href={GOOGLE_DEVELOPERS_COMMUNITY_URL} target="_blank" rel="noreferrer">About Google Developer Groups <ExternalLink size={13} /></a><a href="#recruitment">Interested in a BIET team? <ArrowRight size={13} /></a></div></div></div></div>
        </section>

        <section className="events-section section-pad" id="events">
          <div className="page-width"><div className="events-heading"><div><SectionLabel light>06 / CHAPTER HISTORY</SectionLabel><h2>Past events.<br /><span className="serif-italic">Shared learning.</span></h2></div><div className="sample-notice"><CalendarDays size={17} /><span><strong>Official event history</strong><br />These events and dates are listed on the official GDG chapter page.</span></div></div><div className="upcoming-empty"><span className="status-dot" /><p>No upcoming events listed right now. Check the official GDG page for updates.</p><a href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Official GDG page <ExternalLink size={13} /></a></div><div className="event-grid">{pastEvents.map((event) => <article className="event-card past-event" key={event.title}><div className="event-card-top"><span className="event-tag blue">PAST EVENT</span><span className="event-date"><CalendarDays size={14} />{event.date}</span></div><h3>{event.title}</h3><div className="event-bottom"><span>OFFICIAL CHAPTER LISTING</span><a href={event.url} target="_blank" rel="noreferrer" aria-label={`View official listing for ${event.title}`}><ExternalLink size={15} /></a></div></article>)}</div><a className="button button-outline events-all" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">View All Official Events <ExternalLink size={14} /></a></div>
        </section>

        <section className="stall-section section-pad" id="stall">
          <div className="page-width"><div className="section-topline"><div><SectionLabel>07 / VISIT OUR STALL</SectionLabel><h2>Meet, make,<br /><span className="serif-italic">experiment.</span></h2></div><p>A quick introduction to GDG BIET, a team interest route, a tech quiz, and an optional camera demo. Works on your own device, too.</p></div><div className="stall-intro"><div><span className="feature-kicker">WHAT GDG IS</span><p>Google Developer Groups are communities for people interested in Google’s developer technology and the wider world of building software. GDG on Campus BIET is the student chapter for learning and collaboration at Bansal Institute of Engineering &amp; Technology.</p></div><a className="button button-dark" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Explore official GDG <ExternalLink size={14} /></a></div>
          <div className="stall-team-list"><div className="stall-team-heading"><SectionLabel>MEET THE BIET TEAMS</SectionLabel><p>Choose a way to contribute, learn with others, and help the community grow.</p></div><div className="stall-team-items">{teams.map(({ title, text, color }) => <article className="stall-team-item" key={title}><span className={`stall-team-dot ${color}`} /><div><h4>{title}</h4><p>{text}</p></div></article>)}</div></div>
          <div className="stall-route-links"><a href="#quiz">Take the technology quiz <ArrowRight size={14} /></a><a href="#ai-demo">Try the AI demo <ArrowRight size={14} /></a></div>
          <div className="stall-tools"><div id="recruitment" className="recruitment-block"><div className="recruitment-heading"><SectionLabel>COLLEGE TEAM RECRUITMENT</SectionLabel><h3>Find Your Place<br />in <span className="serif-italic">GDG BIET.</span></h3><p>Express interest in joining one of the college working teams. This is separate from joining the official GDG community.</p></div><div className="form-fields"><span>GOOGLE FORM FIELDS</span><p>Full Name · Email Address · Branch · Academic Year · Preferred Team · Technical Skills / Interests · Short Introduction</p>{recruitmentFormConfigured ? <a className="button button-dark" href={RECRUITMENT_FORM_URL} target="_blank" rel="noreferrer">Apply for a Team <ExternalLink size={14} /></a> : <button className="button button-dark" type="button" disabled>Apply for a Team</button>}{!recruitmentFormConfigured && <small>Configure the real Google Form URL in <code>src/config/siteConfig.js</code> to enable applications.</small>}</div></div><RecruitmentQr /></div>{recruitmentEmbedConfigured && <div className="form-embed"><div><SectionLabel>APPLICATION FORM</SectionLabel><h3>Team interest form</h3></div><iframe title="GDG BIET college team recruitment Google Form" src={RECRUITMENT_FORM_EMBED_URL} loading="lazy" /></div>}</div>
        </section>

        <section className="quiz-section section-pad" id="quiz"><div className="page-width"><TechQuiz /></div></section>

        <section className="ai-section section-pad" id="ai-demo"><div className="page-width"><TeachableMachineDemo /></div></section>

        <section className="join-section" id="contact"><div className="join-shape join-shape-one" /><div className="join-shape join-shape-two" /><div className="page-width join-content"><SectionLabel>08 / JOIN THE COMMUNITY</SectionLabel><h2>Make something<br /><span className="serif-italic">worth sharing.</span></h2><p>Bring your questions, your half-formed ideas, your whole self. Join the official GDG community and grow alongside fellow developers.</p><a className="button button-join" href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Join Official GDG <ArrowRight size={17} /></a><div className="join-placeholder"><ExternalLink size={13} /> Opens the official GDG community page</div></div><div className="join-spark spark-one" /><div className="join-spark spark-two" /><div className="join-check"><Check size={19} /></div></section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main"><div className="footer-brand"><a className="brand" href="#home"><GoogleMark /><span className="brand-copy"><strong>GDG on Campus</strong><small>BIET Lucknow</small></span></a><p>Learn out loud. Build in public.<br />Find your people along the way.</p><div className="footer-official-links"><a href={OFFICIAL_GDG_URL} target="_blank" rel="noreferrer">Official GDG chapter <ExternalLink size={12} /></a><a href={GOOGLE_DEVELOPERS_COMMUNITY_URL} target="_blank" rel="noreferrer">Google Developers community <ExternalLink size={12} /></a></div>{recruitmentFormConfigured && <a className="footer-recruit-link" href={RECRUITMENT_FORM_URL} target="_blank" rel="noreferrer">BIET team recruitment form <ExternalLink size={12} /></a>}</div><div className="footer-nav"><span className="footer-label">EXPLORE</span>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href="#recruitment">Apply for a college team</a><a href="#ai-demo">AI demo</a></div><div className="footer-social"><span className="footer-label">CHAPTER LINKS</span>{Object.entries(SOCIAL_LINKS).filter(([, url]) => isValidExternalUrl(url)).map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}>{name === 'linkedin' ? 'LinkedIn' : 'Discord'} <ExternalLink size={13} /></a>)}</div><a className="back-top" href="#home" aria-label="Back to top"><ArrowDownRight size={18} /></a></div>
        <div className="page-width footer-bottom"><span>© 2026 GDG ON CAMPUS · BIET LUCKNOW</span><span>BUILT WITH CURIOSITY <span className="footer-color-dots"><i /><i /><i /><i /></span></span></div>
      </footer>
    </>
  );
}

export default App;