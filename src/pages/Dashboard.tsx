import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuroraText } from "@/registry/magicui/aurora-text";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="relative min-h-screen bg-[#0A0E13] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1630] via-[#111933] to-[#150c1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,68,59,0.3),transparent_55%)]" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-[28px] border border-white/10 bg-[rgba(10,14,19,0.95)] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
              <h1 className="text-4xl font-black mb-4">
                <AuroraText>Dashboard</AuroraText>
              </h1>
              <p className="text-white/70 mb-6">Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!</p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-white/80">
                  This is a protected route. Only authenticated users can access this page.
                </p>
                <p className="text-white/60 text-sm mt-4">
                  You can extend this dashboard with project management features, user settings, or any other protected content.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

