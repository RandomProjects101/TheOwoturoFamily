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
  | "dance"
  | "jewelry"
  | "heels"
  | "photos";

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
  remembranceDate: "22nd July",
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
    title: "What She Always Said",
    excerpt: "Two things she never stopped telling us.",
    story:
      "“Give people the benefit of the doubt.” And, only half joking: “Marry someone who loves you as much as they love their skin.” We heard both more times than we could count — and neither one ever got old.",
  },
  {
    id: "m2",
    title: "Her Kind of Love",
    excerpt: "Affectionate in the smallest ways.",
    story:
      "She was the type to hold your hand for no reason, or hug and kiss you out of nowhere. And her heart — she was so kind and considerate to people. Anyone could come to her with their problems, and she had a good listening ear.",
  },
  {
    id: "m3",
    title: "Ochicha",
    excerpt: "The nickname only the family understood.",
    story:
      "Say it in this house and someone will smile. Some things don't need an explanation — they just need to be remembered.",
  },
  {
    id: "m4",
    title: "Her Heels",
    excerpt: "She loved a good pair of heels.",
    story: "She loved her heels — always put together, always herself.",
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
    description: "The children she loved with her whole heart.",
    photo: "/images/timeline/children.jpg",
  },
  {
    id: "t4",
    year: "[Year]",
    title: "Her Legacy",
    description: "Her greatest legacy — the children she raised.",
    photo: "/images/timeline/legacy.jpg",
  },
];

export const thingsSheLoved: LovedThing[] = [
  {
    id: "l1",
    icon: "jewelry",
    title: "Jewelry Making",
    description: "She was so creative — she loved making her own jewelry.",
  },
  {
    id: "l2",
    icon: "music",
    title: "Lighthouse Family",
    description: "The band she loved to put on and just listen to.",
  },
  {
    id: "l3",
    icon: "food",
    title: "Oha Soup",
    description:
      "Her signature dish — everyone loved her cooking, and she loved feeding everyone who came around.",
  },
  {
    id: "l4",
    icon: "photos",
    title: "Taking Pictures",
    description: "She loved taking pictures — always capturing the moment.",
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
  "/images/wall/wall-09.jpg",
  "/images/wall/wall-10.jpg",
  "/images/wall/wall-11.jpg",
  "/images/wall/wall-12.jpg",
  "/images/wall/wall-13.jpg",
  "/images/wall/wall-14.jpg",
  "/images/wall/wall-15.jpg",
  "/images/wall/wall-16.jpg",
  "/images/wall/wall-17.jpg",
  "/images/wall/wall-18.jpg",
  "/images/wall/wall-19.jpg",
  "/images/wall/wall-20.jpg",
  "/images/wall/wall-21.jpg",
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
