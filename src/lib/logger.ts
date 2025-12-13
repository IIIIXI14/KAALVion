/**
 * Logger utility for conditional logging based on environment
 * - Development: All logs are shown
 * - Production: Only errors are shown (warnings and logs are suppressed)
 */

type LogLevel = "log" | "warn" | "error" | "info" | "debug";

const isDev = import.meta.env.DEV;

/**
 * Log a message (only in development)
 */
export function log(...args: unknown[]): void {
  if (isDev) {
    console.log(...args);
  }
}

/**
 * Log a warning (only in development)
 */
export function warn(...args: unknown[]): void {
  if (isDev) {
    console.warn(...args);
  }
}

/**
 * Log an error (always shown, even in production)
 */
export function error(...args: unknown[]): void {
  console.error(...args);
}

/**
 * Log an info message (only in development)
 */
export function info(...args: unknown[]): void {
  if (isDev) {
    console.info(...args);
  }
}

/**
 * Log a debug message (only in development)
 */
export function debug(...args: unknown[]): void {
  if (isDev) {
    console.debug(...args);
  }
}

/**
 * Group related logs together (only in development)
 */
export function group(label: string, collapsed = false): void {
  if (isDev) {
    if (collapsed) {
      console.groupCollapsed(label);
    } else {
      console.group(label);
    }
  }
}

/**
 * End a log group (only in development)
 */
export function groupEnd(): void {
  if (isDev) {
    console.groupEnd();
  }
}

/**
 * Log a table (only in development)
 */
export function table(data: unknown): void {
  if (isDev) {
    console.table(data);
  }
}

/**
 * Logger object with all methods
 */
const logger = {
  log,
  warn,
  error,
  info,
  debug,
  group,
  groupEnd,
  table,
};

export default logger;
