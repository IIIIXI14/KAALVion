/**
 * Client-side rate limiter using localStorage
 * Prevents spam by limiting form submissions
 */

const RATE_LIMIT_KEY_PREFIX = "rate_limit_";
const SUBMISSIONS_PER_HOUR = 5;
const HOUR_IN_MS = 60 * 60 * 1000;

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

/**
 * Check if user has exceeded rate limit
 * @param formName - Unique identifier for the form
 * @returns true if limit exceeded, false otherwise
 */
export function isRateLimited(formName: string): boolean {
  try {
    const key = `${RATE_LIMIT_KEY_PREFIX}${formName}`;
    const stored = localStorage.getItem(key);
    
    if (!stored) {
      return false;
    }

    const entry: RateLimitEntry = JSON.parse(stored);
    const now = Date.now();

    // If reset time has passed, reset the counter
    if (now > entry.resetTime) {
      localStorage.removeItem(key);
      return false;
    }

    // Check if limit exceeded
    return entry.count >= SUBMISSIONS_PER_HOUR;
  } catch (error) {
    // If there's an error reading from localStorage, allow the submission
    // (fail open rather than blocking users)
    console.error("Rate limiter error:", error);
    return false;
  }
}

/**
 * Record a form submission
 * @param formName - Unique identifier for the form
 */
export function recordSubmission(formName: string): void {
  try {
    const key = `${RATE_LIMIT_KEY_PREFIX}${formName}`;
    const stored = localStorage.getItem(key);
    const now = Date.now();

    let entry: RateLimitEntry;

    if (stored) {
      entry = JSON.parse(stored);
      // If reset time has passed, start fresh
      if (now > entry.resetTime) {
        entry = {
          count: 1,
          resetTime: now + HOUR_IN_MS,
        };
      } else {
        // Increment count
        entry.count += 1;
      }
    } else {
      // First submission
      entry = {
        count: 1,
        resetTime: now + HOUR_IN_MS,
      };
    }

    localStorage.setItem(key, JSON.stringify(entry));
  } catch (error) {
    // If there's an error writing to localStorage, silently fail
    // (don't block user submissions)
    console.error("Rate limiter error:", error);
  }
}

/**
 * Get remaining submissions for a form
 * @param formName - Unique identifier for the form
 * @returns Number of remaining submissions (0 if limit exceeded)
 */
export function getRemainingSubmissions(formName: string): number {
  try {
    const key = `${RATE_LIMIT_KEY_PREFIX}${formName}`;
    const stored = localStorage.getItem(key);
    
    if (!stored) {
      return SUBMISSIONS_PER_HOUR;
    }

    const entry: RateLimitEntry = JSON.parse(stored);
    const now = Date.now();

    // If reset time has passed, return full limit
    if (now > entry.resetTime) {
      return SUBMISSIONS_PER_HOUR;
    }

    return Math.max(0, SUBMISSIONS_PER_HOUR - entry.count);
  } catch (error) {
    // On error, assume full limit available
    return SUBMISSIONS_PER_HOUR;
  }
}

/**
 * Get time until rate limit resets (in minutes)
 * @param formName - Unique identifier for the form
 * @returns Minutes until reset, or 0 if not limited
 */
export function getTimeUntilReset(formName: string): number {
  try {
    const key = `${RATE_LIMIT_KEY_PREFIX}${formName}`;
    const stored = localStorage.getItem(key);
    
    if (!stored) {
      return 0;
    }

    const entry: RateLimitEntry = JSON.parse(stored);
    const now = Date.now();

    if (now > entry.resetTime) {
      return 0;
    }

    const msUntilReset = entry.resetTime - now;
    return Math.ceil(msUntilReset / (60 * 1000)); // Convert to minutes
  } catch (error) {
    return 0;
  }
}
