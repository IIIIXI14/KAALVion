import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

interface AuthButtonsProps {
  scrollToSection: (id: string) => void;
}

const AuthButtons = ({ scrollToSection }: AuthButtonsProps) => {
  const hasClerk = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!hasClerk) {
    return (
      <div className="flex items-center gap-2 sm:gap-3">
      <Button
        onClick={() => scrollToSection("contact")}
        className="rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-4 py-3 sm:px-6 sm:py-5 text-sm sm:text-base text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_10px_35px_rgba(236,68,59,0.55)] transition duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_12px_40px_rgba(255,111,100,0.62)]"
      >
        Request Demo
      </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
      <SignedOut>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <SignInButton mode="modal">
          <Button
            className="w-full sm:w-auto rounded-full border border-white/30 bg-transparent px-4 py-3 sm:px-6 sm:py-5 text-sm sm:text-base text-white font-semibold tracking-wide hover:bg-white/10 transition duration-300 hover:-translate-y-1 min-h-[44px]"
          >
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button
            className="w-full sm:w-auto rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-4 py-3 sm:px-6 sm:py-5 text-sm sm:text-base text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_10px_35px_rgba(236,68,59,0.55)] transition duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_12px_40px_rgba(255,111,100,0.62)] min-h-[44px]"
          >
            Sign Up
          </Button>
        </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-full sm:w-auto rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-4 py-3 sm:px-6 sm:py-5 text-sm sm:text-base text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_10px_35px_rgba(236,68,59,0.55)] transition duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_12px_40px_rgba(255,111,100,0.62)] min-h-[44px]"
        >
          Request Demo
        </Button>
        <div className="flex items-center justify-center">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "bg-[#0A0E13] border border-white/10",
                userButtonPopoverActionButton: "text-white hover:bg-white/10",
              },
            }}
          />
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default AuthButtons;

