import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { motion } from "framer-motion";

const SignUpPage = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0E13] text-white overflow-hidden flex items-center justify-center">
      {/* Technical Noir Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1630] via-[#111933] to-[#150c1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,68,59,0.3),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(102,102,102,0.12),transparent_55%)]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="rounded-[28px] border border-white/10 bg-[rgba(10,14,19,0.95)] backdrop-blur-2xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-[var(--primary)] to-[#666666] bg-clip-text text-transparent">
              Join KAALVION
            </h1>
            <p className="text-white/70 text-sm">Create your account to get started</p>
          </div>
          <div className="flex justify-center">
            <SignUp
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
                  rootBox: "mx-auto w-full",
                  card: "bg-transparent shadow-none border-0 p-0",
                  headerTitle: "text-white font-semibold text-2xl",
                  headerSubtitle: "text-white/70 text-sm",
                  socialButtonsBlockButton:
                    "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 rounded-xl",
                  socialButtonsBlockButtonText: "font-semibold",
                  formButtonPrimary:
                    "bg-[#ec443b] hover:bg-[#ec443b]/90 text-[#0A0E13] font-semibold rounded-xl shadow-[0_10px_35px_rgba(236,68,59,0.55)] transition-all duration-300 hover:scale-105",
                  formFieldInput:
                    "bg-white/5 border-white/20 text-white rounded-xl focus:border-[#D93D3A] focus:ring-2 focus:ring-[#D93D3A]/20",
                  formFieldLabel: "text-white/80 font-medium",
                  formFieldInputShowPasswordButton: "text-white/60 hover:text-[#D93D3A]",
                  footerActionLink: "text-[#D93D3A] hover:text-[#D93D3A]/80 font-semibold transition-colors",
                  identityPreviewText: "text-white",
                  identityPreviewEditButton: "text-[#D93D3A] hover:text-[#D93D3A]/80",
                  dividerLine: "bg-white/10",
                  dividerText: "text-white/60",
                  formResendCodeLink: "text-[#D93D3A] hover:text-[#D93D3A]/80",
                  otpCodeFieldInput: "bg-white/5 border-white/20 text-white rounded-xl focus:border-[#D93D3A] focus:ring-2 focus:ring-[#D93D3A]/20",
                  alertText: "text-white/90",
                  formButtonReset: "text-white/70 hover:text-white",
                  selectButton: "bg-white/5 border-white/20 text-white rounded-xl hover:bg-white/10",
                  selectSearchInput: "bg-white/5 border-white/20 text-white",
                },
              }}
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;

