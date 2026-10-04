import p1 from "@/assets/IMG-20260729-WA0007.jpg.asset.json";
import p2 from "@/assets/IMG-20260729-WA0008.jpg.asset.json";
import p3 from "@/assets/IMG-20260729-WA0006.jpg.asset.json";
import p4 from "@/assets/IMG-20260729-WA0013.jpg.asset.json";
import p5 from "@/assets/IMG-20260729-WA0015.jpg.asset.json";
import p6 from "@/assets/IMG-20260729-WA0020.jpg.asset.json";
import p7 from "@/assets/IMG-20260729-WA0022.jpg.asset.json";
import p8 from "@/assets/IMG-20260729-WA0024.jpg.asset.json";
import p9 from "@/assets/IMG-20260729-WA0028.jpg.asset.json";
import p10 from "@/assets/IMG-20260729-WA0036.jpg.asset.json";
import p11 from "@/assets/IMG-20261004-WA0004.jpg.asset.json";
import p12 from "@/assets/IMG-20261004-WA0005.jpg.asset.json";
import p13 from "@/assets/IMG-20261004-WA0006.jpg.asset.json";
import p14 from "@/assets/IMG-20261004-WA0008.jpg.asset.json";
import p15 from "@/assets/IMG-20261004-WA0009.jpg.asset.json";
import p16 from "@/assets/IMG-20261004-WA0010.jpg.asset.json";

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
    eyebrow: "School Mentorship",
    title: "Empowering learners at Entonet",
    caption:
      "In collaboration with Entaisere Community Organization, at Entonet Comprehensive Primary School to give out pads, plant trees and mentor the learners while also speaking to teachers. Our mentees from KMTC loitokitok participated",
    items: [p11, p12, p13, p14, p15, p16].map((a) => ({ url: a.url })),
  },
  {
    eyebrow: "Drought Response",
    title: "Food relief in Iltilal villages",
    caption: "Here , we went to donate foodstuffs at Iltilal villages during drought",
    items: [p6, p7, p8, p9, p10].map((a) => ({ url: a.url })),
  },
];
