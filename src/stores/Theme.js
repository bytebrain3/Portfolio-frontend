// Stores/Theme.js
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'dark', // Default theme
  setThemeDark: () => set({ theme: 'dark' }), // Function to set theme to dark
  setThemeLight: () => set({ theme: 'light' }) // Function to set theme to light
}));
