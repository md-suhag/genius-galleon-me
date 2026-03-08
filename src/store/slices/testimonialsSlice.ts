import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TestimonialsState {
  testimonials: Testimonial[];
}

const initialState: TestimonialsState = {
  testimonials: [
    { id: "1", name: "Sarah Johnson", role: "CTO", company: "TechCorp", content: "Exceptional developer who delivers high-quality code.", avatar: "", rating: 5 },
    { id: "2", name: "Mike Peters", role: "PM", company: "StartupXYZ", content: "Great communicator and problem solver.", avatar: "", rating: 5 },
    { id: "3", name: "Emily Davis", role: "Designer", company: "DesignCo", content: "Translates designs into pixel-perfect code.", avatar: "", rating: 4 },
  ],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    updateTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.testimonials.push(action.payload);
    },
    removeTestimonial: (state, action: PayloadAction<string>) => {
      state.testimonials = state.testimonials.filter(t => t.id !== action.payload);
    },
    updateTestimonial: (state, action: PayloadAction<Testimonial>) => {
      const idx = state.testimonials.findIndex(t => t.id === action.payload.id);
      if (idx !== -1) state.testimonials[idx] = action.payload;
    },
    resetTestimonials: () => initialState,
  },
});

export const { updateTestimonials, addTestimonial, removeTestimonial, updateTestimonial, resetTestimonials } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
