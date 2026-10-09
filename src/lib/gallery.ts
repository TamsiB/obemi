const p1 = { url: "/images/IMG-20260729-WA0007.jpg" };
const p2 = { url: "/images/IMG-20260729-WA0008.jpg" };
const p3 = { url: "/images/IMG-20260729-WA0006.jpg" };
const p4 = { url: "/images/IMG-20260729-WA0013.jpg" };
const p5 = { url: "/images/IMG-20260729-WA0015.jpg" };
const p6 = { url: "/images/IMG-20260729-WA0020.jpg" };
const p7 = { url: "/images/IMG-20260729-WA0022.jpg" };
const p8 = { url: "/images/IMG-20260729-WA0024.jpg" };
const p9 = { url: "/images/IMG-20260729-WA0028.jpg" };
const p10 = { url: "/images/IMG-20260729-WA0036.jpg" };
const p11 = { url: "/images/IMG-20261004-WA0004.jpg" };
const p12 = { url: "/images/IMG-20261004-WA0005.jpg" };
const p13 = { url: "/images/IMG-20261004-WA0006.jpg" };
const p14 = { url: "/images/IMG-20261004-WA0008.jpg" };
const p15 = { url: "/images/IMG-20261004-WA0009.jpg" };
const p16 = { url: "/images/IMG-20261004-WA0010.jpg" };

export type GalleryItem = { url: string };

export type GalleryGroup = {
  eyebrow: string;
  title: string;
  caption: string;
  items: GalleryItem[];
};

export const GALLERY: GalleryGroup[] = [
  {
    eyebrow: "Christmas Outreach",
    title: "Sharing Christmas cheer",
    caption: "Here we shared Christmas cheer with needy families. Did distribution through the church",
    items: [p1, p2, p3, p4, p5].map((a) => ({ url: a.url })),
  },
  {
    eyebrow: "Drought Response",
    title: "Food relief in Iltilal villages",
    caption: "Here , we went to donate foodstuffs at Iltilal villages during drought",
    items: [p6, p7, p8, p9, p10].map((a) => ({ url: a.url })),
  },
  {
    eyebrow: "School Mentorship",
    title: "Empowering learners at Entonet",
    caption:
      "In collaboration with Entaisere Community Organization, at Entonet Comprehensive Primary School to give out pads, plant trees and mentor the learners while also speaking to teachers. Our mentees from KMTC loitokitok participated",
    items: [p11, p12, p13, p14, p15, p16].map((a) => ({ url: a.url })),
  },
];
