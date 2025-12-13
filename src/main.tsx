import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import App from "./App.tsx";
import "./index.css";
import logger from "./lib/logger";
import { initAnalytics } from "./lib/analytics";
import { initSentry } from "./lib/sentry";
import { validateEnvVars } from "./lib/env";

// Validate environment variables
const envValidation = validateEnvVars();
if (!envValidation.isValid) {
  logger.error("Application startup failed due to missing required environment variables.");
  // Continue anyway - let the app handle missing vars gracefully
}

// Initialize error tracking and analytics (after validation)
initSentry();
initAnalytics();

// Register service worker
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        logger.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        logger.error("Service Worker registration failed:", error);
      });
  });
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Warn in development, but allow app to load in production
if (!PUBLISHABLE_KEY) {
  logger.warn("⚠️ Missing Clerk Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your .env.local file.");
  logger.warn("Authentication features will be disabled.");
}

const AppWrapper = () => {
  if (PUBLISHABLE_KEY) {
    return (
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
        appearance={{
          theme: dark,
          variables: {
            colorPrimary: "#D93D3A",
            colorBackground: "#0A0E13",
            colorInputBackground: "rgba(255, 255, 255, 0.05)",
            colorInputText: "#E4E7EB",
            colorText: "#E4E7EB",
            colorTextSecondary: "rgba(228, 231, 235, 0.7)",
            colorDanger: "#FF3B30",
            borderRadius: "0.875rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
          },
          elements: {
            userButtonPopoverCard: "bg-[#0A0E13] border border-white/10",
            userButtonPopoverActionButton: "text-white hover:bg-white/10",
            userButtonPopoverActionButtonText: "text-white/80",
            userButtonPopoverFooter: "border-t border-white/10",
            userButtonTrigger: "hover:opacity-80 transition-opacity",
          },
        }}
      >
        <App />
      </ClerkProvider>
    );
  }
  
  // Render app without Clerk if key is missing
  return <App />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
