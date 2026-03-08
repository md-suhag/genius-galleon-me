import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  readTime: string;
}

interface BlogState {
  posts: BlogPost[];
}

const initialState: BlogState = {
  posts: [
    {
      id: "1",
      title: "Building Scalable React Applications",
      slug: "building-scalable-react-apps",
      excerpt: "Learn the architecture patterns and best practices for building large-scale React applications that are maintainable and performant.",
      content: "# Building Scalable React Applications\n\nWhen building large-scale React applications, architecture matters more than ever. In this post, I'll share patterns I've learned from years of production experience.\n\n## Component Architecture\n\nThe key to scalable React apps is proper component decomposition. Think in terms of:\n\n- **Presentational components** — Pure UI, no business logic\n- **Container components** — Data fetching and state management\n- **Layout components** — Page structure and composition\n\n## State Management\n\nFor complex apps, Redux Toolkit provides predictable state management with minimal boilerplate. Combined with RTK Query for data fetching, you get a powerful, type-safe solution.\n\n## Performance Optimization\n\n- Use `React.memo()` strategically\n- Implement code splitting with `React.lazy()`\n- Virtualize long lists with libraries like `react-window`\n\n## Testing Strategy\n\nA solid testing pyramid includes:\n1. Unit tests for utility functions\n2. Integration tests for component interactions\n3. E2E tests for critical user flows\n\nBy following these patterns, your React applications will scale gracefully as your team and codebase grow.",
      coverImage: "",
      tags: ["React", "Architecture", "TypeScript"],
      author: "Alex Chen",
      published: true,
      createdAt: "2026-03-01",
      updatedAt: "2026-03-01",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Mastering TypeScript Generics",
      slug: "mastering-typescript-generics",
      excerpt: "A deep dive into TypeScript generics — from basic concepts to advanced patterns used in production codebases.",
      content: "# Mastering TypeScript Generics\n\nGenerics are one of TypeScript's most powerful features. They enable you to write flexible, reusable code while maintaining full type safety.\n\n## Why Generics?\n\nWithout generics, you'd have to choose between:\n- Writing specific functions for each type\n- Using `any` and losing type safety\n\nGenerics give you the best of both worlds.\n\n## Basic Generics\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n```\n\n## Constrained Generics\n\n```typescript\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n```\n\n## Real-World Patterns\n\nGenerics shine in API response typing, form handling, and state management patterns.",
      coverImage: "",
      tags: ["TypeScript", "Programming", "Tutorial"],
      author: "Alex Chen",
      published: true,
      createdAt: "2026-02-15",
      updatedAt: "2026-02-15",
      readTime: "7 min read",
    },
    {
      id: "3",
      title: "Docker for Full-Stack Developers",
      slug: "docker-for-fullstack-devs",
      excerpt: "Everything you need to know about containerizing your full-stack applications with Docker and Docker Compose.",
      content: "# Docker for Full-Stack Developers\n\nDocker has revolutionized how we develop, ship, and run applications. Here's your comprehensive guide.\n\n## Getting Started\n\nDocker containers package your application with all its dependencies, ensuring consistent behavior across environments.\n\n## Dockerfile Best Practices\n\n- Use multi-stage builds\n- Minimize layer count\n- Leverage build cache\n- Use `.dockerignore`\n\n## Docker Compose\n\nFor full-stack apps, Docker Compose orchestrates multiple services — your frontend, backend, database, and cache — with a single command.",
      coverImage: "",
      tags: ["Docker", "DevOps", "Backend"],
      author: "Alex Chen",
      published: false,
      createdAt: "2026-02-01",
      updatedAt: "2026-02-01",
      readTime: "6 min read",
    },
  ],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<BlogPost>) => {
      state.posts.unshift(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(p => p.id !== action.payload);
    },
    updatePost: (state, action: PayloadAction<BlogPost>) => {
      const idx = state.posts.findIndex(p => p.id === action.payload.id);
      if (idx !== -1) state.posts[idx] = action.payload;
    },
    togglePublish: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.published = !post.published;
    },
    resetBlog: () => initialState,
  },
});

export const { addPost, removePost, updatePost, togglePublish, resetBlog } = blogSlice.actions;
export default blogSlice.reducer;
