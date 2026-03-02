/* =====================================================
   HELPERS – Shared Utility Functions
   ===================================================== */

import crypto from "crypto";

/* Normalize input text */
export function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

/* Generate SHA256 cache key */
export function generateCacheKey(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

/* Safe number parsing */
export function safeNumber(value, fallback = 0) {
  const num = parseFloat(value);
  return isNaN(num) ? fallback : num;
}
