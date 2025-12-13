/**
 * Environment variable validation
 * Validates required environment variables at startup
 */

import logger from "./logger";

interface EnvVar {
  name: string;
  required: boolean;
  description: string;
}

const REQUIRED_ENV_VARS: EnvVar[] = [
  {
    name: "VITE_CLERK_PUBLISHABLE_KEY",
    required: false, // App can work without it (auth disabled)
    description: "Clerk authentication publishable key",
  },
  {
    name: "VITE_SUPABASE_URL",
    required: false, // App can work without it (WhatsApp only)
    description: "Supabase project URL",
  },
  {
    name: "VITE_SUPABASE_ANON_KEY",
    required: false, // App can work without it (WhatsApp only)
    description: "Supabase anonymous key",
  },
  {
    name: "VITE_WHATSAPP_NUMBER",
    required: false, // Has fallback value
    description: "WhatsApp number for form submissions",
  },
  {
    name: "VITE_GA_MEASUREMENT_ID",
    required: false, // Analytics is optional
    description: "Google Analytics measurement ID",
  },
  {
    name: "VITE_SENTRY_DSN",
    required: false, // Error tracking is optional
    description: "Sentry DSN for error tracking",
  },
];

/**
 * Validate environment variables
 * Logs warnings for missing optional vars, errors for missing required vars
 */
export function validateEnvVars(): { isValid: boolean; missing: string[] } {
  const missing: string[] = [];
  const warnings: string[] = [];

  for (const envVar of REQUIRED_ENV_VARS) {
    const value = import.meta.env[envVar.name];
    
    if (!value || value.trim() === "") {
      if (envVar.required) {
        missing.push(envVar.name);
        logger.error(`❌ Missing required environment variable: ${envVar.name}`);
        logger.error(`   Description: ${envVar.description}`);
      } else {
        warnings.push(envVar.name);
        logger.warn(`⚠️  Missing optional environment variable: ${envVar.name}`);
        logger.warn(`   Description: ${envVar.description}`);
      }
    }
  }

  if (missing.length > 0) {
    logger.error("❌ Application cannot start without required environment variables.");
    logger.error("Please set the following in your .env.local file:");
    missing.forEach((name) => {
      logger.error(`   ${name}=your_value_here`);
    });
    return { isValid: false, missing };
  }

  if (warnings.length > 0) {
    logger.warn("⚠️  Some optional environment variables are missing.");
    logger.warn("The application will work but some features may be disabled.");
  }

  return { isValid: true, missing: [] };
}

/**
 * Get environment variable with validation
 */
export function getEnvVar(name: string, defaultValue?: string): string {
  const value = import.meta.env[name];
  if (!value && defaultValue) {
    return defaultValue;
  }
  if (!value) {
    logger.warn(`Environment variable ${name} is not set`);
  }
  return value || defaultValue || "";
}
