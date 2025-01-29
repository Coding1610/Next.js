# All About Next.js 15

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

# 26. Headers in Route Handlers

1. HTTP headers represent the metadata associated with an API request and response.

## Request Headers

1. These are sent nby the client, such as a web browser, to the server. 
2. They contain essential information about the request, which helps the server understand and process it correctly.

### User-Agent : Which identifies browser and OS to the server.

### Accept : Which indicatesthe content type like text, video or image formats that the client can process.

### Authorization : Header used by the client to authenticate itself to the server.

## Response Headers

1. These are sent back from the server to the client. They provide information about the server and the data being sent in the response.

### Content-Type :Which indicates the media type of the response, It tells the client what the data type of the returned content is, such as text/html for HTML docs, application/json for JSON data etc.

# 27. Cookies in Route Handlers

1. Cookies are small pieces of data that a server sends to users web browser.
2. The browser may store the cookies and send it back to the same server with later requests.

## Cookies are mainly used for three purposes

1. Session management like login and shopping carts. 
2. Personalization like user preferences and themes.
3. Tracking like recording and analyzing user behavior.

# 28. Caching in Route Handlers

1. Route Handlers are cached by deafult when using the <b>GET</b> method with the Response Object in Next.js.

## How to opt out of caching

1. Dynamic mode in <b>Segment Config Option</b>.
2. Using the <b>Request</b> object with <b>GET</b> method.
3. Employing dynamic function like <b>headers()</b> & <b>cookies()</b>.
4. Using ant HTTP metho other than <b>GET</b>.

# 29. Middleware

1. Middleware in Next.js is a powerful feature that offers a robust way to intercept and control the flow of requests and responses within your application.
2. It does this at a global level significantly enhancing features like redirection, URL rewrite, authentication, headers and cookies management and more.
3. make file name middleware.ts in src folder and function name middleware().

## Middleware allows us to specify paths where it will be active

1. Custom Matcher Config
2. Conditional Statements

# 30. Rendering

1. Is the process that transforms the code you write into user interface.
2. In Next.js, choosing the right time and place to do this rendering is vital for building a performant application

# 31. CSR : Client Side Rendering (React.js)

1. This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as <b>CSR</b>.
2. CSR quickly became the standard for <b>SPA's</b>, with widespread adoption.
3. It wasn't long before developers began noticing some inherent drawbacks to this approach.

## Drawbacks

### 1. SEO : Server Side Rendering (Next.js)

1. Generating HTML that mainly contains a single <div></div> tag is not optimal for SEO, as it provides little content for search engines to index.

### 2. Performance

1. Having the browser handle all the work, such as fetching data, computing the UI and making the HTML interactive can slow things down. User might see a blank screen or a loading spinner while the page loads.
2. Each new feature added to the application increases the size of JS bundle. prolonging the wait time for users to see the UI.

# 32. SSR : Server Side Rendering

1. The server generates the complete HTML for a web page and sends it to the browser. The browser then displays the content directly.
2. It significantly improves SEO beacuse search engines can easily index the server-rendered content.
3. Users can immediately see the page HTML content, instead of a blank screen or loading spinner.

## Hydration

1. During hydration, React takes control in the browser, reconstructing the component tree in memeory based on the static  HTML that was served.
2. It carefully plans the placement of interactive elements within this tree. Them, React proceeds to bind the necessary JS logic to these elements.
3. This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interractive user experience.

## SSG : Static Site Generation

1. SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for conntent that doesn't change often, like blog posts.

## Drawbacks

### 1. You have to fetch everyting before you can show anything

1. Components cannot start rendering and then pause or "Wait" while data is still being loaded.
2. If a component need to fetch data from a database or API, this fetching must be completed before the server can begin rendering the page.
3. This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.

### 2. You have to load everyting before you can hydrate anything

1. For successful hydration, where React adds interactivily to the server-rendered HTML, the component tree in the browser must exactly match th server-generated component tree.
2. This means that all the JS for the component must be loaded on the client before you can start hydrating any of them.

### 3. You have to hydrate everything before you can interact with anything

1. React hydrates the component tree in a single pass, meaning once it starts hydrating, it wont stop until its finished with the entire tree.
2. As a consequence, all components must be hydrate before you can interact with any of them.

# 34. Suspense for SSR

1. Use the <b><Suspense></b> component to unlock two major SSR feature,

- HTML Streaming on the server.
- Selective Hydration on the client

## HTML Streaming on the server

1. You don't have to fetch everything before you can show anything.
2. If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later.
3. This is the essence of how Suspense facilitates server-side HTML streaming.

## Code Splitting

1. Code splitting allows you to mark specific code segments as not immeiately necessary for loading, signalling your bundler to segregate them into spearate <script> tags.
2. Using <b>React.lazy</b> for code spliting enables you to sprate the main section's code from the primary JS bundler.
3. The JS containing React and the code for the entire application, excluding the main section, can opw be downloaded independently by the client, without having to wait for the main section's code.

## Selective Hydration on th Client

1. Selective Hydration offers a solutions to third issue.
2. By wrapping the main section within <Suspense>, you are indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating.
3. This feature, called <b>Selective Hydration</b> allows for the hydration of sections as they become available, before the rest of HTML and JS code are fully downloaded.
4. React begins hydrating as soon as possible, enabling interactions with elements like the header and side navigation without waiting for the main content to be hydrated.
5. This process is managed automaticallyby React.
6. In secnarios where multiple components are awaiting hydration, React prioritizes hydration n=based on user interaction.

## Drawbacks of Suspense SSR

1. Even though JS code is streamed to th browser asynchronously, eventually, the entire code for a web page must be downloaded by the user.
- As applications add more features, the amount of use code need to download also grow.
- <b> Should users really have to download so much data ? </b>

2. The current approach requires that all React components undergo hydration on the client side, irrespective of their actual need for interactivity.
- This process can inefficiently spend resource and extend the loading times and time to interactivity for users, as their devices need to process and render components that might not even require client-side interaction.
- <b> Should all components be hydrated, even those that dont need interactivity ? </b>

3. In spite of servers superior capacity for handling intensive processing tasks, the buld of JS execution still takes place on the user's device.
- This can slow down the performance, especially on device that are not very powerful.
- <b> Should so much of work be done on the user's device ? </b>

# 35. React Server Component (RSC)

1. RSC represent a new architecture designed by the Recat Team.
2. This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times and interactivity.
3. The Architecture intoduces a Dual-Component model.
- Client Component
- Server Component
4. This distinction is not based on the functionality of the components but rather on where they execute and the specific enviroments they are designed to interact with.

## Client Component

1. Client Components are the familiar React Componnets we have been using.
2. They are typically rendered on the client side but, they can also be rendered to HTML on the server, allowing users to immedialtley see the pages HTML contexr rather than a blnak screen.
3. Components that promarily run on the cloent but can also be executed once on the server as an optimization strategy.
4. Client Components have access to the client environment, such as browser, allowing them to use state, effects and event listeners to handle interactivity and also access browser-exclusive API's like <b>geoloaction or localStorage</b>, allowing you to build UI for specific use cases.
5. In fact the term <b>Client Component</b> does not signify anything new, it simply helps differentiate these components from the newly introduced <b>Server Component</b>.

```
"use client"
import { useState } from "react";

export default function ClientComponent(){
    console.log("this component is client component");
    const[val,setVal] = useState(0);
    return (
        <>
        <h1>Client Component</h1>
        </>
    )
}
```

- Are rendered once on the server and then on the client.

## Server Compoenent

1. Server Components represnt a new type of React Component specifically designed to operate exclusively on the server.
2. Unlike Client Compoenent, their code stays on the server and is never downloaded to the client.
3. This design choice offers mutilple benefits to React Application.

```
  export default function ServerComponent(){
    console.log("this component is server component");
    return (
        <>
        <h1>Server Component</h1>
        </>
    )
}
```

- Are rendered only on the server.

## RSC Key Takeways

1. RSC introduce a new way of building React apps by separating components into two types: Server Components and Client Components.
2. Server Components run only on the server, accessing data and preparing content without being sent to the browser, which makes the app faster for users because less information needs to download.
3. They can't manage clicks or interactions directly.
4. Client Components, on the other hand, work in the user's browser and handle all the interactive parts of the app, like clicking and typing.
5. They can also be rendered on the server for a fast initial load of the site. This setup helps make websites faster, more secure, and easier for everyone to use, no matter where they are or what device they're using.

## Benefits

1. Performance Optimization : Renders components on the server, reducing client-side JavaScript bundle size and improving initial page load speed.
2. Enhanced SEO : Server-side rendering ensures content is fully available to search engine crawlers, improving indexability.
3. Reduced Client-Side Computation : Complex rendering logic happens on the server, decreasing browser processing requirements.
4. Seamless Data Fetching : Allows direct database or API queries without exposing sensitive credentials to the client.
5. Improved Security : Sensitive logic and data access remain server-side, minimizing potential client-side vulnerabilities.
6. Static Site Generation (SSG) Support : Enables pre-rendering of pages at build time for faster content delivery.
7. Automatic Code Splitting : Intelligently splits JavaScript, loading only necessary code for each component.

# 36. RSC Rendering Lifecycle

## Loading 

<img src="./tutorial_03/public/Screenshot 2025-01-24 112712.png" />

## Updating

<img src="./tutorial_03/public/Screenshot 2025-01-24 113254.png" />

# 37. Server Rendering Methods

1. Static Rendering
2. Dynamic Rendering
3. Streaming

## Production Server VS Development Server

1. For Production, an optimized build is created once, and you deploy that build.
2. A Development Server, on the other hand, focuses on the developer experience.
3. We can not afford to build our app once, make changes, rebuild, and so on.
4. For Production builds, a page will be pre-rendered once when we run the build command.
5. In Development mode, apage will be pre-rendered for every request.

## 1. Static Rendering

1. Static Rendering is a strategy where we generate HTML page at the of building our application.
2. This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly.
3. This optimization also enables you to share the result of the rendering work among different users, resukting in a significant perfornance boost for your application.
4. Static Rendering is particularly useful for Blog Pages, E-commerce product pages, documentation and marketing pages.
5. Static Rendering is the default strategy in the app router.
6. All routes are automatically prepared at build time without additional setup.

### How to Static Render

- By default Next.js Render App in Static Mode.

## 2. Dynamic Rendering

1. Is a server rendering strategy where routes are rendered for each user at request time.
2. It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters.
3. News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial.

### How to Dynamic Render

- Dynamic Rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route.
- In Next.js, these dynamic functions are : cookies(), headers() and searchParams.
- Uisng any of these will opt the whole route into dynamic rendering at request time.

## 3. Streaming

1. Is a strategy that allows for progressive UI rendering from the server.
2. Work is divided into chunks and streamed to the client as soon as it's ready.
3. Streaming significantly improves both the initial page loading performance and the rendering of UI elements that rely on slower data fetches, which would otherwise block the rendering of the entire route.

### How to Streaming

- Is intergrated into the Next.js App Router by default.

# 39. Server & Client Composition Patterns

## Server Components

- Fetching Data
- Directly accessing backend resources
- Protecting sensitive information (like access tokens and API key) on the server
- Keeping large dependencies server-side, which helps in reducing client-side Javascript

## Client Component

- Use custom hooks
- Adding Interactivity
- Using React Class Component
- Using browser-exclusive APIs
- Handling event listeners (such as onClick(), onChange(), etc)
- Managing state and lifecycle effects (such as useState(), useEffect(), useReducer())

# 40. Server-Only Code

1. Certain code is intended to execute only on the server.
2. You might have modular or functions that use multiple libraries, use environment variables. interact directly with a database, or process confidential information.
3. Since JS modules can be shared, its possible for code thats meant only for server to unintentionally end up in the client.
4. If server side code get bundled into client side JS, it could lead to a bloated bundle size, expose secret keys, database queries and sensitive business logic.
5. It is crucial to separate server-only code from client-side code to protect the application's security and integrity.

## Server-Only Package

- npm i server-only
- import "server-only"
- Provide a build-time error if developers accidentally import one of these modules into a Client Component.

<img src="./tutorial_03/public/Screenshot 2025-01-25 200829.png"/>

## Third-Party Package

1. Third-party packages are pre-written software libraries or modules created by developers outside of the core Next.js team that can be installed and used in a Next.js project to add functionality, simplify development, or provide specialized features.
2. Amuk var third-party package client-only code hoy che to aene server-only ma use karva mate, aene nested folder ma rakhi ne use karvu.
2. In Next.js, third-party packages are typically installed via npm (Node Package Manager) and serve several important purposes,

### 1. Extending Functionality

-They allow developers to add complex features without writing everything from scratch.
-Examples include UI component libraries, state management tools, form handling libraries, and authentication solutions

### 2. Common Use Cases

-UI Libraries: Shadcn/ui, Material-UI, Chakra UI
-State Management: Redux, Zustand, Recoil
-Form Handling: React Hook Form, Formik
-Authentication: NextAuth.js, Auth0
-Data Fetching: React Query, SWR
-Styling: Tailwind CSS, Styled Components

## Context Provider

- Context Providers are typically rendered near the root of an application to share global application state and logic(application theme).
- However, since React context is not supported in Server Components, attempting to create a context at the root of your application will result is an error.
- To address this, you can create a context and render its provider inside a separate Client Component.
- Apde createContext use kariye root file(layout.tsx) ma to ae by default client-code che to error apse, but we want it without "use client", for that apde ae code ne alg component ma rakhine context and function of that use karishu(in client code only).

# 41. Client-Only Code

1. Just as it's imporatnt to restrict cetain operation to server, it's equaliy important t0 confine some functionality to the client side.
2. Client-only code typically interacts with browser-specific features like the DOM, the window object, localStorage etc which are not available on the server.
3. Ensuring that such code is executed only on the client side prevents errors during server-side rendering.
4. To prevent unintended server side usage of client side code, we can use a package called client-only.

## Client-Only Package

- npm i client-only
- import "client-only"
- Provide a build-time error if developers accidentally import one of these modules into a Server Component.

<img src="./tutorial_03/public/Screenshot 2025-01-25 234043.png"/>

## Client Component Placement

1. To compensate for server components not being able to manage state and handle interactivity, you need to crate client components.
2. Its recommended to poition these client components lower in your component tree.
3. Marked Parent "use client" then all of their children are automatically marked as client component.

# 42. Data Fetching

1. App Router use the React Server Components architecture, which allows us to fetch data using either server components or client components.
2. Its advantageous to fetch data using server components, as they have direct access to server-side resources such as databases or file systems.
3. This not only taps into the server's computational power and proximity to data sources for efficient data fetching and rendering but also minimizes the need for client-side processing.
4. Server Components support various configurations for caching, revalidating, and optimizing data fetching.
5. On the client side, data fetching is typically managed through third-party libraries such as TanStack Query which offers its own robust API's.

## Data Fetching with Server Component

1. The RSC arhitecture in the app router intoduce support for async and await keyword in Server Component.
2. This allows you to use the familiar JS await syntax by defining your component as an asynchronous function.
- example : "https://jsonplaceholder.typicode.com/users"

## Loading & Error States

1. Traditionally in React, you might manage these states by creating separate variables and conditionally rendering UI based on their values.
2. To implement a loading state, define and export a React Component in <b>loading.tsx</b>.
3. For handling errors, define and export a React Component in <b>error.tsx</b>.

## Caching Data

- By defaylt, Next.js automatically caches the returned values of fetch in the Data Cache on the server.

## Data Cache

### What is data cache ?

- It is a server-side cache that persists the result of data fetches across incoming server requests and deployments.

### Why is it required ?

- The data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request.

<img src="./tutorial_04/public/Screenshot 2025-01-26 180357.png"/>

## Opting Out Of Caching

- For individual data fetches, you can opt out of caching by setting the <b>cache</b> option to <b>no-store</b>.
- Once you specify the <b>no-store</b> option for a fetch request, subsequent fetch requests will also not be cached.
- By default, Next.js will cache fetch() requests that occur before any dynamic functions are used and willnot cache requests found after dyna,ic functions.

## Requeest Memoization

- Request memoization is a technique that deduplicates requests for the same data within a single render pass.
- This approach allows for re-use of data in a React Component Tree, prevents redundant network calls and enhances performance.
- For the initial request, data is fetched from an external source and the result is stored in memory.
- Subsequent requests for the same data within the same render pass retrieve the result from memory, bypassing the need to make the request again.
- This optimization not only enhances performance but also simplifies data fetching within a component tree.
- When the same data is needed across different components in a route(layout.tsx, page.tsx and other components), it eliminates the need to fetch data at the top of the tree and pass props between components.
- Instead, data can be fetched directly within the components that require it, without concerns about the performance implications of multiple network requests for the same data. 
- Request Memoization is a React feature, not specifically a Next.js feature.
- Memoization only applies to the <b>GET</b> method in fetch requests.

<img src="./tutorial_04/public/Screenshot 2025-01-27 140710.png" />

## Revalidation

- Revalidation is the process of purging the Data Cache and re-fetching the latest data 

### Time Based Revalidation

- Next.js automatically revalidates data after a certain amount of time has passed.
- You can set revalidate route segment configuration to establish the default revalidation time for a layout or page, <b>export const revalidate = 10;</b>
- Regarding the revalidation frequency, the lowest revalidate time across each layout and page of a single route will determine the revalidation frequency of the entire route.

## Data Fetching with Client Component 

- Same as we fetch data in React.

# 43. Authentication with Clerk

1. Sign Up
2. Sign In
3. Manage Account
4. Show UI elemenet based on auth status
5. Protect routes based on auth status
6. Read session and user data
7. Sign Out