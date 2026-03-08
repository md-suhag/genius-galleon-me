import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesState {
  services: Service[];
}

const initialState: ServicesState = {
  services: [
    { id: "1", title: "Web Development", description: "Modern, responsive web apps with React & Next.js.", icon: "Globe" },
    { id: "2", title: "API Development", description: "RESTful & GraphQL APIs with Node.js.", icon: "Server" },
    { id: "3", title: "Cloud Architecture", description: "Scalable cloud infrastructure on AWS/GCP.", icon: "Cloud" },
    { id: "4", title: "UI/UX Design", description: "Beautiful interfaces with great user experience.", icon: "Palette" },
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    updateServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
    addService: (state, action: PayloadAction<Service>) => {
      state.services.push(action.payload);
    },
    removeService: (state, action: PayloadAction<string>) => {
      state.services = state.services.filter(s => s.id !== action.payload);
    },
    updateService: (state, action: PayloadAction<Service>) => {
      const idx = state.services.findIndex(s => s.id === action.payload.id);
      if (idx !== -1) state.services[idx] = action.payload;
    },
    resetServices: () => initialState,
  },
});

export const { updateServices, addService, removeService, updateService, resetServices } = servicesSlice.actions;
export default servicesSlice.reducer;
