import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const sources: { title: string; url: string }[] = [
  { title: 'Carol Gray Social Stories™ 10.4 — defining criteria', url: 'https://carolgraysocialstories.com/social-stories/social-stories-10-4-updates/' },
  { title: 'Guidance for writing and delivering Social Stories — University of Bath', url: 'https://www.bath.ac.uk/publications/guide-for-writing-and-delivering-social-stories/attachments/guidance-for-writing_and-delivering-social-stories.pdf' },
  { title: 'Association for Science in Autism Treatment — Social Stories overview', url: 'https://asatonline.org/for-parents/learn-more-about-specific-treatments/social-stories/' },
  { title: 'Inclusive Minds — FAQ for Authenticity Advocates', url: 'https://www.inclusiveminds.com/faq-authenticity-advocates' },
  { title: 'NDIS — Glossary and plain-language terms', url: 'https://www.ndis.gov.au/definitions/glossary' },
  { title: 'NDIS — Developing your child\'s communication and language', url: 'https://ourguidelines.ndis.gov.au/understanding-supports/children-who-are-deaf-or-hard-hearing/developing-your-childs-communication-and-language' },
  { title: 'ASHA Perspectives — Neurodiversity-affirming speech and language services', url: 'https://pubs.asha.org/doi/10.1044/2023_PERSP-23-00106' },
  { title: 'The Circles Curriculum (Ziggurat Group) — personal safety & boundaries framework', url: 'https://www.theautismhub.net.au/road-safety/' },
]

export default function About() {
  return (
    <div className="min-h-full">
      <header className="max-w-3xl mx-auto px-6 pt-8 pb-4">
        <Logo />
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-16 space-y-8">
        <div>
          <Link to="/" className="text-sm font-bold text-brand-ink/60 hover:text-brand-ink">
            ← Back to stories
          </Link>
        </div>

        <h1 className="font-display text-3xl font-extrabold text-brand-ink">For families &amp; professionals</h1>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-brand-ink">How these stories are built</h2>
          <p className="text-brand-ink/75 leading-relaxed">
            Each story follows Carol Gray's Social Stories™ approach: patient, literal, mostly descriptive and
            affirming sentences, written from the child's own point of view, with directive language kept to a
            minimum. Every page pairs the text with a simple picture-symbol, in the spirit of AAC and PECS-style
            visual supports, so the story is accessible to readers who use pictures, signs, or a speech device
            as well as readers who use spoken words.
          </p>
          <p className="text-brand-ink/75 leading-relaxed">
            Page-by-page choices are grounded in published practice from four disciplines that commonly support
            these goals in Australian early-intervention teams:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-brand-ink/75">
            <li><strong>Occupational therapy</strong> — visual timers, sensory tools, and body-based regulation strategies woven into ordinary routines.</li>
            <li><strong>Speech-language pathology</strong> — short scripted phrases, multimodal/AAC-inclusive communication, and neurodiversity-affirming social communication practice.</li>
            <li><strong>Behaviour therapy</strong> — regulation before skill-teaching, concrete backup choices instead of open-ended demands, and reframing rather than shaming setbacks.</li>
            <li><strong>Psychology</strong> — emotion validation, growth-mindset framing, and rule-based (rather than fear-based) safety messaging.</li>
          </ul>
          <p className="text-brand-ink/75 leading-relaxed">
            Where a page draws on one of these specifically, it is labelled "Why this page helps" inside the
            story reader, with the relevant discipline named.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-brand-ink">NDIS-relatable by design</h2>
          <p className="text-brand-ink/75 leading-relaxed">
            The stories use language and situations families and early-intervention teams will recognise —
            "my safe adults," "my support team," AAC devices, ear defenders, OT sessions, and support workers —
            and the topics map onto goals commonly written into NDIS plans, such as Improved Relationships,
            Improved Daily Living Skills, Increased Social &amp; Community Participation, and Improved Health
            &amp; Wellbeing. Each story lists the goal areas it touches, so it's easy to slot into a plan review
            or a session with a therapist or support coordinator.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-brand-ink">Inclusive Minds-reflective by design</h2>
          <p className="text-brand-ink/75 leading-relaxed">
            Inclusive Minds' guiding idea — that all children should be able to see themselves in books, and
            that disabled and diverse characters should turn up again and again living ordinary lives rather
            than as a single "issue" — shaped the cast. The same eight children, drawn with visibly different
            skin tones, hair, a wheelchair, an AAC device, hearing aids, glasses, a hijab, a leg brace, and ear
            defenders, recur across every story and every topic. Each of them narrates at least one story as the
            confident hero, not only as the child being helped.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl bg-white border border-black/5 p-6">
          <h2 className="font-display text-xl font-bold text-brand-ink">Please read before using clinically or publishing</h2>
          <p className="text-brand-ink/75 leading-relaxed">
            This content was drafted by an AI assistant following published, publicly available guidance from
            Carol Gray's Social Stories methodology, NDIS resources, and disability-representation research —
            it has not been reviewed by an Inclusive Minds Authenticity Advocate, an NDIS-registered clinician,
            or anyone with lived experience of disability. Before using these stories in therapy, a classroom,
            or any published or clinical setting, please have them reviewed by:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-brand-ink/75">
            <li>A registered occupational therapist, speech pathologist, behaviour support practitioner, or psychologist for clinical accuracy and fit for the individual child.</li>
            <li>An Inclusive Minds Authenticity Advocate, or another reader with lived experience of the disabilities represented, for authentic and respectful representation.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-brand-ink">Sources</h2>
          <ul className="space-y-1.5 text-sm">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-brand-primary-dark underline underline-offset-2 break-words">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
