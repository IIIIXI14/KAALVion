export type CaseStudyCategory = "Web Development" | "Mobile Apps" | "Patented Tech" | "UI/UX Design";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: CaseStudyCategory;
  description: string[];
  metrics: {
    icon: string;
    label: string;
    value: string;
  }[];
  overview: {
    problem: string;
    solution: string;
    timeline: string;
    techStack: string[];
  };
  images: {
    url: string;
    caption: string;
  }[];
  thumbnail: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Platform Redesign",
    subtitle: "Increased conversions by 185%",
    category: "Web Development",
    thumbnail: "/placeholder.svg",
    description: [
      "Complete UI/UX overhaul with modern design system",
      "Mobile-first responsive architecture",
      "Optimized checkout flow reducing cart abandonment by 42%",
      "Integrated real-time inventory management",
    ],
    metrics: [
      { icon: "TrendingUp", label: "Conversion Rate", value: "+185%" },
      { icon: "Clock", label: "Page Load Time", value: "-60%" },
      { icon: "Users", label: "User Engagement", value: "+220%" },
    ],
    overview: {
      problem: "The client's existing e-commerce platform had a cluttered interface, slow load times, and a confusing checkout process leading to 68% cart abandonment rate. Mobile users particularly struggled with navigation and product discovery.",
      solution: "We rebuilt the entire platform using React and Next.js with a focus on performance and user experience. Implemented a clean, minimal design system with intuitive navigation, optimized images and code splitting for faster loads, and redesigned the checkout flow as a simple 3-step process.",
      timeline: "12 weeks from discovery to launch",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL"],
    },
    images: [
      { url: "/placeholder.svg", caption: "New homepage with clean hero section" },
      { url: "/placeholder.svg", caption: "Product listing with advanced filters" },
      { url: "/placeholder.svg", caption: "Streamlined checkout flow" },
      { url: "/placeholder.svg", caption: "Mobile responsive views" },
    ],
  },
  {
    id: "healthcare-appointment",
    title: "Healthcare Appointment System",
    subtitle: "Reduced 98% manual work",
    category: "Web Development",
    thumbnail: "/placeholder.svg",
    description: [
      "Automated scheduling with AI-powered slot optimization",
      "Patient portal with medical history access",
      "SMS/Email reminder system reducing no-shows by 75%",
      "HIPAA-compliant data handling and storage",
    ],
    metrics: [
      { icon: "TrendingUp", label: "Efficiency", value: "+98%" },
      { icon: "Clock", label: "Booking Time", value: "-80%" },
      { icon: "Users", label: "Patient Satisfaction", value: "4.9/5" },
    ],
    overview: {
      problem: "Healthcare clinic was managing 500+ appointments per week using spreadsheets and phone calls, leading to double bookings, missed appointments, and staff burnout. No centralized patient data system.",
      solution: "Developed a comprehensive appointment management system with intelligent scheduling that accounts for doctor availability, room availability, and appointment types. Built patient portal for self-service booking and medical history access. Integrated automated SMS/email reminders.",
      timeline: "16 weeks including HIPAA compliance audit",
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "Twilio API", "AWS"],
    },
    images: [
      { url: "/placeholder.svg", caption: "Admin dashboard overview" },
      { url: "/placeholder.svg", caption: "Calendar view with smart scheduling" },
      { url: "/placeholder.svg", caption: "Patient portal interface" },
      { url: "/placeholder.svg", caption: "Automated reminder system" },
    ],
  },
  {
    id: "real-estate-app",
    title: "Real Estate Management App",
    subtitle: "Streamlined operations for 500+ properties",
    category: "Mobile Apps",
    thumbnail: "/placeholder.svg",
    description: [
      "Cross-platform mobile app for property managers",
      "Tenant communication and payment portal",
      "Maintenance request tracking and automation",
      "Financial reporting and analytics dashboard",
    ],
    metrics: [
      { icon: "TrendingUp", label: "Revenue Growth", value: "+156%" },
      { icon: "Clock", label: "Response Time", value: "-70%" },
      { icon: "Users", label: "Active Users", value: "10k+" },
    ],
    overview: {
      problem: "Property management company struggled to coordinate maintenance across 500+ properties, process rent payments, and communicate with tenants efficiently. Everything was fragmented across multiple tools.",
      solution: "Built a unified cross-platform mobile app using React Native that allows property managers to handle maintenance requests, process payments, communicate with tenants, and access financial reports from a single interface. Tenants can submit requests, pay rent, and receive updates instantly.",
      timeline: "20 weeks from prototype to app store launch",
      techStack: ["React Native", "TypeScript", "Firebase", "Stripe", "Expo"],
    },
    images: [
      { url: "/placeholder.svg", caption: "Property manager dashboard" },
      { url: "/placeholder.svg", caption: "Maintenance tracking interface" },
      { url: "/placeholder.svg", caption: "Tenant portal and payments" },
      { url: "/placeholder.svg", caption: "Financial analytics" },
    ],
  },
  {
    id: "wifi-attendance",
    title: "WiFi-Based Attendance System",
    subtitle: "Patented technology deployed across 50+ institutions",
    category: "Patented Tech",
    thumbnail: "/placeholder.svg",
    description: [
      "Automated attendance tracking using WiFi signals",
      "Zero manual intervention required",
      "Real-time attendance analytics dashboard",
      "Integration with existing institutional systems",
    ],
    metrics: [
      { icon: "TrendingUp", label: "Time Saved", value: "95%" },
      { icon: "Users", label: "Active Institutions", value: "50+" },
      { icon: "Clock", label: "Real-time Updates", value: "<1 sec" },
    ],
    overview: {
      problem: "Educational institutions waste significant time on manual attendance. Traditional methods are prone to proxy attendance, errors, and consume valuable teaching time. Existing biometric systems require hardware installation and maintenance.",
      solution: "Our patented WiFi-based attendance system automatically detects student presence by analyzing WiFi connection patterns. No additional hardware needed - works with existing WiFi infrastructure. Provides real-time dashboards for faculty and administration.",
      timeline: "Patent granted 2022, deployed since 2023",
      techStack: ["Python", "Machine Learning", "WiFi Analytics", "React Dashboard", "PostgreSQL"],
    },
    images: [
      { url: "/placeholder.svg", caption: "Real-time attendance dashboard" },
      { url: "/placeholder.svg", caption: "Faculty analytics view" },
      { url: "/placeholder.svg", caption: "Student attendance history" },
      { url: "/placeholder.svg", caption: "Admin reports and insights" },
    ],
  },
  {
    id: "smart-farming",
    title: "Smart Farming Assistant",
    subtitle: "IoT-powered agricultural automation",
    category: "Patented Tech",
    thumbnail: "/placeholder.svg",
    description: [
      "Automated irrigation based on soil moisture",
      "Crop health monitoring with AI",
      "Weather-integrated farming recommendations",
      "Mobile app for remote farm management",
    ],
    metrics: [
      { icon: "TrendingUp", label: "Water Savings", value: "40%" },
      { icon: "Users", label: "Farms Using", value: "200+" },
      { icon: "Clock", label: "Crop Yield", value: "+35%" },
    ],
    overview: {
      problem: "Farmers struggle with unpredictable weather, inefficient water usage, and lack of real-time crop health data. Manual monitoring is time-consuming and often results in over/under-watering, leading to reduced yields and wasted resources.",
      solution: "Our patented Smart Farming Assistant uses IoT sensors to monitor soil moisture, temperature, humidity, and crop health in real-time. AI algorithms analyze this data along with weather forecasts to automate irrigation and provide actionable farming recommendations via mobile app.",
      timeline: "Patent granted 2023, active deployment ongoing",
      techStack: ["IoT Sensors", "Python", "TensorFlow", "Flutter", "AWS IoT Core", "Firebase"],
    },
    images: [
      { url: "/placeholder.svg", caption: "IoT sensor dashboard" },
      { url: "/placeholder.svg", caption: "Crop health AI analysis" },
      { url: "/placeholder.svg", caption: "Automated irrigation controls" },
      { url: "/placeholder.svg", caption: "Mobile farm management app" },
    ],
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    subtitle: "Beautiful data visualization for financial insights",
    category: "UI/UX Design",
    thumbnail: "/placeholder.svg",
    description: [
      "Complete design system for financial platform",
      "Complex data visualizations made simple",
      "Dark mode with accessibility compliance",
      "Interactive prototypes in Figma",
    ],
    metrics: [
      { icon: "Users", label: "User Testing Score", value: "9.2/10" },
      { icon: "Clock", label: "Design to Dev", value: "2 weeks" },
      { icon: "TrendingUp", label: "User Retention", value: "+89%" },
    ],
    overview: {
      problem: "FinTech startup needed a complete design overhaul for their analytics platform. Existing interface was cluttered with dense financial data, poor color contrast, and confusing navigation making it difficult for users to extract insights.",
      solution: "Created a comprehensive design system with focus on data hierarchy, readable typography, and intuitive visualizations. Developed interactive Figma prototypes with micro-interactions. Ensured WCAG 2.1 AA compliance for accessibility. Implemented both light and dark modes.",
      timeline: "8 weeks from research to design handoff",
      techStack: ["Figma", "Adobe XD", "Design System", "Accessibility Testing", "User Research"],
    },
    images: [
      { url: "/placeholder.svg", caption: "Dashboard overview - light mode" },
      { url: "/placeholder.svg", caption: "Dashboard overview - dark mode" },
      { url: "/placeholder.svg", caption: "Component library" },
      { url: "/placeholder.svg", caption: "Interactive prototypes" },
    ],
  },
];

export const categories: CaseStudyCategory[] = [
  "Web Development",
  "Mobile Apps",
  "Patented Tech",
  "UI/UX Design",
];
