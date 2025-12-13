import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { motion } from "framer-motion";
import logoIcon from "@/assets/KaalVion_DarkLogo_img.png";
import logoName from "@/assets/KaalVion_DarkLogo_name .png";

const SignUpPage = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0E13] text-white overflow-hidden flex items-center justify-center py-8 sm:py-12 px-4">
      {/* Technical Noir Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1630] via-[#111933] to-[#150c1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,68,59,0.3),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(102,102,102,0.12),transparent_55%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[440px]"
      >
        <div className="relative rounded-[32px] border border-white/15 bg-[rgba(10,14,19,0.85)] backdrop-blur-xl p-8 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-visible">
          {/* Glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-[32px]" />
          
          <div className="relative z-10">
            {/* Logo */}
            <div className="flex justify-center items-center gap-3 mb-10 pt-2">
              <img src={logoIcon} alt="KAALVION Logo" className="h-10 w-auto" />
              <img src={logoName} alt="KAALVION" className="h-12 w-auto" />
            </div>

            {/* Header */}
            <div className="mb-10 text-center">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-4">
                Create your account to get started
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                Create your account
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                Welcome! Please fill in the details to get started.
              </p>
            </div>
            
            {/* Clerk Form */}
            <div className="w-full">
              <SignUp
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
                    borderRadius: "0.75rem",
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
                      "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-full h-12 font-medium text-sm w-full mb-3 hover:-translate-y-1",
                    socialButtonsBlockButtonText: "font-medium text-sm",
                    socialButtonsBlockButtonArrow: "hidden",
                    socialButtonsBlockButtonIcon: "w-5 h-5",
                    formButtonPrimary:
                      "bg-[#ec443b] border border-[rgba(236,68,59,0.65)] hover:bg-[#ec443b]/90 text-white font-semibold rounded-full shadow-[0_12px_35px_rgba(236,68,59,0.55)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_16px_45px_rgba(255,111,100,0.62)] h-12 px-8 text-sm w-full",
                    formFieldInput:
                      "bg-transparent border border-white/10 text-white rounded-xl focus:border-[#ec443b]/80 focus:ring-2 focus:ring-[#ec443b] focus:ring-[var(--primary)] h-12 text-sm placeholder:text-white/50 px-4",
                    formFieldLabel: "text-white/90 font-medium text-sm mb-2.5",
                    formFieldInputShowPasswordButton: "text-white/60 hover:text-[#ec443b] transition-colors",
                    footerActionLink: "text-[#ec443b] hover:text-[#ec443b]/80 font-semibold transition-colors text-sm",
                    identityPreviewText: "text-white",
                    identityPreviewEditButton: "text-[#ec443b] hover:text-[#ec443b]/80",
                    dividerLine: "bg-white/10",
                    dividerText: "text-white/60 text-xs my-5",
                    formResendCodeLink: "text-[#ec443b] hover:text-[#ec443b]/80",
                    otpCodeFieldInput: "bg-transparent border border-white/10 text-white rounded-xl focus:border-[#ec443b]/80 focus:ring-2 focus:ring-[#ec443b] focus:ring-[var(--primary)]",
                    alertText: "text-white/90 text-sm",
                    formButtonReset: "text-white/70 hover:text-white",
                    footer: "mt-6 pt-6 border-t border-white/10",
                    footerAction: "text-sm justify-center",
                    formField: "mb-6",
                    formFieldInputGroup: "gap-2",
                    formFieldOptional: "text-white/60 text-xs ml-1",
                    formFieldSuccessText: "text-green-400 text-xs",
                    formFieldErrorText: "text-red-400 text-xs mt-1.5",
                    selectButton: "bg-transparent border border-white/10 text-white rounded-xl hover:bg-white/5 h-12",
                    selectSearchInput: "bg-transparent border border-white/10 text-white rounded-xl",
                  },
                }}
                routing="path"
                path="/sign-up"
                signInUrl="/sign-in"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;

