import { SITE } from '../constants';

const FAQ_ITEMS = [
  {
    question: 'What is The Odin Project?',
    answer:
      'The Odin Project is a free, open-source curriculum that teaches web development through project-based learning. It starts with foundations in HTML, CSS and JavaScript, then moves into full-stack development with Node, React and databases.',
  },
  {
    question: 'Is this an official Odin Project site?',
    answer:
      'No. This is an independent showcase built and maintained by Siddhartha. The Odin Project name, curriculum and links belong to their respective owners.',
  },
  {
    question: 'How were these projects chosen?',
    answer:
      'They weren’t hand-picked for a portfolio. These are the assignments, games and tools completed as I moved through the curriculum, ordered roughly by when they shipped. The first landing page and the final portfolio are all part of the same path.',
  },
  {
    question: 'What is this site built with?',
    answer:
      'React 19, TypeScript and Vite, with hand-written CSS. Type is set in Bricolage Grotesque and JetBrains Mono. The portrait up top flips between two images on hover and opens a larger view when clicked.',
  },
  {
    question: 'Can I reuse the code?',
    answer:
      'Yes. Most source code is public on GitHub — fork it, break it, learn from it. That is the whole point of building in public.',
  },
];

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <div className="about__intro">
            <p className="eyebrow">
              <span className="eyebrow__index">04</span>
              <span className="eyebrow__line" aria-hidden="true" />
              About the build
            </p>
            <h2 id="about-title" className="section__title">
              Built in public, one lesson at a time.
            </h2>
            <p className="about__lede">
              I&rsquo;m {SITE.AUTHOR}, a {SITE.ROLE.toLowerCase()}. This archive is a record of
              what happens when you stop watching tutorials and start shipping. Every build
              here started as a lesson, then became something real.
            </p>
            <div className="about__actions">
              <a
                href={SITE.GITHUB_URL}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on GitHub
                <span className="btn__icon" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                href={SITE.ODIN_URL}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the curriculum <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="about__signature">
              <span className="about__signature-name">{SITE.AUTHOR}</span>
              <span className="about__signature-role">Independent · Not affiliated</span>
            </div>
          </div>

          <div className="faq">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="faq__item">
                <summary className="faq__question">
                  <span>{item.question}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <p className="faq__answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
