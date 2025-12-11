export interface TermDefinition {
  simple: string;
  example?: string;
  full?: string;
}

export const technicalTerms: Record<string, TermDefinition> = {
  Edge: {
    simple: "Devices that work independently without constant internet",
    example: "Like a smart thermostat that works even if WiFi is down",
    full: "Edge computing refers to processing data locally on devices rather than sending everything to a central server, enabling faster responses and offline functionality."
  },
  IoT: {
    simple: "Internet-connected devices that share data",
    example: "Smart lights, fitness trackers, security cameras",
    full: "Internet of Things - physical devices embedded with sensors and software that connect to the internet to exchange data."
  },
  UX: {
    simple: "User-friendly interfaces that are easy to use",
    example: "Like a smartphone app that feels natural and intuitive",
    full: "User Experience - the overall experience a person has when interacting with a product or system."
  },
  Telemetry: {
    simple: "Data automatically sent from devices to secure online storage",
    example: "Like your fitness tracker sending your steps to your phone app",
    full: "The automatic collection and transmission of data from remote devices to a central system for monitoring and analysis."
  },
  "Row-level security": {
    simple: "Each user's data is protected separately",
    example: "Like having your own locked drawer in a shared filing cabinet",
    full: "A database security feature that ensures users can only access their own data, even when sharing the same system."
  },
  "Biometric proof": {
    simple: "Verified by fingerprint or face recognition",
    example: "Like unlocking your phone with your face",
    full: "Authentication using unique biological characteristics such as fingerprints, facial recognition, or iris scans."
  },
  "Edge-to-cloud orchestration": {
    simple: "Devices work independently but sync seamlessly with online systems",
    example: "Like your phone working offline but syncing photos when connected",
    full: "A system where devices can operate independently but automatically synchronize data and settings with cloud servers when connected."
  },
  MAC: {
    simple: "Your device's unique ID number",
    example: "Like a serial number that identifies your phone or computer",
    full: "Media Access Control address - a unique identifier assigned to network interfaces for communications on a network."
  },
  "Dual authentication": {
    simple: "Uses your device's unique ID plus fingerprint/face recognition",
    example: "Like needing both your key and fingerprint to unlock a door",
    full: "A security method requiring two different forms of verification to confirm identity."
  },
  "ESP32": {
    simple: "Small, smart computer chips for sensors",
    example: "Like the brain inside a smart light bulb",
    full: "A low-cost, low-power microcontroller with built-in WiFi and Bluetooth capabilities, commonly used in IoT devices."
  },
  "Irrigation mesh": {
    simple: "Smart sensors that talk to each other to water crops automatically",
    example: "Like a network of sprinklers that coordinate to water your garden",
    full: "A network of interconnected sensors and devices that communicate to automatically manage irrigation systems."
  },
  "Supabase RLS": {
    simple: "Secure online storage that keeps each user's data separate",
    example: "Like a bank vault where each person has their own safe deposit box",
    full: "Supabase Row-Level Security - a feature that ensures database records are only accessible to authorized users."
  },
  "Rule execution at the edge": {
    simple: "Smart decisions happen on the device, even without internet",
    example: "Like a smart door lock that works even if WiFi is down",
    full: "Processing and decision-making that occurs directly on devices rather than requiring connection to a central server."
  },
  "Edge-rendered": {
    simple: "Fast-loading admin dashboards that work offline",
    example: "Like a website that loads instantly even on slow internet",
    full: "Content generated and served from servers close to users for faster loading times."
  },
  "Multi-tenant": {
    simple: "One system manages multiple organizations securely",
    example: "Like an apartment building where each tenant has their own locked unit",
    full: "A software architecture where a single system serves multiple customers while keeping their data completely separate."
  },
  "Offline-first sync": {
    simple: "Works without internet, then syncs when connected",
    example: "Like writing notes offline that upload when you get WiFi",
    full: "Applications designed to work without internet connection, automatically synchronizing data when connection is restored."
  },
  "Biometric auth": {
    simple: "Login with fingerprint or face recognition",
    example: "Like unlocking your phone with Touch ID or Face ID",
    full: "Authentication using biological characteristics such as fingerprints, facial features, or voice patterns."
  },
  "OTA updates": {
    simple: "Automatic software updates sent wirelessly",
    example: "Like your phone updating apps automatically",
    full: "Over-The-Air updates - software updates delivered wirelessly without physical connection."
  },
  "CI/CD": {
    simple: "Automated testing and deployment of code changes",
    example: "Like an assembly line that automatically tests and ships products",
    full: "Continuous Integration/Continuous Deployment - automated processes for testing and deploying software changes."
  },
  "Firmware deployment": {
    simple: "Updating the software inside devices remotely",
    example: "Like updating your router's software from your computer",
    full: "The process of installing or updating software embedded in hardware devices."
  },
  "Sensor fusion": {
    simple: "Combining data from multiple sensors for better accuracy",
    example: "Like using both GPS and compass to find your location",
    full: "Combining data from multiple sensors to create more accurate and reliable information than any single sensor could provide."
  },
  "LoRa": {
    simple: "Long-range wireless communication for sensors",
    example: "Like walkie-talkies that work over very long distances",
    full: "Long Range radio technology for low-power, long-distance wireless communication."
  },
  "BLE": {
    simple: "Bluetooth Low Energy - wireless communication that uses very little power",
    example: "Like how your fitness tracker connects to your phone without draining battery",
    full: "Bluetooth Low Energy - a wireless communication technology designed for devices that need to operate on minimal power."
  },
  "WiFi mesh": {
    simple: "Multiple WiFi devices working together to extend coverage",
    example: "Like multiple routers that create one seamless network",
    full: "A network topology where multiple WiFi access points work together to create a single, seamless network."
  },
  "Next.js": {
    simple: "A framework for building fast, modern websites",
    example: "Like a toolkit that makes building websites easier and faster",
    full: "A React-based framework for building web applications with server-side rendering and optimized performance."
  },
  "Vite": {
    simple: "A fast tool for building web applications",
    example: "Like a high-speed assembly line for web development",
    full: "A build tool and development server that provides fast hot module replacement and optimized builds."
  },
  "Flutter": {
    simple: "A tool for building mobile apps for both Android and iOS",
    example: "Like writing once and running on both iPhone and Android",
    full: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase."
  },
  "React Native": {
    simple: "A framework for building mobile apps using web technologies",
    example: "Like building mobile apps using the same skills as web development",
    full: "A framework for building native mobile applications using React and JavaScript."
  },
  "Supabase": {
    simple: "A platform for storing data and handling user authentication",
    example: "Like a secure database and login system combined",
    full: "An open-source Firebase alternative providing database, authentication, and storage services."
  },
  "Firebase": {
    simple: "Google's platform for app backend services",
    example: "Like a toolkit for handling data, users, and notifications",
    full: "Google's platform for developing mobile and web applications with backend services."
  },
  "AWS CDK": {
    simple: "Amazon's tool for managing cloud infrastructure",
    example: "Like a blueprint for building and managing online servers",
    full: "Amazon Web Services Cloud Development Kit - a framework for defining cloud infrastructure using code."
  },
  "Grafana": {
    simple: "A tool for visualizing system performance and data",
    example: "Like a dashboard showing charts and graphs of your system's health",
    full: "An open-source analytics and monitoring platform for visualizing metrics and logs."
  },
  "Docker": {
    simple: "A tool for packaging and running applications consistently",
    example: "Like shipping containers that work the same way everywhere",
    full: "A platform for developing, shipping, and running applications in containers."
  },
  "GitHub Actions": {
    simple: "Automated workflows for testing and deploying code",
    example: "Like a robot that tests your code and deploys it automatically",
    full: "GitHub's CI/CD platform for automating software workflows."
  },
  "Three.js": {
    simple: "A library for creating 3D graphics in web browsers",
    example: "Like a toolkit for building 3D visualizations on websites",
    full: "A JavaScript library for creating and displaying 3D computer graphics in web browsers."
  },
  "Tailwind": {
    simple: "A CSS framework for quickly styling websites",
    example: "Like pre-made building blocks for website design",
    full: "A utility-first CSS framework for rapidly building custom user interfaces."
  },
  "Framer Motion": {
    simple: "A library for adding smooth animations to websites",
    example: "Like adding smooth transitions and movements to web pages",
    full: "A production-ready motion library for React that makes creating animations simple."
  }
};

export const getTermDefinition = (term: string): TermDefinition | undefined => {
  return technicalTerms[term];
};

export const searchTerms = (query: string): Array<{ term: string; definition: TermDefinition }> => {
  const lowerQuery = query.toLowerCase();
  return Object.entries(technicalTerms)
    .filter(([term]) => term.toLowerCase().includes(lowerQuery))
    .map(([term, definition]) => ({ term, definition }));
};

