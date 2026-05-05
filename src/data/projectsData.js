// Image imports
import g1 from "../../public/garden-tips1.jpg";
import g3 from "../../public/garden-tips3.jpg";
import g4 from "../../public/garden-tips4.jpg";
import g5 from "../../public/garden-tips5.jpg";

import s1 from "../../public/service-ss1.jpg";
import s2 from "../../public/service-ss2.jpg";
import s3 from "../../public/service-ss3.jpg";
import s4 from "../../public/service-ss4.jpg";

import soulmate1 from "../../public/soulmate.png";
import soulmate2 from "../../public/about.png";
import soulmate3 from "../../public/biodatas.png";
import soulmate4 from "../../public/contact.png";


import care1 from "../../public/care (1).png"; 
import care2 from "../../public/care (2).png";
import care3 from "../../public/care (3).png";
import care4 from "../../public/care (4).png";
import care5 from "../../public/care (5).png";
import care6 from "../../public/care (6).png";
import care7 from "../../public/care (7).png";
import care8 from "../../public/care (8).png";
import care9 from "../../public/care (9).png";

import bang1 from "../../public/banglaco/banglaco1.png";
import bang2 from "../../public/banglaco/banglaco2.png";
import bang3 from "../../public/banglaco/banglaco3.png";
import bang4 from "../../public/banglaco/banglaco4.png";
import bang5 from "../../public/banglaco/banglaco5.png";
import bang6 from "../../public/banglaco/banglaco6.png";
import bang7 from "../../public/banglaco/banglaco7.png";
import bang8 from "../../public/banglaco/banglaco8.png";
import bang9 from "../../public/banglaco/banglaco9.png";

export const projectsData = [
  {
    id: "banglaco",
    title: "Banglaco",
    description: "Banglaco.com began not in a boardroom, but on the rugged trails of the Himalayas and the pristine beaches of the Andaman. Our founders, seasoned explorers themselves, realized that the modern voyager sought more than just a destination—they sought a narrative. Over two decades, we've evolved from a small boutique agency into a premier digital concierge, curating high-end adventures that respect local cultures and preserve natural wonders. We don't just book trips; we architect life-changing experiences.",
    techStack: ['Branding', 'Full-Stack', 'UX/UI', 'Content Strategy'],
    links: {
      live: "https://banglaco.com",
    },
    challenges: [
      "Crafting a narrative-driven UX for luxury travel",
      "Balancing high-quality imagery with performant delivery",
      "Designing booking flows that respect local providers"
    ],
    futurePlans: [
      "Personalized trip recommendations",
      "Localized experiences with partner integration"
    ],
    images: [bang1, bang2, bang3, bang4, bang5, bang6, bang7, bang8, bang9]
  },
  {
    id: "care-hive",
    title: "Care-Hive (All-in-One Healthcare)",
    description: "A comprehensive health and care platform where I served as the Team Leader. It integrates AI-powered features, remote consultations, and holistic wellness plans in one ecosystem.",
    techStack: ['MERN Stack',  'OpenAI API', 'Tailwind CSS', 'Firebase'],
    links: {
      live: "https://care-hive-chi.vercel.app/",
      frontend: "https://github.com/rantu01/carehive",
      backend: "https://github.com/rantu01/carehive"
    },
    challenges: [
      "Leading a team and coordinating tasks between frontend and backend developers",
      "Integrating Video calling feature for remote doctor consultations using ZegoCloud",
      "Implementing an AI Prescription Analyzer and Chat AI for instant health support",
      "Managing complex data structures for organ and blood donation tracking"
    ],
    futurePlans: [
      "IoT device integration for real-time patient monitoring",
      "Multi-language support for rural area accessibility",
      "Pharmacy integration for direct medicine delivery from prescriptions"
    ],
    images: [care1, care2, care3, care4, care5, care6, care7, care8, care9]
  },
  {
    id: "soulmate",
    title: "SoulMate Project",
    description: "SoulMate is a full-stack matrimony web application where users can register, create biodata, explore profiles, request contact info, and manage favorites. Admins can approve premium requests and manage platform content.",
    techStack: ['MERN Stack', 'Firebase Auth', 'JWT', 'Tailwind CSS'],
    links: {
      live: "https://soulmate-here.surge.sh/",
      frontend: "https://github.com/rantu01/soulmate-frontend",
      backend: "https://github.com/rantu01/matrimony-backend"
    },
    challenges: [
      "Implementing secure JWT-based authentication",
      "Managing conditional data visibility (e.g. contact info for premium users)",
      "Creating responsive UI/UX",
      "Integrating real-time updates for features like favorites"
    ],
    futurePlans: [
      "Add in-app messaging",
      "Premium payment integration (Stripe)",
      "Dashboard analytics for admin",
      "Push notifications for requests"
    ],
    images: [soulmate1, soulmate2, soulmate3, soulmate4]
  },
  {
    id: "garden-tips",
    title: "Garden Tips",
    description: "A gardening community platform where users can share tips, post gardening advice, and connect with other enthusiasts.",
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    links: {
      live: "https://garden-tips.surge.sh/",
      frontend: "https://github.com/rantu01/garden-tips",
      backend: "https://github.com/rantu01/garden-tips-backend"
    },
    challenges: [
      "Implemented real-time updates for posts and comments",
      "Managed user-generated content effectively",
      "Optimized image uploads for gardening photos"
    ],
    futurePlans: [
      "Plant identification feature",
      "Gardening calendar",
      "Regional plant recommendations based on location"
    ],
    images: [g1, g3, g4, g5]
  },
  {
    id: "service-review",
    title: "Service Review System",
    description: "A full-stack web app where users can add services, post/manage reviews, and explore others' reviews with secure authentication.",
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    links: {
      live: "https://service-review-system.surge.sh/",
      frontend: "https://github.com/rantu01/SRS",
      backend: "https://github.com/rantu01/srs-backend"
    },
    challenges: [
      "Handling secure authentication",
      "Managing CRUD operations",
      "Synchronizing frontend-backend data flow"
    ],
    futurePlans: [
      "Add service ratings",
      "Admin dashboard",
      "Improve UI responsiveness"
    ],
    images: [s1, s2, s3, s4]
  }
];