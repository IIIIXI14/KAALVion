import { useState, useEffect } from "react";

interface NetworkStatus {
  isOnline: boolean;
  isSlowConnection: boolean;
  effectiveType?: string;
  downlink?: number;
}

export const useNetworkStatus = (): NetworkStatus => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: navigator.onLine,
    isSlowConnection: false,
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = (navigator as any).connection ||
        (navigator as any).mozConnection ||
        (navigator as any).webkitConnection;

      if (connection) {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink;

        // Consider 2g, slow-2g, or downlink < 1.5 Mbps as slow connection
        const isSlow =
          effectiveType === "2g" ||
          effectiveType === "slow-2g" ||
          (downlink !== undefined && downlink < 1.5);

        setNetworkStatus({
          isOnline: navigator.onLine,
          isSlowConnection: isSlow,
          effectiveType,
          downlink,
        });
      } else {
        // Fallback: assume slow if we can't detect
        setNetworkStatus({
          isOnline: navigator.onLine,
          isSlowConnection: false,
        });
      }
    };

    // Initial check
    updateNetworkStatus();

    // Listen for online/offline events
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    // Listen for connection changes
    const connection = (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    if (connection) {
      connection.addEventListener("change", updateNetworkStatus);
    }

    return () => {
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
      if (connection) {
        connection.removeEventListener("change", updateNetworkStatus);
      }
    };
  }, []);

  return networkStatus;
};

