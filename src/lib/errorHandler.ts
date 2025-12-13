/**
 * Centralized error handling utility
 * Provides consistent error handling patterns across the application
 */

import logger from "./logger";

export interface AppError {
  message: string;
  code?: string;
  details?: unknown;
  userMessage?: string;
}

/**
 * Standard error handler for async operations
 * Logs the error and returns a user-friendly message
 */
export function handleError(error: unknown, context?: string): AppError {
  const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
  const errorCode = error instanceof Error && "code" in error ? String(error.code) : undefined;
  
  logger.error(`Error${context ? ` in ${context}` : ""}:`, error);

  // Extract user-friendly message
  let userMessage = "Something went wrong. Please try again.";
  
  if (error instanceof Error) {
    // Network errors
    if (error.message.includes("fetch") || error.message.includes("network")) {
      userMessage = "Network error. Please check your connection and try again.";
    }
    // Supabase errors
    else if (error.message.includes("Supabase") || error.message.includes("database")) {
      userMessage = "Database error. Please try again later.";
    }
    // Validation errors
    else if (error.message.includes("validation") || error.message.includes("required")) {
      userMessage = error.message;
    }
  }

  return {
    message: errorMessage,
    code: errorCode,
    details: error,
    userMessage,
  };
}

/**
 * Handle form submission errors
 * Returns error message suitable for display in forms
 */
export function handleFormError(error: unknown): string {
  const appError = handleError(error, "form submission");
  return appError.userMessage || "Failed to submit. Please try again.";
}

/**
 * Handle API errors
 * Returns error information for API calls
 */
export function handleApiError(error: unknown, endpoint?: string): AppError {
  return handleError(error, endpoint ? `API call to ${endpoint}` : "API call");
}

/**
 * Check if error is a specific type
 */
export function isErrorType(error: unknown, type: string): boolean {
  if (error instanceof Error) {
    return error.message.toLowerCase().includes(type.toLowerCase());
  }
  return false;
}

/**
 * Format error for display to users
 */
export function formatErrorForUser(error: unknown): string {
  const appError = handleError(error);
  return appError.userMessage || "An unexpected error occurred. Please try again.";
}
