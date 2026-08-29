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

## Dropping in real illustrations

Every page currently shows procedurally-drawn placeholder art. To replace one with commissioned artwork:

1. Add the image file to `public/illustrations/<age-band>/<topic-slug>/`, e.g. `public/illustrations/3-6/making-friends/01.png` for page 1 of the early-years "Making Friends" story (see `src/content/topics.ts` for the exact `topic-slug`s, and the shot list linked from this project's notes for what each page number needs).
2. Open that story's file under `src/content/stories/<age-band>/<topic-slug>.ts` and add `illustration: '/illustrations/3-6/making-friends/01.png'` next to that page's `scene` field.

That's it — the reader shows the real image instead of the placeholder for that page automatically, no other code changes needed. Pages without an `illustration` set keep the procedural placeholder, so illustrations can be dropped in one at a time as they're finished.

## Android app (IM Stories)

The app is wrapped as a native Android app with [Capacitor](https://capacitorjs.com) — `android/` is a real Android Studio project, `capacitor.config.ts` sets the app id (`com.inclusiveminds.imstories`) and name ("IM Stories"), and the icon/splash screens in `android/app/src/main/res` and `store-assets/` are generated from the real logo.

**This sandbox's network policy blocks Android SDK downloads (`dl.google.com`)**, so the APK/AAB can't be compiled here. Instead, **`.github/workflows/android-build.yml`** builds it on GitHub's own runners, on every push and on demand (Actions tab → **Build Android app** → **Run workflow**).

**Simplest download — always the newest build, no GitHub navigation needed:**
👉 **https://github.com/mymymywhy-hub/Inclusive-Minds/releases/tag/latest-build**

That page always has the current `IM-Stories-debug.apk` (installable now — enable "install from unknown sources" on your phone) and `IM-Stories-release.aab` (or `IM-Stories-release-UNSIGNED.aab` until signing secrets are added — see below). Each successful build replaces the files there, so bookmark that one link.

(The same files are also attached to each individual run under Actions → that run → Artifacts, if you want a specific historical build rather than the latest.)

### Signing for Play Store submission

Play Console needs a signed `.aab`. To let CI sign it automatically:

1. Generate an upload keystore once, and keep it somewhere safe outside this repo (never commit it):
   ```bash
   keytool -genkey -v -keystore release.keystore -alias im-stories -keyalg RSA -keysize 2048 -validity 10000
   ```
2. In the GitHub repo, go to **Settings → Secrets and variables → Actions** and add:
   - `ANDROID_KEYSTORE_BASE64` — output of `base64 -w0 release.keystore` (macOS: `base64 -i release.keystore`)
   - `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS` (`im-stories` above), `ANDROID_KEY_PASSWORD`
3. Re-run the workflow — `IM-Stories-release-aab` will now be signed and ready to upload to Play Console.
4. In Play Console: create the app, complete the store listing (the generated `store-assets/play-store-icon-512.png` and `play-store-feature-graphic-1024x500.png` are starting points — swap the feature graphic for real screenshots/artwork before launch), fill in the content rating questionnaire, privacy policy URL, and data-safety form, then upload the `.aab` under **Production → Create release**.

None of this — the store listing, screenshots, privacy policy, or the actual Play Console submission — can be done by an AI on your behalf; they need your Play Console account.
