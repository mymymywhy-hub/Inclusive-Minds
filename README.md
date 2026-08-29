# Inclusive Minds — Social Stories

An interactive storybook web app of evidence-informed social stories for children, covering:

- Making friends
- Sharing & turn-taking
- Asking for help
- Safe adults, safe choices (a neurodiversity-affirming take on "stranger danger")
- Road safety

Two reading levels for each topic: early years (3–6) and primary years (6–9).

## What makes this different

- **Clinically grounded.** Each page follows Carol Gray's Social Stories™ criteria and draws on published occupational therapy, speech-language pathology, behaviour therapy, and psychology practice. Pages that lean on a specific technique are labelled "Why this page helps" with the discipline named.
- **NDIS-relatable.** Language, situations, and support tools (AAC devices, ear defenders, OT sessions, support workers, "my safe adults," "my support team") reflect what Australian families and early-intervention teams already use, and each story lists the NDIS goal areas it touches.
- **Inclusive Minds-reflective.** A recurring cast of eight children — different skin tones, a wheelchair user, an AAC user, hearing aids, glasses, a hijab, a leg brace, ear defenders — turns up across every story rather than one "disability of the week" per book. Each child gets to narrate at least one story as the confident hero, not only as the child being helped.

See the in-app **For families & professionals** page (`/about`) for full source citations and an important disclaimer: this draft content has not yet been reviewed by a registered clinician or an Inclusive Minds Authenticity Advocate.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
```

## Project structure

```
src/
  content/         story data, typed models, the recurring character cast
    stories/3-6/   early-years stories
    stories/6-9/   primary-years stories
  illustrations/   hand-coded SVG character + scene + symbol-icon components
  components/      shared UI (topic cards, progress dots, clinician note cards)
  pages/           Home, StoryReader, About
```

To swap in the real logo and brand colours once they're available, replace `src/components/Logo.tsx` and the CSS custom properties in `src/index.css`.
