# Tooba Hussain — Portfolio

A personal portfolio site built with React and Vite, showcasing my projects, skills, education, and experience as a Computer Science student focused on AI automation and web development.



## Features

- Responsive design for desktop and mobile
- Dark / light theme toggle with saved preference (persists via `localStorage`)
- Scroll-spy navigation that highlights the active section as you scroll
- Scroll-reveal animations on section content
- Animated stats counters
- Filterable project grid with a details modal for each project
- Contact form with real-time validation and feedback
- Smooth "back to top" button

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Node.js / npm
- Plain CSS (custom properties for theming)

### Advanced React concepts used

- Context API + `useReducer` (global theme and toast notification state)
- Custom hooks (scroll tracking, `localStorage` sync, click-outside detection, intersection observer)
- `useMemo` / `useCallback` / `React.memo` (optimized project filtering)
- `useTransition` and `useId` (React 18+ features)
- `React.lazy` + `Suspense` (code-split project details modal)
- Error Boundaries (class component fallback UI)
- Portals (`createPortal`) for modals and toast notifications

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/ToobaHussain167/My_Portfolio.git
cd My_Portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  assets/        Images and static assets
  components/     UI components (Navbar, Hero, About, Projects, Contact, etc.)
  context/        React Context providers (Theme, Toast)
  hooks/          Custom hooks (useScrollSpy, useLocalStorage, useInView, etc.)
  data/           Static project data
  App.jsx         Root component
  main.jsx        Entry point
```

## License


This project is open source and available for personal reference. Feel free to explore the code, but please don't copy the content or design as your own.
