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
import farmScreen1 from "@/assets/f1.jpeg";
import farmScreen2 from "@/assets/f2.jpeg";
import farmScreen3 from "@/assets/f3.jpeg";
import farmScreen4 from "@/assets/f4.jpeg";
import farmScreen5 from "@/assets/f5.jpeg";
import farmScreen6 from "@/assets/f6.jpeg";
import farmScreen7 from "@/assets/f7.jpeg";

const FarmingAssistantDetail = () => {
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
  const [simpleMode, setSimpleMode] = useState(false);

  const stickyScrollContent = [
    {
      title: "Dashboard Overview",
      description: "Welcome to your smart farming command center. Get a quick overview of all connected devices, monitor online status, and view recent activity at a glance. Track your total devices and see which ones are currently active in real-time.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen1} alt="Dashboard Overview screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Device Overview",
      description: "Monitor individual device status and environmental readings. View real-time temperature, humidity, and soil moisture data for each connected device. Check online status and see when devices were last updated.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen2} alt="Device Overview screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Sensor Monitoring",
      description: "Track detailed sensor readings with real-time updates. View current temperature, humidity, and soil moisture levels with visual indicators. Access sensor history with progress bars showing trends over time.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen3} alt="Sensor Monitoring screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Actuator Controls",
      description: "Directly control your farm equipment with relay switches. Turn irrigation pumps, lights, fans, and other devices on or off with a single tap. Monitor the status of all relays and manage multiple devices simultaneously.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen4} alt="Actuator Controls screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Schedule Automation",
      description: "Set up automated schedules for your farm equipment. Configure relay controls to run automatically based on days of the week and time ranges. Enable schedule automation to reduce manual intervention and ensure consistent operations.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen5} alt="Schedule Automation screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Settings & Profile",
      description: "Manage your account settings and profile information. Update contact details, view your user ID, and monitor system status. Configure device connections, alerts, and notification preferences all in one place.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen6} alt="Settings & Profile screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
    {
      title: "Account Management",
      description: "Complete control over your account settings. Edit your profile, change contact information, and manage system preferences. View connected devices, alerts, and system status from a centralized settings panel.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Iphone src={farmScreen7} alt="Account Management screen" className="w-full max-w-[280px] h-auto" />
        </div>
      ),
    },
  ];

  const coreCards = [
    {
      label: "Focus",
      title: "Boost Productivity",
      description:
        "Automate repetitive farming tasks while staying alerted to anomalies in soil moisture, temperature, and humidity. Predict, plan, and react faster — reducing manual labor and increasing crop yield.",
    },
    {
      label: "Deployment",
      title: "Edge + Cloud Ready",
      description:
        "Local gateways (ESP32 edge devices) keep automations running even without internet. When connected, they sync with cloud analytics so farm managers can orchestrate multiple locations from a unified dashboard.",
    },
    {
      label: "Sensing Layer",
      title: "Live Soil Intelligence",
      bullets: [
        "Real-time temperature (DHT11)",
        "Soil moisture percentage",
        "Humidity levels",
        "30-second interval updates + threshold alerts",
        "Sensors calibrated to local crop types",
      ],
    },
    {
      label: "Irrigation Control",
      title: "Automated Watering Engine",
      bullets: [
        "Smart logic on ESP32 triggers watering when soil moisture drops below threshold",
        "Real-time relay control + manual override from the app",
        "Safety fallback if thresholds are corrupted",
        "Supports 5 independent irrigation lines",
        "Cuts water usage by 30–40% during peak seasons",
      ],
    },
  ];

  const automationRules = [
    "Rules run directly at the edge for reliability (no cloud dependency).",
    "IF soil_moisture < threshold AND temperature > limit AND humidity < limit → Trigger Motor.",
    "Rule frequency configurable by the farmer with execution history logs.",
    "Weather-aware adjustments keep irrigation aligned with forecasts.",
  ];

  const dashboardItems = [
    "Multi-farm overview with online/offline status + last-seen timestamps.",
    "Graphs for temperature, humidity, and soil moisture in one pane.",
    "Control panel for 5 relays with instant actuation feedback.",
    "Smart alerts for abnormal readings + anomaly detection.",
  ];

  const weatherAdvisory = [
    "Rain predictions and evaporation estimates.",
    "Irrigation delay or spraying window suggestions.",
    "Crop-safe temperature alerts for each district.",
  ];

  const languages = ["English", "Hindi", "Marathi"];

  const security = [
    "Firebase authentication with device ownership verification.",
    "Encrypted sensor data in transit and at rest.",
    "No location tracking; only authorized farm zones are monitored.",
    "Role-based access for admins, agronomists, and field operators.",
  ];

  const setupSteps = [
    "Power the ESP32 controller.",
    "Connect to device Wi-Fi (AP mode) from the Flutter app.",
    "Enter farm SSID + password and assign the plot.",
    "Device auto-registers under the user’s account and starts streaming data.",
  ];

  const hardwareComponents = [
    "ESP32 controller",
    "DHT11 sensor (temperature / humidity)",
    "Soil moisture probe",
    "Relay module controlling up to 5 pumps/valves",
    "WiFi module + power unit",
    "Water pump / solenoid valves",
  ];

  const softwareComponents = [
    "Flutter mobile app (farmer + admin console)",
    "Firebase Realtime Database for telemetry",
    "Firestore for rule + history logs",
    "Cloud analytics engine for insights + alerts",
  ];

  const impact = [
    "30–40% water savings through intelligent irrigation.",
    "15–25% higher crop yield for moisture-sensitive crops.",
    "Zero manual monitoring; system alerts on anomalies.",
    "Early detection reduces crop disease and fertilizer loss.",
    "Ideal for sugarcane, paddy, cotton, horticulture, greenhouse farms, drip systems, and polyhouses.",
  ];

  const roadmap = [
    "AI-powered crop diagnosis via camera input.",
    "Predictive irrigation based on seasonal and soil models.",
    "Yield forecasting dashboards.",
    "Automated fertilizer dosing integrated with irrigation.",
    "Pest and disease detection with image + sensor fusion.",
  ];

  return (
    <div className="relative min-h-screen bg-[#060b0c] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#04191c] via-[#082b2f] to-[#120c1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,68,59,0.32),_transparent_55%)]" />
      <Navbar />

      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 space-y-12 sm:space-y-16 md:space-y-20">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs text-white/60 mb-3 sm:mb-4">Patent #AGRI-2024-002</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black max-w-4xl mb-4 sm:mb-6">
                Smart Farming Assistant Suite
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-3xl mb-4">
                {simpleMode ? (
                  <>
                    A smart farming system that automatically waters your crops based on soil conditions. Sensors in the field measure moisture, temperature, and humidity. When crops need water, the system turns on irrigation automatically—even without internet. You can monitor everything from your phone and get weather-based advice in your local language.
                  </>
                ) : (
                  <>
                    A complete automation + monitoring system that gives farmers, greenhouse operators, and agri-managers real-time
                    insights, smart irrigation, and AI-driven recommendations. It merges <TechnicalTermTooltip term="IoT">IoT sensors</TechnicalTermTooltip>, automated control systems,
                    cloud dashboards, and multilingual apps into a high-precision farming ecosystem.
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
          <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/60 mb-2">Purpose</p>
            <p className="text-sm sm:text-base text-white/80">
              Think of it as a personal digital assistant for every farm manager. Monitor soil, control pumps, automate
              irrigation, detect anomalies, and get weather-based recommendations — all from a single pane of glass.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-gradient-to-r from-[#2a3470] via-[#1b1f3f] to-[#090b16] border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative shadow-[0_20px_60px_rgba(10,15,35,0.65)]">
            <div className="mb-6 sm:mb-8 md:mb-10">
              <p className="uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs text-white/60 mb-2">Product UI</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Mobile Experience</h2>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl">
                Explore the actual Smart Farming Assistant app screens — from dashboard overview to device controls and automation scheduling —
                presented in an interactive scroll experience. Scroll to see each screen with detailed descriptions.
              </p>
            </div>

            <StickyScroll content={stickyScrollContent} />
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {coreCards.map((card) => (
              <div key={card.label} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">{card.label}</p>
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                {"description" in card ? (
                  <p className="text-white/80">{card.description}</p>
                ) : (
                  <ul className="space-y-2 text-white/80">
                    {card.bullets?.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Automation Engine</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-white/85 mb-4">
                  Rules run directly on the device for reliability. If soil moisture dips, temperature rises, and humidity
                  drops, the motor kicks in without needing the cloud.
                </p>
                <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
                  <p className="font-mono text-white/80 text-sm">
                    IF soil_moisture &lt; threshold AND temperature &gt; limit AND humidity &lt; limit → Trigger Motor
                  </p>
                </div>
              </div>
              <div>
                <ul className="space-y-3 text-white/80">
                  {automationRules.map((rule) => (
                    <li key={rule} className="flex gap-3">
                      <span className="text-[var(--primary)] mt-1">✔</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Cloud Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {dashboardItems.map((item) => (
                <div key={item} className="rounded-2xl bg-black/30 border border-white/10 p-6">
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-white/70 mt-6">
              Perfect for remote monitoring when farmers are away from the fields — glance at every pump, sensor, and relay in
              seconds.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Weather Integration</h2>
              <ul className="space-y-2 text-white/80">
                {weatherAdvisory.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--primary)] mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/70 mt-4">
                Advisory is localized for Indian districts, ensuring recommendations align with real-world climate behavior.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Multilingual Support</h2>
              <p className="text-white/80 mb-4">
                Alerts, notifications, and instructions are culturally adapted — not just translated — so farmers take action
                quickly.
              </p>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span key={lang} className="rounded-full border border-white/20 px-4 py-2 text-white/85">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Security</h2>
            <ul className="space-y-3 text-white/80">
              {security.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Device Setup</h2>
              <ol className="list-decimal pl-5 space-y-2 text-white/80">
                {setupSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="text-white/70 mt-4">Plug-and-play onboarding means no technician visit is required.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold mb-4">System Components</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="uppercase text-xs tracking-[0.3em] text-white/60 mb-2">On-field Hardware</p>
                  <ul className="space-y-1 text-white/80">
                    {hardwareComponents.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[var(--primary)]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="uppercase text-xs tracking-[0.3em] text-white/60 mb-2">Software Stack</p>
                  <ul className="space-y-1 text-white/80">
                    {softwareComponents.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[var(--primary)]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Impact</h2>
            <ul className="space-y-3 text-white/80">
              {impact.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--primary)] mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#D93D3A] to-[#666666] p-[1px]">
            <div className="rounded-3xl bg-[#03100f] p-10 space-y-6">
              <p className="uppercase text-xs tracking-[0.4em] text-white/70">Future Roadmap</p>
              <h2 className="text-3xl font-bold">The suite evolves as farms grow.</h2>
              <ul className="space-y-3 text-white/85">
                {roadmap.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-white/70 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/#patents"
                  className="rounded-full bg-white text-[#03100f] font-semibold px-8 py-3 hover:scale-105 transition"
                >
                  Back to Patents
                </a>
                <button
                  onClick={scrollToContact}
                  className="rounded-full border border-white/30 text-white font-semibold px-8 py-3 hover:bg-white/10 transition"
                >
                  Book a Farm Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#D93D3A] to-[#666666] p-[1px]">
            <div className="rounded-3xl bg-[#03100f] p-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div>
                <p className="uppercase text-xs tracking-[0.4em] text-white/70 mb-3">Next Steps</p>
                <h2 className="text-3xl font-bold mb-2">Keep farmers informed, even before sunrise.</h2>
                <p className="text-white/80 max-w-2xl">
                  Use this CTA banner for ROI tools, agronomy guides, or booking strategy workshops once your final copy is
                  ready.
                </p>
              </div>
              <a
                href="/#patents"
                className="rounded-full bg-white text-[#03100f] font-semibold px-8 py-3 hover:scale-105 transition"
              >
                Back to Patents
              </a>
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

export default FarmingAssistantDetail;

