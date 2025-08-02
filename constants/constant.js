import {
  FaCrown,
  FaUsers,
  FaClock,
  FaHeartbeat,
  FaTrophy,
  FaShieldAlt,
  FaStar,
  FaChevronRight,
} from "react-icons/fa";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

export const trainingPrograms = [
  {
    name: "Yoga",
    description:
      "Improve flexibility, balance, and mental clarity with guided yoga sessions.",
    image: "/yoga-icon.jpg",
  },
  {
    name: "Strength Training",
    description:
      "Build muscle and increase overall strength using weights and resistance workouts.",
    image: "/yoga-icon.jpg",
  },
  {
    name: "Cardio",
    description:
      "Boost your heart health and burn calories through running, cycling, and HIIT.",
    image: "/yoga-icon.jpg",
  },
  {
    name: "Pilates",
    description:
      "Enhance core strength and posture with low-impact pilates movements.",
    image: "/yoga-icon.jpg",
  },
  {
    name: "CrossFit",
    description:
      "High-intensity functional workouts for total body conditioning.",
    image: "/yoga-icon.jpg",
  },
  {
    name: "Zumba",
    description:
      "Dance your way to fitness with energetic and fun cardio routines.",
    image: "/yoga-icon.jpg",
  },
];

export const whyChooseUs = [
  {
    icon: FaUsers,
    title: "Expert Trainers",
    description:
      "Our certified fitness professionals have years of experience helping people achieve their goals.",
    features: [
      "Certified fitness professionals",
      "Personalized workout plans",
      "24/7 support available",
    ],
  },
  {
    icon: FaTrophy,
    title: "Proven Results",
    description:
      "Join thousands of satisfied members who have transformed their bodies and lives with our programs.",
    features: [
      "95% member satisfaction rate",
      "Average 20% body fat reduction",
      "10,000+ success stories",
    ],
    highlight: true,
  },
  {
    icon: FaClock,
    title: "Flexible Schedule",
    description:
      "Work out on your own time with our 24/7 gym access and online training programs.",
    features: [
      "24/7 gym access",
      "Online workout library",
      "Mobile app included",
    ],
  },
  {
    icon: FaHeartbeat,
    title: "Health Focused",
    description:
      "We don't just focus on appearance - we help you build lasting health and wellness habits.",
    features: [
      "Health monitoring tools",
      "Nutrition guidance",
      "Wellness workshops",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Safe Environment",
    description:
      "Train with confidence in our clean, well-maintained facilities with top-notch safety protocols.",
    features: [
      "Regular equipment maintenance",
      "Clean facilities guarantee",
      "Safety-first approach",
    ],
  },
];

export const transformations = [
  {
    name: "Sarah Johnson",
    program: "12-Week Body Transformation",
    duration: "3 months",
    weightLoss: "25 lbs",
    muscleGain: "8 lbs",
    beforeImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=face",
    afterImage:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=400&fit=crop&crop=face",
    testimonial:
      "The trainers pushed me beyond what I thought was possible. I feel stronger and more confident than ever!",
  },
  {
    name: "Mike Chen",
    program: "Strength & Conditioning",
    duration: "6 months",
    weightLoss: "35 lbs",
    muscleGain: "15 lbs",
    beforeImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop&crop=face",
    afterImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    testimonial:
      "Best investment I've ever made. The personalized approach made all the difference in my journey.",
  },
  {
    name: "Emily Rodriguez",
    program: "HIIT & Nutrition Plan",
    duration: "4 months",
    weightLoss: "20 lbs",
    muscleGain: "5 lbs",
    beforeImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=600&h=400&fit=crop&crop=face",
    afterImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop&crop=face",
    testimonial:
      "Not only did I lose weight, but I gained so much energy and learned sustainable healthy habits.",
  },
];

export const trainers = [
  {
    name: "Alex Rodriguez",
    specialization: "Strength Training",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
    quote: "Strength isn't just physical - it's mental. I help you build both.",
    clientsHelped: 200,
    yearsExp: 8,
    certifications: ["NASM-CPT", "CSCS", "Nutrition"],
    social: {
      instagram: true,
      facebook: true,
      twitter: false,
    },
  },
  {
    name: "Sarah Martinez",
    specialization: "Yoga & Wellness",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=600&fit=crop",
    quote: "Wellness is a journey, not a destination. Let's walk it together.",
    clientsHelped: 150,
    yearsExp: 6,
    certifications: ["RYT-500", "Wellness Coach", "Meditation"],
    social: {
      instagram: true,
      facebook: false,
      twitter: true,
    },
  },
  {
    name: "Mike Johnson",
    specialization: "CrossFit",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
    quote: "Push your limits. That's where the magic happens.",
    clientsHelped: 300,
    yearsExp: 10,
    certifications: ["CF-L3", "USAW", "First Aid"],
    social: {
      instagram: true,
      facebook: true,
      twitter: true,
    },
  },
  {
    name: "Emma Wilson",
    specialization: "Cardio & HIIT",
    experience: "5+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=600&fit=crop",
    quote: "High energy, high results. Let's make every heartbeat count!",
    clientsHelped: 180,
    yearsExp: 5,
    certifications: ["ACSM-CPT", "HIIT Specialist", "TRX"],
    social: {
      instagram: true,
      facebook: false,
      twitter: false,
    },
  },
];

export const benefits = [
  "Full gym access for 7 days",
  "1-on-1 trainer consultation",
  "Personalized workout plan",
  "Nutrition guidance session",
  "No credit card required",
];

export const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Training Programs", href: "#" },
  { name: "Membership Plans", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

export const programs = [
  { name: "Weight Training", href: "#" },
  { name: "Cardio Workouts", href: "#" },
  { name: "HIIT Classes", href: "#" },
  { name: "Yoga & Wellness", href: "#" },
  { name: "CrossFit", href: "#" },
  { name: "Personal Training", href: "#" },
  { name: "Nutrition Coaching", href: "#" },
];

export const resources = [
  { name: "Workout Plans", href: "#" },
  { name: "Nutrition Guide", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Blog & Tips", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Mobile App", href: "#" },
  { name: "Online Classes", href: "#" },
];
