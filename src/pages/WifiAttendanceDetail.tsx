import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import screen1 from "@/assets/1.jpg";
import screen2 from "@/assets/2.jpg";
import screen3 from "@/assets/3.jpg";
import screen4 from "@/assets/4.jpg";
import screen5 from "@/assets/5.jpg";
import screen6 from "@/assets/6.jpg";
import screen7 from "@/assets/7.jpg";
import screen8 from "@/assets/8.jpg";

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
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,158,255,0.25),_transparent_55%)]" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 space-y-20">
        <section className="container mx-auto px-6">
          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">Patent #WIFI-2024-001</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl mb-4">
            WiFi-Based Attendance Platform
          </h1>
          <p className="text-lg text-white/85 max-w-3xl">
            A fully automated attendance system that authenticates individuals using WiFi proximity + registered devices,
            eliminating hardware scanners, QR codes, and manual check-ins. Designed for organizations that demand accuracy,
            automation, and zero-interruption workflows.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-2">Platform Overview</p>
              <p className="text-white/80">
                Logs attendance the moment a registered device connects to an approved WiFi zone with dual-layer verification
                and enterprise-grade security.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-2">Hands-Free</p>
              <p className="text-white/80">MAC + biometric checks eliminate spoofing and keep the process invisible to users.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-2">Dashboard Ready</p>
              <p className="text-white/80">Modern analytics with exports, HR hooks, and real-time attendance status.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-[#2a3470] via-[#1b1f3f] to-[#090b16] border border-white/10 p-8 lg:p-12 overflow-hidden relative shadow-[0_20px_60px_rgba(10,15,35,0.65)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-10">
              <div>
                <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-2">Product UI</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Mobile Experience Carousel</h2>
                <p className="text-white/80 max-w-2xl">
                  Explore the actual KAALVION attendance app screens — from login to biometric verification dashboards —
                  presented in a smooth, 2025-worthy carousel. Swipe or use the controls to move through each flow.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  aria-label="Previous screen"
                  className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length)
                  }
                >
                  <ChevronLeft className="w-5 h-5 mx-auto" />
                </button>
                <button
                  aria-label="Next screen"
                  className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % gallery.length)}
                >
                  <ChevronRight className="w-5 h-5 mx-auto" />
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
                    <div className="w-full max-w-[320px] bg-white/10 border border-white/15 rounded-[40px] p-8 backdrop-blur-lg">
                      <img src={item.src} alt={item.caption} className="w-full h-auto object-contain" />
                      <p className="text-center text-white/80 text-sm mt-4">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-white w-8" : "bg-white/30 w-2"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Core Pillars</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-[#4A9EFF] flex-shrink-0 mt-1" />
                  <p className="text-white/85">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
              <div className="space-y-4">
                {components.map((component) => (
                  <div key={component.title}>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">{component.title}</p>
                    <p className="text-lg font-semibold text-white mt-1">{component.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-4">Workflow Summary</h2>
              <ol className="space-y-3 list-decimal pl-5 text-white/80">
                {workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-[#060b18]/60 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Security Specs (Enterprise-Grade)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {securitySections.map((section) => (
                <div key={section.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-white/80">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-[#4A9EFF] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {deployment.map((block) => (
              <div key={block.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold mb-3">{block.title}</h3>
                <ul className="space-y-2 text-white/80">
                  {block.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="text-[#4A9EFF] mt-1">→</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 space-y-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Feasibility</h3>
                <ul className="space-y-2 text-white/80">
                  {feasibility.feasibility.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Challenges Solved</h3>
                <ul className="space-y-2 text-white/80">
                  {feasibility.challenges.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Viability</h3>
                <ul className="space-y-2 text-white/80">
                  {feasibility.viability.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Impact & Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impacts.map((impact) => (
                <div key={impact.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-xl font-semibold mb-4">{impact.title}</h3>
                  <ul className="space-y-2 text-white/80">
                    {impact.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#4A9EFF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#4A9EFF] via-[#7F5BFF] to-[#A855F7] p-[1px]">
            <div className="rounded-3xl bg-[#070812] p-10">
              <p className="uppercase text-xs tracking-[0.4em] text-white/70 mb-3">Future Scope</p>
              <h2 className="text-3xl font-bold mb-6">Roadmap Inspired by SIH Presentation</h2>
              <ul className="space-y-3 text-white/85">
                {futureScope.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#4A9EFF] mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#patents"
                  className="rounded-full bg-white text-[#070812] font-semibold px-8 py-3 hover:scale-105 transition"
                >
                  Back to Patents
                </a>
                <button
                  onClick={scrollToContact}
                  className="rounded-full bg-transparent border border-white/30 text-white font-semibold px-8 py-3 hover:bg-white/10 transition"
                >
                  Book a Pilot
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default WifiAttendanceDetail;

