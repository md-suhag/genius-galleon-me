import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AboutState {
  bio: string;
  yearsExperience: number;
  projectsCompleted: number;
  clientsSatisfied: number;
  techStack: string[];
}

const initialState: AboutState = {
  bio: "I'm a passionate developer with 5+ years of experience building modern web applications. I love turning complex problems into simple, beautiful solutions.",
  yearsExperience: 5,
  projectsCompleted: 50,
  clientsSatisfied: 30,
  techStack: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"],
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    updateAbout: (state, action: PayloadAction<Partial<AboutState>>) => {
      return { ...state, ...action.payload };
    },
    resetAbout: () => initialState,
  },
});

export const { updateAbout, resetAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
