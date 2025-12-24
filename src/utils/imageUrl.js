/**
 * Image URL Builder Utility
 * Centralized function to build image URLs from Strapi responses
 */

export const getImageUrl = (photoField) => {
  if (!photoField || !photoField.url) return null;

  const imageUrl = photoField.url;

  // If URL already has protocol, return as is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }

  // Build URL from Strapi base (remove /api from REACT_APP_STRAPI_URL)
  const baseUrl = process.env.REACT_APP_STRAPI_URL.replace(/\/api$/, '');
  return `${baseUrl}${imageUrl}`;
};

/**
 * Get image URL with fallback
 * @param {Object} photoField - Photo field from API
 * @param {string} placeholder - Placeholder image URL
 * @returns {string} Image URL
 */
export const getImageUrlWithFallback = (photoField, placeholder) => {
  return getImageUrl(photoField) || placeholder;
};
