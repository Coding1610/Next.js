# What is Next.js

## React.js
1. Its not feasible to create a fully featured application ready for production.
2. React is a library for building user interfaces.
3. You need to make decisions about other features such as routing, data fetching and many more. 

## Next.js
1. Next.js is a React framework for building web applications.
2. It uses React for building user interfaces.
3. Provides additional features that enable you to build production ready applications.
4. These features include routing, optimized rendering, data fetching, bundling, comiling and more.
5. You don't need to install additional packages as Next.js provides everything you need.

# Why learn Next.js

## Next.js simplifies the process of building a web application for production.

1. Routing
2. API routes
3. Rendering
4. Data Fetching
5. Styling
6. Optimization
7. Dev and Prod build system

# React Server Components (RSC)

1. RSC is a new architecture introduced by the React team in version 18 which was quickly embraced by Next.js.
2. The architecture introduces a neewway of creating React Components, splitting them into tow type, <b>Server Components</b> & <b>Client Components</b>.

## Server Components

1. In Next.js, all components are SC by default.
2. They have the ability to run tasks like rendering files or fetching data from a database.
3. However, they don't have the ability to use hooks or handle user interactions.

## Client Components

1. To create a CC, it is necessary to add <b>use client</b> at the top of the component file.
2. CC can't perform tasks like reading files, but they have the ability to use hooks and manage interactions.

# 1. Routing

1. Next.js has file system based routing mechanism.
2. URL paths that useres can access in the browser are defined by files and folders in your codebase.

## Routing Conventions

1. All Routes must be placed inside the app folder.
2. Every file that corresponds to a route must be named <b>page.js</b> or <b>page.tsx</b>.
3. Every folder corresponds to a path segment in the browser URL.
