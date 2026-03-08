import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slices/heroSlice';
import aboutReducer from './slices/aboutSlice';
import skillsReducer from './slices/skillsSlice';
import projectsReducer from './slices/projectsSlice';
import experienceReducer from './slices/experienceSlice';
import servicesReducer from './slices/servicesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import contactReducer from './slices/contactSlice';
import blogReducer from './slices/blogSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    about: aboutReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    experience: experienceReducer,
    services: servicesReducer,
    testimonials: testimonialsReducer,
    contact: contactReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
