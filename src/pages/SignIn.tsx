import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { motion } from "framer-motion";
import logoIcon from "@/assets/KaalVion_DarkLogo_img.png";
import logoName from "@/assets/KaalVion_DarkLogo_name.png";

const SignInPage = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0E13] text-white overflow-hidden flex items-center justify-center py-8 sm:py-12 px-4">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1118] via-[#0f141c] to-[#0a0e14]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(236,68,59,0.4),transparent_70%)] rounded-full blur-3xl animate-float-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(255,111,100,0.35),transparent_70%)] rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,68,59,0.15),transparent_60%)] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Animated light rays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(236,68,59,0.4)] to-transparent animate-light-ray-1" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(236,68,59,0.3)] to-transparent animate-light-ray-2" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(255,111,100,0.25)] to-transparent animate-light-ray-3" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      {/* Glass shine effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="relative z-10 w-full max-w-[480px]"
      >
        <div className="relative rounded-[32px] border border-white/20 bg-white/[0.08] backdrop-blur-xl p-8 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-visible group">
          {/* Enhanced glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-[rgba(236,68,59,0.5)] via-transparent to-[rgba(236,68,59,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          
          <div className="relative z-10">
            {/* Logo with animation */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center items-center gap-3 mb-12 pt-2"
            >
              <img src={logoIcon} alt="KAALVION Logo" className="h-12 w-auto drop-shadow-[0_0_20px_rgba(236,68,59,0.5)]" />
              <img src={logoName} alt="KAALVION" className="h-14 w-auto" />
            </motion.div>

            {/* Header with enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10 text-center space-y-3"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.65rem] tracking-[0.4em] text-white/70 mb-4">
                SECURE ACCESS
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
                Welcome back
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                Sign in to continue to your KAALVION dashboard
              </p>
            </motion.div>
            
            {/* Clerk Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full"
            >
              <SignIn
                appearance={{
                  baseTheme: dark,
                  variables: {
                    colorPrimary: "#ec443b",
                    colorBackground: "transparent",
                    colorInputBackground: "rgba(255, 255, 255, 0.05)",
                    colorInputText: "#E4E7EB",
                    colorText: "#E4E7EB",
                    colorTextSecondary: "rgba(228, 231, 235, 0.7)",
                    colorDanger: "#FF3B30",
                    borderRadius: "0.875rem",
                    fontFamily: "'Satoshi', 'Epilogue', system-ui, sans-serif",
                    fontSize: "0.875rem",
                    spacingUnit: "0.25rem",
                  },
                  elements: {
                    rootBox: "mx-auto w-full",
                    card: "bg-transparent shadow-none border-0 p-0",
                    header: "hidden",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton:
                      "bg-transparent border border-white/25 text-white hover:bg-white/10 hover:border-[rgba(236,68,59,0.6)] transition-all duration-300 rounded-full h-12 font-medium text-sm w-full mb-3 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(236,68,59,0.3)]",
                    socialButtonsBlockButtonText: "font-medium text-sm",
                    socialButtonsBlockButtonArrow: "hidden",
                    socialButtonsBlockButtonIcon: "w-6 h-6",
                    formButtonPrimary:
                      "bg-[#ec443b] border border-[rgba(236,68,59,0.65)] hover:bg-[#ec443b]/90 text-white font-semibold rounded-full shadow-[0_12px_35px_rgba(236,68,59,0.55)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_16px_45px_rgba(255,111,100,0.62)] h-12 px-8 text-sm w-full",
                    formFieldInput:
                      "bg-white/[0.05] border border-white/15 text-white rounded-xl focus:border-[#ec443b]/80 focus:ring-2 focus:ring-[#ec443b]/50 focus:bg-white/[0.08] h-12 text-sm placeholder:text-white/40 px-4 transition-all duration-300",
                    formFieldLabel: "text-white/90 font-medium text-sm mb-2.5",
                    formFieldInputShowPasswordButton: "text-white/60 hover:text-[#ec443b] transition-colors",
                    footerActionLink: "text-[#ec443b] hover:text-[#ec443b]/80 font-semibold transition-colors text-sm",
                    identityPreviewText: "text-white",
                    identityPreviewEditButton: "text-[#ec443b] hover:text-[#ec443b]/80",
                    dividerLine: "bg-white/10",
                    dividerText: "text-white/50 text-xs my-6 uppercase tracking-wider",
                    formResendCodeLink: "text-[#ec443b] hover:text-[#ec443b]/80",
                    otpCodeFieldInput: "bg-white/[0.05] border border-white/15 text-white rounded-xl focus:border-[#ec443b]/80 focus:ring-2 focus:ring-[#ec443b]/50",
                    alertText: "text-white/90 text-sm",
                    formButtonReset: "text-white/70 hover:text-white",
                    footer: "mt-8 pt-6 border-t border-white/10",
                    footerAction: "text-sm justify-center",
                    formField: "mb-6",
                    formFieldInputGroup: "gap-2",
                    formFieldSuccessText: "text-green-400 text-xs",
                    formFieldErrorText: "text-red-400 text-xs mt-1.5",
                  },
                }}
                routing="path"
                path="/sign-in"
                signUpUrl="/sign-up"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPage;

