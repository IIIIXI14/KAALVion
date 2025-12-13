/**
 * Sentry error tracking configuration
 * Initializes Sentry for production error tracking
 */

import * as Sentry from "@sentry/react";

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

/**
 * Initialize Sentry
 * Only initializes if DSN is provided and in production
 */
export function initSentry() {
  if (!SENTRY_DSN) {
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: import.meta.env.PROD ? "production" : "development",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0, // 10% in production, 100% in dev
    // Session Replay
    replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
    replaysOnErrorSampleRate: 1.0, // Always record replays on errors
    // Filter out common non-actionable errors
    beforeSend(event, hint) {
      // Filter out known non-actionable errors
      if (event.exception) {
        const error = hint.originalException;
        // Ignore network errors that are user-related (offline, etc.)
        if (error instanceof TypeError && error.message.includes("fetch")) {
          return null;
        }
        // Ignore ResizeObserver errors (common browser quirk)
        if (error instanceof Error && error.message.includes("ResizeObserver")) {
          return null;
        }
      }
      return event;
    },
  });
}

/**
 * Set user context for Sentry
 */
export function setSentryUser(userId: string, email?: string, username?: string) {
  if (!SENTRY_DSN) return;
  
  Sentry.setUser({
    id: userId,
    email,
    username,
  });
}

/**
 * Clear user context
 */
export function clearSentryUser() {
  if (!SENTRY_DSN) return;
  Sentry.setUser(null);
}
