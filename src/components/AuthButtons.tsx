import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

interface AuthButtonsProps {
  scrollToSection: (id: string) => void;
}

const AuthButtons = ({ scrollToSection }: AuthButtonsProps) => {
  const hasClerk = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!hasClerk) {
    return (
      <Button
        onClick={() => scrollToSection("contact")}
        className="rounded-full border border-[rgba(0,255,136,0.5)] bg-[var(--primary)] px-6 py-5 text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,255,136,0.35)] transition duration-300 hover:-translate-y-1 hover:brightness-110"
      >
        Request Demo
      </Button>
    );
  }

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            className="rounded-full border border-white/30 bg-transparent px-6 py-5 text-white font-semibold tracking-wide hover:bg-white/10 transition duration-300 hover:-translate-y-1"
          >
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button
            className="rounded-full border border-[rgba(0,255,136,0.5)] bg-[var(--primary)] px-6 py-5 text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,255,136,0.35)] transition duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Button
          onClick={() => scrollToSection("contact")}
          className="rounded-full border border-[rgba(0,255,136,0.5)] bg-[var(--primary)] px-6 py-5 text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,255,136,0.35)] transition duration-300 hover:-translate-y-1 hover:brightness-110"
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
      </SignedIn>
    </>
  );
};

export default AuthButtons;

