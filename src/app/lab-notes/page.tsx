/* eslint-disable @next/next/no-html-link-for-pages */
export default function Notes() {
  return (
    <main className="page-shell lab-notes-page">
      <header className="page-hero compact-page-hero">
        <p className="eyebrow">Lab Notes</p>
        <h1>Build logs, tutorials, and field notes from the lab.</h1>
        <p className="lead">Published writing stays readable and complete. Future topics remain clearly labeled as upcoming.</p>
      </header>

      <div className="notes-feature-layout notes-page-layout">
        <article className="journal-entry featured-note">
          <div className="entry-meta"><span className="entry-id">Lab Note 01</span><span className="entry-category">Published</span></div>
          <div className="entry-content">
            <h2>Behind the Kaidevlab Redesign: Turning a Portfolio into a Creative Technology Lab</h2>
            <p>How product proof, honest status, and a bright futuristic lab system turn a personal portfolio into a living creative technology space.</p>
          </div>
          <div className="entry-footer"><span className="entry-date">July 2026</span><a className="entry-link" href="/lab-notes/behind-kaidevlab-redesign/">Read Article</a></div>
        </article>
        <aside className="upcoming-notes" aria-label="Upcoming notes">
          <p className="eyebrow">Upcoming Notes</p>
          <ul>
            <li><span>Building a reliable AI workflow for UMKM intake</span><small>Coming Soon</small></li>
            <li><span>From anime experiment to Blue Vengeance manhwa</span><small>Coming Soon</small></li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
