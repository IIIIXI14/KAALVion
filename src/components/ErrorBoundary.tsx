import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { AuroraText } from "@/registry/magicui/aurora-text";
import * as Sentry from "@sentry/react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // Report to Sentry
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    });

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="relative min-h-screen overflow-hidden bg-transparent">
          {/* Background in site theme */}
          <div className="pointer-events-none absolute inset-0 gradient-hero" />
          <div className="pointer-events-none absolute inset-0 grid-overlay" />
          <div className="pointer-events-none absolute inset-0 hero-particles mix-blend-screen opacity-60" />
          <div className="pointer-events-none absolute -left-10 top-10 h-[420px] w-[420px] hero-orb opacity-60" />
          <div className="pointer-events-none absolute right-10 bottom-10 h-[360px] w-[360px] animate-gradient-mesh opacity-40" />
          <div className="pointer-events-none absolute inset-0 noise-overlay" />

          <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[0.62rem] tracking-[0.45em] text-white/70 mb-8">
                KAALVION • SYSTEM ERROR
              </div>

              <div className="flex justify-center mb-6">
                <AlertCircle className="w-16 h-16 text-red-400" />
              </div>

              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl mb-4">
                Something went <AuroraText>wrong.</AuroraText>
              </h1>

              <p className="mt-4 text-lg text-white/70 mb-8">
                We encountered an unexpected error. Don&apos;t worry, our team has been notified.
              </p>

              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-left">
                  <p className="text-sm font-mono text-red-400 mb-2">Error Details (Dev Only):</p>
                  <p className="text-xs text-white/60 font-mono break-all">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-xs text-white/50 cursor-pointer">Stack Trace</summary>
                      <pre className="text-xs text-white/40 mt-2 overflow-auto max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-8 py-6 text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_16px_50px_rgba(236,68,59,0.55)] hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_20px_60px_rgba(255,111,100,0.62)] transition"
                  onClick={this.handleReset}
                >
                  Try Again
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 bg-transparent px-8 py-6 text-white font-semibold tracking-wide hover:bg-white/10 hover:-translate-y-1 transition"
                  onClick={() => (window.location.href = "/")}
                >
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
