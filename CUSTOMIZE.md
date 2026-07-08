# Making this site hers

Everything on this site is controlled from one file: **[`data/content.ts`](data/content.ts)**.
You don't need to touch any component code — just edit the text there, and drop
photos and recordings into `public/`. This guide walks through it section by section.

## 1. Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Changes save and reload automatically.

## 2. Her name, dates, and the hero photo

Open `data/content.ts` and edit the `family` object at the top:

- `motherName`, `motherFirstName` — replace with her real name.
- `yearsLived` — e.g. `"1948 – 2024"`.
- `remembranceDate` — the anniversary date shown in the final section.
- `heroPhoto` — path to the big photo shown on the opening screen.

Add that photo to `public/images/hero/family-portrait.jpg` (any filename works,
just match the path in `content.ts`). A wide, high-resolution photo works best —
it will be gently blurred and darkened behind the title text.

## 3. Photos, generally

Every photo field in `content.ts` works the same way:

- If the file exists at the given path, it's shown.
- If it's missing, an elegant placeholder (a soft initial in a frame) is shown
  instead — so the site never looks broken while you're gathering photos.

Recommended formats: `.jpg` or `.webp`, ideally 1600px+ on the longest side.

| Section | Folder | Notes |
|---|---|---|
| Hero | `public/images/hero/` | One wide photo |
| Family Gallery | `public/images/gallery/` | One large landscape photo — the family photo |
| The Family Speaks | `public/images/family/` | A square-ish portrait per speaker |
| Timeline | `public/images/timeline/` | One photo per life event |
| Photo Wall | `public/images/wall/` | 6–10 casual, everyday photos |
| Final Section | `public/images/final/` | One large, quiet, meaningful photo |

## 4. Voice recordings ("The Family Speaks")

Each entry in the `familyVoices` array needs:

- `name` — who is speaking. `relation` is optional (e.g. "Her Husband") —
  leave it out to show just the name, as it is by default now.
- `photo` — their portrait, in `public/images/family/`.
- `message` — a short written line (shown on the card itself).
- `audioSrc` — path to their recording, in `public/audio/`.

Record voice messages on any phone and export as `.mp3` (a minute or less is
plenty). Name the files to match `audioSrc`, e.g. `public/audio/voice-01.mp3`.
Until a file is added, the card shows "Recording coming soon" instead of
breaking.

## 5. Background piano (optional)

Add a soft instrumental piano track to `public/audio/piano-background.mp3`.
It's muted until someone presses the small music icon in the corner — browsers
block audio from playing automatically, and it's more respectful for the family
to choose the moment to press play anyway.

## 6. Everything else

- `introSection` — the opening quote and welcome message.
- `familyPortrait` — the single large photo in the Family Gallery section;
  `caption` is optional, leave it out to omit it.
- `memories` — the handwritten notes. `title` is what shows on the note,
  `story` is the full text shown when it's opened.
- `timelineEvents` — birth, marriage, children, family memories, legacy — add
  or remove entries freely, the layout adapts automatically.
- `thingsSheLoved` — pick from the available `icon` values in `IconKey`
  (flower, music, food, family, faith, garden, book, sun, tea, dance).
- `finalSection` — the closing words. The default text matches what's meant
  to be there; only change `familySignature` if you'd like something other
  than "The Owoturo Family".

## 7. A note on tone

Where you see bracketed placeholders like `[Family Member Name]`, that's a
deliberate prompt for something only the family can write — nothing here was
invented on anyone's behalf. Take your time with it.
