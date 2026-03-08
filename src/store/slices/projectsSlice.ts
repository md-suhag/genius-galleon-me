import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "2",
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses and sentiment analysis.",
      image: "",
      tags: ["Next.js", "OpenAI", "WebSocket", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "3",
      title: "Task Management Tool",
      description: "Collaborative project management with kanban boards and time tracking.",
      image: "",
      tags: ["React", "TypeScript", "PostgreSQL", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const idx = state.projects.findIndex(p => p.id === action.payload.id);
      if (idx !== -1) state.projects[idx] = action.payload;
    },
    resetProjects: () => initialState,
  },
});

export const { updateProjects, addProject, removeProject, updateProject, resetProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
