// Central place for the backend API URL.
// In development, it falls back to localhost:3000.
// In production (Vercel), set VITE_API_URL in the Vercel project's Environment Variables.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
