import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

interface ExperienceState {
  experiences: Experience[];
}

const initialState: ExperienceState = {
  experiences: [
    { id: "1", role: "Senior Developer", company: "Tech Corp", period: "2022 - Present", description: "Leading frontend architecture.", type: "work" },
    { id: "2", role: "Full-Stack Developer", company: "StartupXYZ", period: "2020 - 2022", description: "Built scalable microservices.", type: "work" },
    { id: "3", role: "B.S. Computer Science", company: "MIT", period: "2016 - 2020", description: "Graduated with honors.", type: "education" },
  ],
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    updateExperiences: (state, action: PayloadAction<Experience[]>) => {
      state.experiences = action.payload;
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experiences.push(action.payload);
    },
    removeExperience: (state, action: PayloadAction<string>) => {
      state.experiences = state.experiences.filter(e => e.id !== action.payload);
    },
    updateExperience: (state, action: PayloadAction<Experience>) => {
      const idx = state.experiences.findIndex(e => e.id === action.payload.id);
      if (idx !== -1) state.experiences[idx] = action.payload;
    },
    resetExperience: () => initialState,
  },
});

export const { updateExperiences, addExperience, removeExperience, updateExperience, resetExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
