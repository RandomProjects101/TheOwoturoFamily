/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  This is the only file the family needs to edit to make the site their own.
 *  Replace bracketed placeholders, add real photos to /public/images and
 *  voice recordings to /public/audio, and everything else updates itself.
 *  See CUSTOMIZE.md in the project root for a full walkthrough.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type IconKey =
  | "flower"
  | "music"
  | "food"
  | "family"
  | "faith"
  | "garden"
  | "book"
  | "sun"
  | "tea"
  | "dance";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface FamilyVoice {
  id: string;
  name: string;
  /** Optional — e.g. "Her Husband". Leave unset to show just the name. */
  relation?: string;
  photo: string;
  message: string;
  /** Path to an audio file in /public/audio. Leave empty until a recording is added. */
  audioSrc: string;
}

export interface Memory {
  id: string;
  title: string;
  date?: string;
  excerpt: string;
  story: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  photo?: string;
}

export interface LovedThing {
  id: string;
  icon: IconKey;
  title: string;
  description: string;
}

export const family = {
  familyName: "Owoturo",
  /** Her name — replace throughout once you're ready. */
  motherName: "Mama Owoturo",
  motherFirstName: "Mum",
  yearsLived: "[Birth Year] – [Passing Year]",
  remembranceDate: "[Day, Month]",
  heroPhoto: "/images/hero/family-portrait.jpg",
  heroKicker: "In Loving Memory",
  heroTitle: "In Loving Memory",
  heroSubtitleLines: ["Forever loved.", "Forever remembered."],
  heroCta: "Open Her Story",
};

export const introSection = {
  eyebrow: "A Life Worth Celebrating",
  heading: "Some people leave footprints on the heart.",
  body: "This quiet corner of the internet belongs only to us — a place to gather, to remember, and to hold on to everything she gave. Take your time here. There is no rush. She never rushed us either.",
  quote:
    "A mother's love is the fuel that enables an ordinary person to do the impossible.",
  attribution: "Marion C. Garretty",
};

export const familyPortrait: GalleryImage = {
  id: "family-portrait",
  src: "/images/gallery/family-portrait.jpg",
  alt: "The Owoturo family",
  caption: "[Add a caption]",
};

export const familyVoices: FamilyVoice[] = [
  {
    id: "v1",
    name: "Mr Owoturo",
    photo: "/images/family/voice-01.jpg",
    message:
      "[Write a short message to Mum here — a sentence or two from the heart is plenty.]",
    audioSrc: "/audio/voice-01.mp3",
  },
  {
    id: "v2",
    name: "Tobi",
    photo: "/images/family/voice-02.jpg",
    message:
      "[Write a short message to Mum here — a sentence or two from the heart is plenty.]",
    audioSrc: "/audio/voice-02.mp3",
  },
  {
    id: "v3",
    name: "Timi",
    photo: "/images/family/voice-03.jpg",
    message:
      "[Write a short message to Mum here — a sentence or two from the heart is plenty.]",
    audioSrc: "/audio/voice-03.mp3",
  },
  {
    id: "v4",
    name: "Bolu",
    photo: "/images/family/voice-04.jpg",
    message:
      "[Write a short message to Mum here — a sentence or two from the heart is plenty.]",
    audioSrc: "/audio/voice-04.mp3",
  },
  {
    id: "v5",
    name: "Kadisha",
    photo: "/images/family/voice-05.jpg",
    message:
      "[Write a short message to Mum here — a sentence or two from the heart is plenty.]",
    audioSrc: "/audio/voice-05.mp3",
  },
];

export const memories: Memory[] = [
  {
    id: "m1",
    title: "[Give this memory a title]",
    date: "[Year or occasion]",
    excerpt: "[A line or two that hints at the story — this is what shows on the note before it's opened.]",
    story:
      "[Write the full memory here. What happened, how it felt, why it stays with you. This is the space to tell it properly.]",
  },
  {
    id: "m2",
    title: "[Give this memory a title]",
    date: "[Year or occasion]",
    excerpt: "[A line or two that hints at the story — this is what shows on the note before it's opened.]",
    story:
      "[Write the full memory here. What happened, how it felt, why it stays with you. This is the space to tell it properly.]",
  },
  {
    id: "m3",
    title: "[Give this memory a title]",
    date: "[Year or occasion]",
    excerpt: "[A line or two that hints at the story — this is what shows on the note before it's opened.]",
    story:
      "[Write the full memory here. What happened, how it felt, why it stays with you. This is the space to tell it properly.]",
  },
  {
    id: "m4",
    title: "[Give this memory a title]",
    date: "[Year or occasion]",
    excerpt: "[A line or two that hints at the story — this is what shows on the note before it's opened.]",
    story:
      "[Write the full memory here. What happened, how it felt, why it stays with you. This is the space to tell it properly.]",
  },
  {
    id: "m5",
    title: "[Give this memory a title]",
    date: "[Year or occasion]",
    excerpt: "[A line or two that hints at the story — this is what shows on the note before it's opened.]",
    story:
      "[Write the full memory here. What happened, how it felt, why it stays with you. This is the space to tell it properly.]",
  },
  {
    id: "m6",
    title: "[Give this memory a title]",
    date: "[Year or occasion]",
    excerpt: "[A line or two that hints at the story — this is what shows on the note before it's opened.]",
    story:
      "[Write the full memory here. What happened, how it felt, why it stays with you. This is the space to tell it properly.]",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    year: "[Year]",
    title: "Born",
    description:
      "[Where and when she was born, and anything about her early years worth remembering.]",
    photo: "/images/timeline/birth.jpg",
  },
  {
    id: "t2",
    year: "[Year]",
    title: "Marriage",
    description:
      "[The story of how the family began — where she was married, and to whom.]",
    photo: "/images/timeline/marriage.jpg",
  },
  {
    id: "t3",
    year: "[Year]",
    title: "Children",
    description:
      "[The arrival of her children, and what kind of mother she became.]",
    photo: "/images/timeline/children.jpg",
  },
  {
    id: "t4",
    year: "[Year]",
    title: "A Family Memory",
    description:
      "[A milestone, a trip, a tradition — a moment the whole family remembers together.]",
    photo: "/images/timeline/memory.jpg",
  },
  {
    id: "t5",
    year: "[Year]",
    title: "Her Legacy",
    description:
      "[What she leaves behind — in the family, in each of us, in the way we carry her forward.]",
    photo: "/images/timeline/legacy.jpg",
  },
];

export const thingsSheLoved: LovedThing[] = [
  {
    id: "l1",
    icon: "flower",
    title: "[Her Favourite Flower]",
    description: "[A line about why, or where she liked to keep them.]",
  },
  {
    id: "l2",
    icon: "music",
    title: "[Her Favourite Music]",
    description: "[The songs or artists that remind the family of her.]",
  },
  {
    id: "l3",
    icon: "food",
    title: "[Her Favourite Dish]",
    description: "[What she loved to cook, or loved to be cooked for her.]",
  },
  {
    id: "l4",
    icon: "family",
    title: "Sunday Gatherings",
    description: "[A family tradition she cherished or kept alive.]",
  },
  {
    id: "l5",
    icon: "faith",
    title: "[Her Faith / Church]",
    description: "[What her faith or place of worship meant to her.]",
  },
  {
    id: "l6",
    icon: "garden",
    title: "[Her Garden / A Place]",
    description: "[A place that felt like her, and why.]",
  },
];

export const photoWallImages: string[] = [
  "/images/wall/wall-01.jpg",
  "/images/wall/wall-02.jpg",
  "/images/wall/wall-03.jpg",
  "/images/wall/wall-04.jpg",
  "/images/wall/wall-05.jpg",
  "/images/wall/wall-06.jpg",
  "/images/wall/wall-07.jpg",
  "/images/wall/wall-08.jpg",
];

export const finalSection = {
  photo: "/images/final/portrait.jpg",
  lineOne: "You may be gone from our sight,",
  lineTwo: "but never from our hearts.",
  signOff: "With all our love.",
  familySignature: "The Owoturo Family",
};

export const backgroundAudio = {
  src: "/audio/piano-background.mp3",
  label: "Soft piano",
};
