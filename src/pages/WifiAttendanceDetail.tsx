import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import TechnicalTermTooltip from "@/components/TechnicalTermTooltip";
import ExpandableExplanation from "@/components/ExpandableExplanation";
import Glossary from "@/components/Glossary";
import screen1 from "@/assets/1.jpeg";
import screen2 from "@/assets/2.jpeg";
import screen3 from "@/assets/3.jpeg";
import screen4 from "@/assets/4.jpeg";
import screen5 from "@/assets/5.jpeg";
import screen6 from "@/assets/6.jpeg";
import screen7 from "@/assets/7.jpeg";
import screen8 from "@/assets/8.jpeg";
import screen9 from "@/assets/9.jpeg";
import screen10 from "@/assets/10.jpeg";

const WifiAttendanceDetail = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate("/#contact");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const gallery = [
    { src: screen1, caption: "Login & onboarding" },
    { src: screen2, caption: "Real-time attendance status" },
    { src: screen3, caption: "Account & device profile" },
    { src: screen4, caption: "Manual attendance control" },
    { src: screen5, caption: "Biometric verification dashboard" },
    { src: screen6, caption: "WiFi & timeframe configuration" },
    { src: screen7, caption: "Attendance reports overview" },
    { src: screen8, caption: "Detailed timeframe analytics" },
    { src: screen9, caption: "Admin/Employee and more app context" },
    { src: screen10, caption: "Further interface screen" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [simpleMode, setSimpleMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallery.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [gallery.length]);

  const pillars = [
    "Hands-free attendance using WiFi device detection",
    "MAC + Biometric dual authentication to eliminate spoofing",
    "No hardware required — deploy using existing WiFi",
    "Admin dashboard for insights, analytics, and exports",
    "Secure, private, and compliant with no stored biometric data",
  ];

  const components = [
    { title: "App", description: "React Native (Android & iOS) for admins and employees" },
    { title: "Backend Services", description: "Node.js scanner service, Firebase Cloud Messaging, Supabase Auth + DB + RLS" },
    { title: "Scanner Device", description: "Admin Android device with Termux WiFi client (IoT router upgrade ready)" },
  ];

  const workflow = [
    "User registers, linking MAC address + daily biometric token.",
    "Admin scanning device detects clients connected to the WiFi zone.",
    "System matches hashed MAC entries and marks presence automatically.",
    "Biometric verification ensures the device owner is present.",
    "Attendance logs sync instantly to Supabase for dashboards & exports.",
  ];

  const securitySections = [
    {
      title: "Dual-Layer Protection",
      points: [
        "MAC addresses are registered, hashed, and encrypted.",
        "Daily biometric verification prevents device sharing and spoofing.",
        "Fail-safe rule: 3/5 scan validation before presence is confirmed.",
      ],
    },
    {
      title: "Database Security",
      points: [
        "Supabase Row-Level Security isolates tenant data.",
        "Only verification tokens are stored — never biometric data.",
        "Encrypted APIs with auth policies for every operation.",
      ],
    },
    {
      title: "Privacy & Compliance",
      points: [
        "GDPR-aligned and compliant with India’s DPDP Act.",
        "User consent captured during signup.",
        "Zero tracking outside authorized zones.",
      ],
    },
  ];

  const deployment = [
    {
      title: "Setup Requirements",
      steps: [
        "Existing WiFi router and internet access.",
        "Admin Android device with Termux.",
        "Supabase project + Firebase push notifications.",
      ],
    },
    {
      title: "Quick Deployment Steps",
      steps: [
        "Install KAALVION Admin Scanner (Termux module).",
        "Connect admin device to the authorized WiFi network.",
        "Configure Supabase + Firebase keys and attendance thresholds.",
        "Add locations, groups, and employees; start scanning.",
      ],
    },
    {
      title: "Optional Advanced Setup",
      steps: [
        "Multi-branch routing and VPN for central monitoring.",
        "IoT router node integration for zero admin touch.",
        "Automated scheduling per shift or policy.",
      ],
    },
  ];

  const feasibility = {
    feasibility: [
      "Works with any existing WiFi—no hardware cost.",
      "Avoids ₹3,000–₹15,000 per biometric machine.",
      "Prototype tested across multiple WiFi setups and platforms.",
      "Fully cross-platform mobile experience.",
    ],
    challenges: [
      "MAC randomization solved via explicit registration.",
      "Device sharing blocked with biometric tie-in.",
      "Privacy concerns addressed with hashing + zero biometric storage.",
      "Consent captured during onboarding for legal compliance.",
    ],
    viability: [
      "Pilot-ready in 4–6 weeks; scales beyond 1000+ employees per branch.",
      "Ideal for corporate offices, universities, and hybrid teams.",
      "Seamless HR / ERP integration keeps downstream systems in sync.",
    ],
  };

  const impacts = [
    {
      title: "Industry Impact",
      items: [
        "Saves 10–15 minutes per attendance session.",
        "Removes queues at biometric machines.",
        "Eliminates manual registers and paper trails.",
        "Immediate HR / ERP sync for payroll-ready data.",
      ],
    },
    {
      title: "Societal Impact",
      items: [
        "No proxy attendance or favoritism.",
        "Transparent logs for students, staff, and contractors.",
        "Supports hybrid / remote work policies.",
        "Reduces friction inside schools and workplaces.",
      ],
    },
    {
      title: "Environmental Impact",
      items: [
        "No RFID cards → zero e-waste.",
        "Uses existing WiFi infrastructure; no extra hardware footprint.",
        "Lower power consumption vs biometric scanners.",
      ],
    },
  ];

  const futureScope = [
    "AI-driven analytics to predict absenteeism and surface smart insights.",
    "Blockchain audit logs for tamper-proof attendance trails.",
    "IoT router nodes for autonomous scanning with higher accuracy.",
    "Deep integrations with payroll, ERP, and workforce platforms.",
  ];

  return (
    <div className="relative min-h-screen bg-[#070812] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1630] via-[#111933] to-[#150c1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,68,59,0.36),_transparent_55%)]" />
      <Navbar />

      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 space-y-12 sm:space-y-16 md:space-y-20">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs text-white/60 mb-3 sm:mb-4">Patent #WIFI-2024-001</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl mb-3 sm:mb-4">
                WiFi-Based Attendance Platform
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-3xl mb-4">
                {simpleMode ? (
                  <>
                    An automatic attendance system that recognizes you when you connect to office WiFi. Like a smart door that knows you&apos;re there—no scanning, no cards, no manual check-in needed. Your device&apos;s unique ID plus your fingerprint/face confirms it&apos;s really you.
                  </>
                ) : (
                  <>
                    A fully automated attendance system that authenticates individuals using <TechnicalTermTooltip term="WiFi mesh">WiFi proximity</TechnicalTermTooltip> + registered devices,
                    eliminating hardware scanners, QR codes, and manual check-ins. Designed for organizations that demand accuracy,
                    automation, and zero-interruption workflows.
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSimpleMode(!simpleMode)}
                className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition text-sm flex items-center gap-2 min-h-[44px]"
              >
                <HelpCircle className="w-4 h-4" />
                {simpleMode ? "Technical View" : "Simple View"}
              </button>
              <Glossary trigger={
                <button className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition text-sm min-h-[44px]">
                  Glossary
                </button>
              } />
            </div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/60 mb-2">Platform Overview</p>
              <p className="text-sm sm:text-base text-white/80">
                Logs attendance the moment a registered device connects to an approved WiFi zone with dual-layer verification
                and enterprise-grade security.
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/60 mb-2">Hands-Free</p>
              <p className="text-sm sm:text-base text-white/80">
                {simpleMode ? (
                  "Your device's unique ID plus fingerprint/face recognition prevents cheating and works automatically—you don't need to do anything."
                ) : (
                  <>
                    <TechnicalTermTooltip term="MAC">MAC</TechnicalTermTooltip> + <TechnicalTermTooltip term="Biometric proof">biometric</TechnicalTermTooltip> checks eliminate spoofing and keep the process invisible to users.
                  </>
                )}
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/60 mb-2">Dashboard Ready</p>
              <p className="text-sm sm:text-base text-white/80">Modern analytics with exports, HR hooks, and real-time attendance status.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-gradient-to-r from-[#2a3470] via-[#1b1f3f] to-[#090b16] border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative shadow-[0_20px_60px_rgba(10,15,35,0.65)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-10">
              <div>
                <p className="uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs text-white/60 mb-2">Product UI</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Mobile Experience Carousel</h2>
                <p className="text-sm sm:text-base text-white/80 max-w-2xl">
                  Explore the actual KAALVION attendance app screens — from login to biometric verification dashboards —
                  presented in a smooth, 2025-worthy carousel. Swipe or use the controls to move through each flow.
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <button
                  aria-label="Previous screen"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition min-h-[44px]"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length)
                  }
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
                </button>
                <button
                  aria-label="Next screen"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition min-h-[44px]"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % gallery.length)}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {gallery.map((item, index) => (
                  <div key={item.src + index} className="min-w-full flex justify-center">
                    <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white/10 border border-white/15 rounded-[32px] sm:rounded-[40px] p-4 sm:p-6 md:p-8">
                      <img src={item.src} alt={item.caption} className="w-full h-auto object-contain" />
                      <p className="text-center text-white/80 text-xs sm:text-sm mt-3 sm:mt-4">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      currentSlide === index ? "bg-white w-8" : "bg-white/30 w-2"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ...rest of your component remains unchanged... */}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default WifiAttendanceDetail;
