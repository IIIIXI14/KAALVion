import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader2 } from "lucide-react";
import Index from "./pages/Index";
import ProtectedRoute from "./components/ProtectedRoute";
import { ClerkSupabaseSync } from "./components/ClerkSupabaseSync";
import ErrorBoundary from "./components/ErrorBoundary";
import { RouteTracker } from "./components/RouteTracker";

// Lazy load routes for code splitting
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const WifiAttendanceDetail = lazy(() => import("./pages/WifiAttendanceDetail"));
const FarmingAssistantDetail = lazy(() => import("./pages/FarmingAssistantDetail"));
const SignInPage = lazy(() => import("./pages/SignIn"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProjectStatus = lazy(() => import("./pages/ProjectStatus"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#070812]">
    <Loader2 className="h-8 w-8 animate-spin text-[var(--primary)]" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ClerkSupabaseSync />
      <ErrorBoundary>
        <BrowserRouter>
          <RouteTracker />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/sign-in"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SignInPage />
                  </Suspense>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SignUpPage />
                  </Suspense>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Suspense fallback={<LoadingFallback />}>
                      <Dashboard />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/projects"
                element={
                  <ProtectedRoute>
                    <Suspense fallback={<LoadingFallback />}>
                      <ProjectStatus />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/case-studies/:id"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <CaseStudyDetail />
                  </Suspense>
                }
              />
              <Route
                path="/solutions/wifi-attendance"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <WifiAttendanceDetail />
                  </Suspense>
                }
              />
              <Route
                path="/solutions/smart-farming"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <FarmingAssistantDetail />
                  </Suspense>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route
                path="*"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
