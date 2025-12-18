import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, HelpCircle } from "lucide-react";
import TechnicalTermTooltip from "@/components/TechnicalTermTooltip";
import ExpandableExplanation from "@/components/ExpandableExplanation";
import Glossary from "@/components/Glossary";
import { Iphone } from "@/registry/magicui/iphone";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
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

  const [simpleMode, setSimpleMode] = useState(false);

  const stickyScrollContent = [
    {
      title: "Login & Onboarding",
      description: "Clean welcome and login flow with quick device setup so users can start marking attendance in minutes.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen1} alt="Login & Onboarding screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Real-time Attendance Status",
      description: "Live status showing today’s check-ins, current session time, and quick actions for on-time presence.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen2} alt="Real-time Attendance Status screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Account & Device Profile",
      description: "User profile with linked devices and verification badges so admins know which device is authorized.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen3} alt="Account & Device Profile screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Manual Attendance Control",
      description: "Manual override for exceptions—admins can mark present/absent with reason codes and audit notes.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen4} alt="Manual Attendance Control screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Biometric Verification Dashboard",
      description: "Verification dashboard summarizing biometric checks, attempts, and validation outcomes for each user.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen5} alt="Biometric Verification Dashboard screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "WiFi & Timeframe Configuration",
      description: "Configure allowed WiFi zones and working windows to ensure attendance is only captured in valid ranges.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen6} alt="WiFi & Timeframe Configuration screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Attendance Reports Overview",
      description: "Reports hub with summaries, exports, and visual attendance trends for teams and locations.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen7} alt="Attendance Reports Overview screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Detailed Timeframe Analytics",
      description: "Time-sliced analytics showing arrivals, late marks, and session lengths across days and shifts.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen8} alt="Detailed Timeframe Analytics screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Admin/Employee Context",
      description: "Role-based view highlighting what admins and employees can see and do in their respective dashboards.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen9} alt="Admin/Employee Context screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Advanced Interface Features",
      description: "Additional interface panels for advanced settings, filters, and fine-grained attendance controls.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={screen10} alt="Advanced Interface Features screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
  ];

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
              <p className="uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs text-white/60 mb-3 sm:mb-4">
                Patent #WIFI-2024-001
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl mb-3 sm:mb-4">
                WiFi Attendance – the fastest attendance app by KAALVION
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-3xl mb-4">
                {simpleMode ? (
                  <>
                    An automatic WiFi attendance system that recognizes you when you connect to office WiFi. Like a smart door
                    that knows you&apos;re there—no scanning, no cards, no manual check-in needed. Your device&apos;s unique ID plus
                    your fingerprint/face confirms it&apos;s really you, making this one of the fastest attendance apps you can
                    deploy.
                  </>
                ) : (
                  <>
                    A fully automated WiFi attendance platform that authenticates individuals using{" "}
                    <TechnicalTermTooltip term="WiFi mesh">WiFi proximity</TechnicalTermTooltip> + registered devices, eliminating
                    hardware scanners, QR codes, and manual check-ins. Designed for organizations that demand accuracy,
                    automation, and zero-interruption workflows, it positions WiFi Attendance as the best attendance app for
                    modern offices, campuses, and factories.
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
            <div className="mb-6 sm:mb-8 md:mb-10">
                <p className="uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs text-white/60 mb-2">Product UI</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Mobile Experience</h2>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl">
                Explore the actual KAALVION WiFi Attendance app screens — from login to biometric verification dashboards —
                presented in an interactive scroll experience. Scroll to see how the fastest attendance app behaves in real
                usage.
              </p>
            </div>

            <StickyScroll content={stickyScrollContent} />
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12 md:space-y-14">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
              Why WiFi Attendance is the fastest attendance app.
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl">
              Traditional attendance apps depend on QR codes, GPS, or shared tablets. They&apos;re easy to cheat and slow to
              use. WiFi Attendance verifies a person&apos;s presence the moment their device connects to your trusted network, so
              check-ins happen in the background while people start work.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-[var(--primary)]" />
                <span>One-tap check-in over secure WiFi, no queues or scanning.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-[var(--primary)]" />
                <span>Device and network fingerprinting to prevent fake locations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-[var(--primary)]" />
                <span>Real-time dashboards for HR and managers across locations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-[var(--primary)]" />
                <span>Works across offices, classrooms, and large campuses.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
              The best attendance app for offices, campuses, and field teams.
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl">
              Whether you&apos;re tracking employees in a single office, students across multiple classrooms, or technicians
              moving between client sites, WiFi Attendance gives you accurate, tamper-proof data you can trust.
            </p>
            <div className="mt-4 grid gap-4 text-sm text-white/75 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-white">Corporate offices</h3>
                <p className="mt-1">
                  Fast, contactless attendance for hybrid teams with flexible timing rules and late-coming alerts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Colleges &amp; schools</h3>
                <p className="mt-1">
                  Automated attendance across classrooms and labs, with exports for reports and compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Factories &amp; sites</h3>
                <p className="mt-1">
                  Track shifts and overtime in real time, even across multiple plants or locations, from a single dashboard.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
              How WiFi Attendance works.
            </h2>
            <ol className="mt-3 space-y-3 text-sm sm:text-base text-white/80 max-w-3xl list-decimal list-inside">
              <li>
                Employees or students install the WiFi Attendance app on their phones and sign in with secure credentials.
              </li>
              <li>
                When they enter a location covered by your trusted WiFi networks, the app detects presence and records attendance
                in a few seconds.
              </li>
              <li>
                Our backend applies your rules — grace periods, shift timings, breaks — and updates real-time dashboards for HR
                or faculty.
              </li>
              <li>
                Admins can export reports, integrate with payroll or LMS systems, and audit logs for compliance from a single
                control panel.
              </li>
            </ol>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Ready to try the fastest attendance app?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl">
              Book a demo with KAALVION and see how WiFi Attendance can replace slow, error-prone attendance processes with a
              best-in-class WiFi-based system.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToContact}
                className="px-5 py-2.5 rounded-full bg-[var(--primary)] text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,68,59,0.6)] hover:bg-[var(--primary)]/90 transition min-h-[44px]"
              >
                Book a demo
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-5 py-2.5 rounded-full border border-white/30 text-sm font-semibold text-white/80 hover:bg-white/5 transition min-h-[44px]"
              >
                Back to overview
              </button>
            </div>

            <div className="mt-4 space-y-4 text-sm sm:text-base text-white/80 max-w-3xl">
              <div>
                <p className="font-semibold text-white">Is WiFi Attendance better than QR or RFID attendance?</p>
                <p className="mt-1">
                  Yes. Because WiFi Attendance verifies the device on your secure network, people don&apos;t have to stand in
                  line to scan a code or touch shared hardware. It&apos;s faster, more hygienic, and much harder to fake.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">What makes this the fastest attendance app?</p>
                <p className="mt-1">
                  Check-in happens automatically when the device connects to your trusted WiFi, so most people are marked present
                  within a few seconds of arriving. There is no manual scanning step to slow everyone down.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Can WiFi Attendance work across multiple locations?</p>
                <p className="mt-1">
                  Yes. You can register multiple offices, buildings, or classrooms and manage all of them from a single KAALVION
                  dashboard with unified reports.
                </p>
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
