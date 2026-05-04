/**
 * Returns the correct asset path by prefixing it with the base URL.
 * This ensures assets load correctly on both local dev and GitHub Pages.
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure base ends with a slash if it doesn't already
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${normalizedBase}${cleanPath}`;
}
