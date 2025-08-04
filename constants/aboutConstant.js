import {
  FaUsers,
  FaTrophy,
  FaClock,
  FaMapMarkerAlt,
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

export const stats = [
  { icon: FaUsers, number: "10,000+", label: "Happy Members" },
  { icon: FaTrophy, number: "50+", label: "Awards Won" },
  { icon: FaClock, number: "15+", label: "Years Experience" },
  { icon: FaMapMarkerAlt, number: "5", label: "Locations" },
];

export const navigationTabs = [
  { id: "story", label: "Our Story" },
  { id: "values", label: "Our Values" },
  { id: "team", label: "Meet the Team" },
  { id: "timeline", label: "Timeline" },
];

export const values = [
  {
    icon: FaHeart,
    title: "Health First",
    description:
      "We prioritize your long-term health and wellness over quick fixes or extreme measures.",
    color: "text-red-500",
  },
  {
    icon: FaHandshake,
    title: "Community",
    description:
      "Building a supportive fitness community where everyone feels welcome and motivated.",
    color: "text-blue-500",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Constantly evolving with the latest fitness science and technology to serve you better.",
    color: "text-yellow-500",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity",
    description:
      "Honest advice, transparent pricing, and genuine care for every member's success.",
    color: "text-green-500",
  },
];

export const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=300&fit=crop",
    bio: "Former Olympic athlete turned entrepreneur, Sarah founded FitnessPro with a vision to make fitness accessible to everyone.",
    specialties: ["Business Strategy", "Olympic Training", "Leadership"],
  },
  {
    name: "Mike Rodriguez",
    role: "Head of Training",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    bio: "With 12 years in fitness and sports science, Mike leads our trainer development and program design.",
    specialties: ["Program Design", "Sports Science", "Team Leadership"],
  },
  {
    name: "Dr. Emily Chen",
    role: "Wellness Director",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=300&fit=crop",
    bio: "Licensed physician specializing in sports medicine, ensuring all our programs are safe and effective.",
    specialties: ["Sports Medicine", "Injury Prevention", "Nutrition"],
  },
];
export const milestones = [
  {
    year: "2009",
    title: "Founded",
    description: "Started with a single gym and a big dream",
  },
  {
    year: "2012",
    title: "First Award",
    description: "Best New Fitness Center in the city",
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Opened our second and third locations",
  },
  {
    year: "2018",
    title: "5,000 Members",
    description: "Reached our first major membership milestone",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Launched online training and virtual classes",
  },
  {
    year: "2022",
    title: "Recognition",
    description: 'Named "Gym of the Year" by Fitness Magazine',
  },
  {
    year: "2024",
    title: "Today",
    description: "5 locations, 10,000+ members, endless possibilities",
  },
];

export const testimonials = [
  {
    name: "Jessica Martinez",
    role: "Member since 2020",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b587?w=100&h=100&fit=crop",
    quote:
      "FitnessPro changed my life. The trainers, community, and facilities are absolutely incredible.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Member since 2019",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote:
      "Best investment I've ever made. Lost 40 pounds and gained so much more than just fitness.",
    rating: 5,
  },
];
