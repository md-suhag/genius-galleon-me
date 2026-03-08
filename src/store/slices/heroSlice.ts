import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeroState {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  resumeLink: string;
  availableForHire: boolean;
}

const initialState: HeroState = {
  greeting: "Hi, my name is",
  name: "Alex Chen",
  title: "Full-Stack Developer",
  subtitle: "I craft high-performance web applications with clean, scalable code. Specializing in React, Node.js, and cloud architecture.",
  ctaText: "View My Work",
  ctaLink: "#projects",
  resumeLink: "#",
  availableForHire: true,
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    updateHero: (state, action: PayloadAction<Partial<HeroState>>) => {
      return { ...state, ...action.payload };
    },
    resetHero: () => initialState,
  },
});

export const { updateHero, resetHero } = heroSlice.actions;
export default heroSlice.reducer;
