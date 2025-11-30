import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronLeft, ChevronRight, ActivitySquare, Droplets, Thermometer, Leaf } from "lucide-react";

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
  const farmingGallery = [
    {
      title: "Field Command Console",
      subtitle: "Block A • Western zone",
      metrics: [
        { label: "Soil Moisture", value: "31%", trend: "optimal" },
        { label: "pH", value: "6.8", trend: "stable" },
        { label: "Pump Relay", value: "Line 02 • Armed", trend: "ready" },
      ],
      alert: "Irrigation scheduled in 12 min • Weather-safe window detected",
    },
    {
      title: "Greenhouse Telemetry",
      subtitle: "Polyhouse #7",
      metrics: [
        { label: "Humidity", value: "58%", trend: "low" },
        { label: "Temperature", value: "27°C", trend: "ideal" },
        { label: "Fan Cycle", value: "Auto • 5m cadence", trend: "synced" },
      ],
      alert: "AI Rule: Apply mist cycle if humidity < 55% for 10 min",
    },
    {
      title: "Irrigation Mesh",
      subtitle: "North Basin",
      metrics: [
        { label: "Lines Active", value: "3/5", trend: "balanced" },
        { label: "Flow Rate", value: "18 L/min", trend: "steady" },
        { label: "Reservoir", value: "78%", trend: "healthy" },
      ],
      alert: "Weather API: Rain probability 12%. Delay fertilizer dosing 2 hours.",
    },
  ];

  const [currentFarmSlide, setCurrentFarmSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFarmSlide((prev) => (prev + 1) % farmingGallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [farmingGallery.length]);

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.2),_transparent_55%)]" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 space-y-20">
        <section className="container mx-auto px-6">
          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">Patent #AGRI-2024-002</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black max-w-4xl mb-6">
            Smart Farming Assistant Suite
          </h1>
          <p className="text-lg text-white/85 max-w-3xl">
            A complete automation + monitoring system that gives farmers, greenhouse operators, and agri-managers real-time
            insights, smart irrigation, and AI-driven recommendations. It merges IoT sensors, automated control systems,
            cloud dashboards, and multilingual apps into a high-precision farming ecosystem.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">Purpose</p>
            <p className="text-white/80">
              Think of it as a personal digital assistant for every farm manager. Monitor soil, control pumps, automate
              irrigation, detect anomalies, and get weather-based recommendations — all from a single pane of glass.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f171c] via-[#0a0d12] to-[#050608] p-10 shadow-[0_35px_110px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
            <div className="flex flex-col gap-6 pb-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.55em] text-white/60">Product UI</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Live farm telemetry carousel
                </h2>
                <p className="mt-4 max-w-2xl text-white/70">
                  Swipe through the actual dashboards farmers use—edge relays, soil probes, and weather advisories rendered
                  with the same serif precision as our patent filings.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  aria-label="Previous panel"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                  onClick={() =>
                    setCurrentFarmSlide((prev) => (prev - 1 + farmingGallery.length) % farmingGallery.length)
                  }
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next panel"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                  onClick={() => setCurrentFarmSlide((prev) => (prev + 1) % farmingGallery.length)}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
                style={{ transform: `translateX(-${currentFarmSlide * 100}%)` }}
              >
                {farmingGallery.map((panel) => (
                  <div key={panel.title} className="min-w-full px-2">
                    <div className="grid gap-6 rounded-[28px] border border-white/10 bg-black/35 p-8 md:grid-cols-[1.15fr,0.85fr]">
                      <div className="space-y-4">
                        <p className="text-xs font-mono uppercase tracking-[0.5em] text-[var(--primary)]">
                          {panel.subtitle}
                        </p>
                        <h3 className="text-2xl font-semibold text-white">{panel.title}</h3>
                        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-mono text-white/70">
                          {panel.metrics.map((metric) => (
                            <div key={metric.label} className="flex items-center justify-between">
                              <span>{metric.label}</span>
                              <span className="flex items-center gap-2 text-white">
                                {metric.value}
                                <span className="text-xs uppercase tracking-[0.3em] text-white/50">{metric.trend}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.08)] px-4 py-3 text-sm text-white/80">
                          <ActivitySquare className="h-5 w-5 text-[var(--primary)]" />
                          {panel.alert}
                        </div>
                      </div>
                      <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/60">
                            <Droplets className="h-4 w-4 text-[var(--primary)]" />
                            Moisture bands
                          </span>
                          <span className="font-mono text-lg">28% - 34%</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/60">
                            <Thermometer className="h-4 w-4 text-[var(--primary)]" />
                            Ambient window
                          </span>
                          <span className="font-mono text-lg">24°C - 30°C</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/60">
                            <Leaf className="h-4 w-4 text-[var(--primary)]" />
                            AI rule stack
                          </span>
                          <ul className="space-y-2 text-sm font-mono text-white/70">
                            <li>IF humidity &lt; 55% → trigger mist cycle</li>
                            <li>IF soil moisture &lt; 30% → line 02 auto</li>
                            <li>IF wind &gt; 20 km/h → pause spraying</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-2">
                {farmingGallery.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${currentFarmSlide === index ? "w-10 bg-white" : "w-2 bg-white/40"}`}
                    onClick={() => setCurrentFarmSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {coreCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">{card.label}</p>
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                {"description" in card ? (
                  <p className="text-white/80">{card.description}</p>
                ) : (
                  <ul className="space-y-2 text-white/80">
                    {card.bullets?.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-emerald-300 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Automation Engine</h2>
            <div className="grid lg:grid-cols-2 gap-8">
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
                      <span className="text-emerald-300 mt-1">✔</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Cloud Dashboard</h2>
            <div className="grid md:grid-cols-2 gap-6">
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

        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Weather Integration</h2>
              <ul className="space-y-2 text-white/80">
                {weatherAdvisory.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-emerald-300 mt-1">▹</span>
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

        <section className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Security</h2>
            <ul className="space-y-3 text-white/80">
              {security.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00d094]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-6">
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
                        <span className="text-emerald-300">•</span>
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
                        <span className="text-emerald-300">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Impact</h2>
            <ul className="space-y-3 text-white/80">
              {impact.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#00d094] mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#00d094] to-[#05a4ff] p-[1px]">
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

        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#00d094] to-[#05a4ff] p-[1px]">
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

