import React from "react";
import Loader from "./Loader";

interface FullScreenLoaderProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  message = "Loading...",
  size = "md",
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0E13] text-white">
      <div className="flex flex-col items-center justify-center space-y-6">
        <Loader size={size} />
        {message && (
          <p className="text-base sm:text-lg text-white/70 font-medium mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FullScreenLoader;

