import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import App from "./App.tsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Warn in development, but allow app to load in production
if (!PUBLISHABLE_KEY && import.meta.env.DEV) {
  console.warn("⚠️ Missing Clerk Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your .env.local file.");
  console.warn("Authentication features will be disabled.");
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
            colorPrimary: "#00FF88",
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
            userButtonPopoverCard: "bg-[#0A0E13] border border-white/10 backdrop-blur-2xl",
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
