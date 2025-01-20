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

# Special Files

1. page.tsx
2. routes.ts
3. error.tsx
4. layout.tsx
5. loading.tsx
6. deafult.tsx
7. template.tsx
8. not-found.tsx

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

```
  app/
    ├── page.tsx         // Home page (/)
    ├── about/
    │   └── page.tsx     // About page (/about)
    ├── contact/
    │   └── page.tsx     // Contact page (/contact)
    ├── blog/
    │   └── page.tsx     // Blog page (/blog)
```

2. URL paths that useres can access in the browser are defined by files and folders in your codebase.

## Routing Conventions

1. All Routes must be placed inside the app folder.
2. Every file that corresponds to a route must be named <b>page.js</b> or <b>page.tsx</b>.
3. Every folder corresponds to a path segment in the browser URL.

# 2. Nested Routing

1. In Next.js, you create nested routes by adding folders inside the app directory. Each folder represents a route segment. For example :

```
  app/
    ├── dashboard/
    │   └── page.tsx     // /dashboard
    │   ├── settings/
    │   │   └── page.tsx // /dashboard/settings
```

# 3. Dynamic Routing

1. Dynamic routes use square brackets [param] to create pages that can capture different values :

```
  app/
    ├── users/
    │   └── [id]/
    │       └── page.tsx // /users/123, /users/456, etc.
```

2. Access the parameter using params.id in your page component.

# 4. Nested Dynamic Routing

1. You can combine nested and dynamic routes :

```
  app/
    ├── posts/
    │   └── [category]/
    │       └── [id]/
    │           └── page.tsx // /posts/tech/123, /posts/news/456
```

# 5. Catch-all Segments

1. Use [...slug] to catch all following routes :

```
  app/
    ├── docs/
    │   └── [...slug]/
    │       └── page.tsx // Matches /docs/a, /docs/a/b, /docs/a/b/c
```

2. Or [[...slug]] for optional catch-all routes that also match the parent path.

# 6. Custom Not-Found Page

1. Create a not-found.tsx file to customize the 404 page :

```
  app/
    ├── not-found.tsx    // Global 404 page
    ├── blog/
    │   └── not-found.tsx // Custom 404 just for /blog/*
```

2. You can place not-found.tsx in any folder to create segment-specific error pages. Each one will handle "not found" errors for its route segment and all nested routes below it.

# 7. Private Folders

1. Private folders in Next.js allow you to create folders that won't be included in the routing system. Here's a quick overview :

```
  app/
    ├── _components/     // Using underscore
    ├── (components)/   // Using parentheses
    └── page.tsx
```

2. The key point is that any folder starting with _ or wrapped in () will be ignored by Next.js routing system, making them perfect for organizing internal application code like components, utilities, and helpers.
3. But you can access private folder if you named that folder starts with <b>"%5F"</b>.

# 8. Route Groups

1. Route Groups in Next.js allow you to organize routes without affecting the URL structure. Here's a brief explanation : 
2. Use parentheses (folderName) to create a route group :

```
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
```

```
  app/
    ├── (shop)/
    │   ├── layout.tsx      // Layout for shop pages
    │   └── products/
    ├── (marketing)/
    │   ├── layout.tsx      // Different layout for marketing pages
    │   └── blog/
```

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

# 15. Navigate Programmatically : useRouter()

1. Must use 'use client' directive.
2. Works in client components only.
3. Supports query parameters and dynamic routes.
4. Handles loading states automatically.
5. Maintains scroll position by default.

## Available Methods of useRouter()

1. push() : Navigate to new route
2. replace() : Replace current history entry
3. back() : Go to previous page
4. forward() : Go to next page
5. refresh() : Refresh current route
6. prefetch() : Prefetch a route

# 16. Template

1. Template are similar to layouts in thta they wrap each child layout or page.
2. But, with template, when a user navigates between routes that share a template a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-syncronized.
3. A template can be defined by exporting a default React Component from a template.js or template.tsx file.
4. Similar to layouts, templates also should accept a children prop which will render the nested segment in the route.
5. Layout and Template both used then first Layout render then Template render.

# 17. Loading UI

## loading.tsx

1. This file allows us to create loading state that are displayed to users while a specific route segment's content is loading.
2. The loading state appears immediately upon navigation, giving users the assurance that the application is responsive and actively loading content.

# 18. Error Handling & Recovering
 
## error.tsx

1. It is use in Client Component.
2. Automatically wrap a route segment and its nested children in a React ErrorBoundary.
3. Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
4. Isolate errors to affected segments while keeping the rest of the application functional.
5. Add functionality to attempt to recover from an error without a full page reload.
6. For Recover, page.tsx is in "use client", we use <b>reset</b> function.

# 19. Handling Error in Nested Routes

1. Error bubble up to the closet parent error boundary
2. An error.tsx file will cater to errors for all its nested child segments.
3. By positioning <b>error.tsx</b> files at different levels in the nested folders of a route, you can achieve a more granular level of error handling.

# 20. Handling Error in Layouts

1. An <b>error.tsx</b> file will handle errors for all nested child segments.
2. Th error boundary does not catch errors thrown here because its nested inside the layouts components.
3. Put error.tsx in parent folder.

# 21. Parallel Routes

1. Parallel Routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout.
2. Parallel Routes in Next.js are defined using a feature known as <b>slots</b>.
3. Slots help structure our content in a modular fashion.
4. To define a slot, we use the <b>@folderName</b> naming convention.
5. A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.

## Independent Route Handling

1. Each slot of your layout, such as user or revenue can have its own loading and error states.
2. This granular control is particularly benefical in scenarios where different sections of the page load at varying speeds or encounter unique errors.

## Sub Navigation

1. Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation ans state management.
2. This is especially useful in a complex application such as our dashboard where different sections serve distinct purpose.

# 22. Unmatched Routes

## Navigation from the UI

1. In the case of navigation with the UI, Next.js retains the previously active state of a slot regardless of changes in the URL.

## Page Reload

1. Next.js immediately searches for a <b>default.tsx</b> file within each unmatched slot.
2. The presence of this file is critical, as it provides the default content that Next.js will render in th user interface.
3. If this <b>default.tsx</b> file is missing in any of the unmatched slots for the current route, Next.js will render a 404 error.

## default.tsx

1. The <b>default.tsx</b> file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL.
2. You have complete freedom tp define the UI for unmatched routes, you either mirror the content found in <b>page.tsx</b> or craft an entirely custom view.

# 23. Conditional Routes

1. Based on condition you can render the components.

# 24. Intercepting Routes

1. Intercepting Routes allows you to intercept or stop the default routing behaviour to present an alternate view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads.
2. This can be useful if you want to show a route while keeping the context of the current page.

## Convention Patterns

1. (.) - Intercept same level and below
2. (..) - Intercept one level above
3. (..)(..) - Intercept two levels above
4. (...) - Intercept from root

# 25. Route Handlers

## Methods 

1. GET()
2. POST()
3. PATCH()
4. DELETE()

1. We can create custom request handlers for our routes using a feature called <b>route handlers</b>.
2. Unlike page routes, which respond with HTMLcontent, route handlers allows you to create <b>RESTful endpoints</b>, giving you full control over the response.
3. There is no overhead of having to create and configure a separate server.
4. Route Handlers are also greate for making external API requests.
5. Route handlers run server-side, ensuring that sensitive information like private keys remains secure and never gets shipped to the browser.

## GET

```
  export async function GET(request:Request){
     return Response.json(comments);
  }
```

## POST

```
  export async function POST(request:Request){
    const commnet = await request.json();
    const newComment = {
        id: comments.length + 1,
        text : commnet.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201,
    });
}
```

## PATCH

```
  export async function PATCH(request:Request,props:Props){
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex((cmt) => cmt.id === parseInt(props.params.id));
    comments[index].text = text;
    return Response.json(comments[index]);
}
```

## DELETE

```
  export async function DELETE(prequest:Request,props:Props){
    const index = comments.findIndex((cmt) => cmt.id === parseInt(props.params.id));
    const deletedComment = comments[index];
    comments.splice(index,1);
    return Response.json(deletedComment);
}
```

## Query Route Handler

```
  export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter((cmt) => cmt.text.includes(query)) : comments;
    return Response.json(filteredComments);
}
```

## Redirect in Route Handler

```
  export async function GET( _request:Request, props:Props){
    if( parseInt(props.params.id) > comments.length ){
       redirect("/comments"); 
    }
    else{
        const comment = comments.find((comment) =>  comment.id === parseInt(props.params.id));
        return Response.json(comment);
    }
};
```