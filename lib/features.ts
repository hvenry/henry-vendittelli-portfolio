/**
 * Feature Flags Configuration
 *
 * This file controls which features are enabled in production.
 * Change these flags with extreme caution.
 */

type FeatureFlags = {
  // Blog comment system (Auth0 + Prisma)
  BLOG_COMMENTS_ENABLED: boolean;
};

export const features: FeatureFlags = {
  // IMPORTANT: Set to true only when ready for production
  // Requires: Auth0 setup, database migrations, content moderation strategy
  BLOG_COMMENTS_ENABLED: false
};

/**
 * Check if a feature is enabled
 * @param featureName - Name of the feature to check
 * @returns boolean indicating if feature is enabled
 */
export function isFeatureEnabled(featureName: keyof FeatureFlags): boolean {
  // Check environment variable override first
  const envOverride = process.env[`NEXT_PUBLIC_${featureName}`];
  if (envOverride !== undefined) {
    return envOverride === "true";
  }

  return features[featureName];
}
