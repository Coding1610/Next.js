# What is Next.js

## React
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

## Next..js simplifies the process of building a web application for production.

1. Routing
2. API routes
3. Rendering
4. Data Fetching
5. Styling
6. Optimization
7. Dev and Prod build system

# React Server Components (RSC)

1. RSC is a new architecture introduced by the React team in version 18 which was quickly embraced by Next.js
2. The architecture introduces a neewway of creating React Components, splitting them into tow type, <b>Server Components</b> & <b>Client Components</b>

## Server Components

1. In Next.js, all components are SC by default.
2. They have the ability to run tasks like rendering files or fetching data from a database.
3. However, they don't have the ability to use hooks or handle user interactions.

## Client Components

1. To create a CC, it is necessary to add <br>use client</br> at the top of the component file.
2. CC can't perform tasks like reading files, but they have the ability to use hooks and manage interactions.

# 1. Routing

1. Next.js has file system based routing mechanism.

app/
  ├── page.tsx         // Home page (/)
  ├── about/
  │   └── page.tsx     // About page (/about)
  ├── contact/
  │   └── page.tsx     // Contact page (/contact)
  ├── blog/
  │   └── page.tsx     // Blog page (/blog)

2. URL paths that useres can access in the browser are defined by files and folders in your codebase.

## Routing Conventions

1. All Routes must be placed inside the app folder.
2. Every file that corresponds to a route must be named <b>page.js</b> or <b>page.tsx</b>.
3. Every folder corresponds to a path segment in the browser URL.

# 2. Nested Routing

1. In Next.js, you create nested routes by adding folders inside the app directory. Each folder represents a route segment. For example :

app/
  ├── dashboard/
  │   └── page.tsx     // /dashboard
  │   ├── settings/
  │   │   └── page.tsx // /dashboard/settings

# 3. Dynamic Routing

1. Dynamic routes use square brackets [param] to create pages that can capture different values :

app/
  ├── users/
  │   └── [id]/
  │       └── page.tsx // /users/123, /users/456, etc.

2. Access the parameter using params.id in your page component.

# 4. Nested Dynamic Routing

1. You can combine nested and dynamic routes :

app/
  ├── posts/
  │   └── [category]/
  │       └── [id]/
  │           └── page.tsx // /posts/tech/123, /posts/news/456

# 5. Catch-all Segments

1. Use [...slug] to catch all following routes :

app/
  ├── docs/
  │   └── [...slug]/
  │       └── page.tsx // Matches /docs/a, /docs/a/b, /docs/a/b/c

2. Or [[...slug]] for optional catch-all routes that also match the parent path.

# 6. Custom Not-Found Page

1. Create a not-found.tsx file to customize the 404 page :

app/
  ├── not-found.tsx    // Global 404 page
  ├── blog/
  │   └── not-found.tsx // Custom 404 just for /blog/*

2. You can place not-found.tsx in any folder to create segment-specific error pages. Each one will handle "not found" errors for its route segment and all nested routes below it.

# 7. Private Folders

1. Private folders in Next.js allow you to create folders that won't be included in the routing system. Here's a quick overview :

app/
  ├── _components/     // Using underscore
  ├── (components)/   // Using parentheses
  └── page.tsx

2. The key point is that any folder starting with _ or wrapped in () will be ignored by Next.js routing system, making them perfect for organizing internal application code like components, utilities, and helpers.
3. But you can access private folder if you named that folder starts with <b>"%5F"</b>.

# 8. Route Groups

1. Route Groups in Next.js allow you to organize routes without affecting the URL structure. Here's a brief explanation : 
2. Use parentheses (folderName) to create a route group :

app/
  ├── (shop)/
  │   ├── products/
  │   │   └── page.tsx    // /products
  │   └── categories/
  │       └── page.tsx    // /categories
  │
  ├── (marketing)/
  │   ├── blog/
  │   │   └── page.tsx    // /blog
  │   └── about/
  │       └── page.tsx    // /about

app/
  ├── (shop)/
  │   ├── layout.tsx      // Layout for shop pages
  │   └── products/
  ├── (marketing)/
  │   ├── layout.tsx      // Different layout for marketing pages
  │   └── blog/

3. The parentheses in the folder name are removed from the URL path, so (shop)/products/page.tsx creates the route /products, not /shop/products.

## Key Benefits

1. Organize routes by feature or team.
2. Create multiple root layouts.
3. Separating sections of your app.
4. Applying different layouts to different sections.
5. Organizing code by teams or features.
6. Breaking down complex applications into logical groups.

# 9. Layouts

1. Share UI across multiple pages.
2. Persist state, remain interactive during navigation.
3. Don't re-render when children pages change.

# 10. Nested Layouts

1. Can be nested inside each other.
2. Each layout wraps the child layouts/pages beneath it.
3. Great for section-specific UI.

# 11. Route Group Layout

1. Created using (foldername).
2. Organize routes without affecting URL structure.
3. Can have their own layouts.

# 12. Routing Metadata

1. Set using metadata export or generateMetadata function.
2. Can be static or dynamic.
3. Supports various metadata types (title, description, openGraph, etc.).

# 13. Title Metadata

1. Can be static or dynamic.
2. Supports template literals.
3. Can be generated based on data.

# 14. UI Navigation & Active Link

1. Use Link component for client-side navigation.
2. usePathname() hook for active link detection and it only use in client component.
3. Supports automatic prefetching for performance.
4. replace : Replace the current history state instead of adding a new url into the stack.
5. You can add active link css classes.