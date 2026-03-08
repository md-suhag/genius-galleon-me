import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

interface SkillsState {
  skills: Skill[];
  categories: string[];
}

const initialState: SkillsState = {
  categories: ["Frontend", "Backend", "DevOps", "Tools"],
  skills: [
    { id: "1", name: "React", level: 95, category: "Frontend" },
    { id: "2", name: "TypeScript", level: 90, category: "Frontend" },
    { id: "3", name: "Node.js", level: 88, category: "Backend" },
    { id: "4", name: "Python", level: 82, category: "Backend" },
    { id: "5", name: "Docker", level: 78, category: "DevOps" },
    { id: "6", name: "AWS", level: 80, category: "DevOps" },
    { id: "7", name: "Git", level: 92, category: "Tools" },
    { id: "8", name: "Figma", level: 70, category: "Tools" },
  ],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateSkills: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload;
    },
    addSkill: (state, action: PayloadAction<Skill>) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(s => s.id !== action.payload);
    },
    updateSkill: (state, action: PayloadAction<Skill>) => {
      const idx = state.skills.findIndex(s => s.id === action.payload.id);
      if (idx !== -1) state.skills[idx] = action.payload;
    },
    resetSkills: () => initialState,
  },
});

export const { updateSkills, addSkill, removeSkill, updateSkill, resetSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
