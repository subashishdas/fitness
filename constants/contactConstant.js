import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const contactInfo = [
  {
    icon: FaPhone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["info@fitnesspro.com", "support@fitnesspro.com"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: ["123 Fitness Street", "Health City, HC 12345"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: FaClock,
    title: "Hours",
    details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Sat-Sun: 6:00 AM - 10:00 PM"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

export const navigationTabs = [
  { id: "contact", label: "Contact Form" },
  { id: "locations", label: "Our Locations" },
  { id: "departments", label: "Departments" },
  { id: "faq", label: "Quick FAQ" },
];

export const locations = [
  {
    name: "Downtown Fitness Center",
    address: "123 Fitness Street, Health City, HC 12345",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM",
    amenities: ["Pool", "Sauna", "Personal Training", "Group Classes"],
  },
  {
    name: "Northside Wellness Hub",
    address: "456 Wellness Ave, Health City, HC 12346",
    phone: "+1 (555) 123-4568",
    hours: "Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM",
    amenities: [
      "Yoga Studio",
      "Rock Climbing",
      "Spa Services",
      "Nutrition Center",
    ],
  },
  {
    name: "Eastside Athletic Club",
    address: "789 Athletic Blvd, Health City, HC 12347",
    phone: "+1 (555) 123-4569",
    hours: "Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM",
    amenities: [
      "Olympic Pool",
      "Basketball Court",
      "CrossFit Box",
      "Recovery Center",
    ],
  },
];

export const departments = [
  {
    name: "Membership Services",
    email: "membership@fitnesspro.com",
    phone: "+1 (555) 123-4570",
    description: "New memberships, upgrades, and account questions",
  },
  {
    name: "Personal Training",
    email: "training@fitnesspro.com",
    phone: "+1 (555) 123-4571",
    description: "Book sessions, trainer inquiries, and program information",
  },
  {
    name: "Group Classes",
    email: "classes@fitnesspro.com",
    phone: "+1 (555) 123-4572",
    description: "Class schedules, reservations, and instructor information",
  },
  {
    name: "Corporate Wellness",
    email: "corporate@fitnesspro.com",
    phone: "+1 (555) 123-4573",
    description: "Business partnerships and employee wellness programs",
  },
];
