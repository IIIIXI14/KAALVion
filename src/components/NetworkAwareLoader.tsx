import React, { useState, useEffect } from "react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import FullScreenLoader from "./FullScreenLoader";

interface NetworkAwareLoaderProps {
  children: React.ReactNode;
  showOnSlowConnection?: boolean;
  slowConnectionThreshold?: number; // in seconds to show loader
}

const NetworkAwareLoader: React.FC<NetworkAwareLoaderProps> = ({
  children,
  showOnSlowConnection = true,
  slowConnectionThreshold = 2,
}) => {
  const { isOnline, isSlowConnection } = useNetworkStatus();
  const [showLoader, setShowLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // If slow connection and enabled, show loader after threshold
    if (showOnSlowConnection && isSlowConnection && !isOnline) {
      const slowTimer = setTimeout(() => {
        setShowLoader(true);
      }, slowConnectionThreshold * 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(slowTimer);
      };
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSlowConnection, isOnline, showOnSlowConnection, slowConnectionThreshold]);

  // Hide loader when connection improves
  useEffect(() => {
    if (!isSlowConnection && isOnline) {
      setShowLoader(false);
    }
  }, [isSlowConnection, isOnline]);

  // Show loader during initial load or slow connection
  if (isLoading || (showLoader && showOnSlowConnection)) {
    return (
      <FullScreenLoader
        message={
          !isOnline
            ? "No internet connection. Please check your network."
            : isSlowConnection
            ? "Slow connection detected. Loading..."
            : "Loading..."
        }
        size="lg"
      />
    );
  }

  return <>{children}</>;
};

export default NetworkAwareLoader;

