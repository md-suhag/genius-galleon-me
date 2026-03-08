import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  discord: string;
  calendlyLink: string;
  availabilityStatus: string;
}

const initialState: ContactState = {
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  discord: "alexchen#1234",
  calendlyLink: "#",
  availabilityStatus: "Open to work",
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<Partial<ContactState>>) => {
      return { ...state, ...action.payload };
    },
    resetContact: () => initialState,
  },
});

export const { updateContact, resetContact } = contactSlice.actions;
export default contactSlice.reducer;
