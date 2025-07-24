// app/blogs/[slug]/page.js

const blogPosts = {
  'javascript-tips': {
    title: 'JavaScript Tips and Tricks',
    date: 'April 10, 2024',
    content: `
      JavaScript is a powerful language, and these tips will help you write cleaner and more efficient code:
      
      1. Use optional chaining to avoid null checks.
      2. Destructure objects and arrays for cleaner code.
      3. Use async/await instead of .then().
      4. Use default parameters in functions.
      
      ...and much more!
    `,
  },
  'react-hooks-guide': {
    title: 'Mastering React Hooks',
    date: 'April 18, 2024',
    content: `
      React Hooks allow you to use state and lifecycle features in functional components:
      
      - useState for local component state.
      - useEffect for side effects.
      - useContext to avoid prop drilling.
      - useRef for DOM manipulation.
      
      We'll also cover custom hooks and useReducer.
    `,
  },
  'mongodb-mongoose-guide': {
  title: 'MongoDB & Mongoose Guide',
  date: 'May 5, 2024',
  content: `
    MongoDB is a NoSQL database widely used with Node.js. Mongoose is an ODM (Object Data Modeling) library that makes interacting with MongoDB simpler.

    Key topics:
    - Connecting to MongoDB using Mongoose
    - Defining schemas and models
    - Performing CRUD operations
    - Using Mongoose middleware and validation

    This guide will give you a solid foundation in building data-driven applications.
  `,
},

'tailwind-css-tips': {
  title: 'Tailwind CSS Tips',
  date: 'May 12, 2024',
  content: `
    Tailwind CSS enables utility-first CSS development and saves tons of time. Here are a few pro tips:

    1. Use @apply for common patterns in your global.css or components.
    2. Take advantage of responsive and dark mode variants like md:, hover:, dark: etc.
    3. Use the Tailwind plugin system for forms, typography, etc.
    4. Customize your tailwind.config.js for branding and spacing scales.

    Once you master Tailwind's utility classes, building beautiful UIs becomes much faster.
  `,
},

'nextjs-app-router': {
  title: 'Next.js App Router Guide',
  date: 'June 1, 2024',
  content: `
    The Next.js App Router (introduced in v13) is a powerful routing system built on React Server Components.

    Topics covered:
    - File-based routing inside /app directory
    - Creating layouts, pages, and templates
    - Using dynamic segments like [slug]
    - Client vs Server components
    - Loading, error, and not-found states

    This guide helps you build scalable and maintainable applications using the App Router.
  `,
},

'git-tips-every-dev': {
  title: 'Git Tips Every Developer Should Know',
  date: 'June 10, 2024',
  content: `
    Git is the backbone of version control in most projects. Here are some essential tips:

    - Use branches for features and bug fixes.
    - Use 'git stash' to temporarily save uncommitted changes.
    - Rebase for a clean commit history.
    - Use .gitignore to avoid committing unnecessary files.
    - Use 'git log --oneline' to get a clean history view.

    These tips can save you hours and help avoid common mistakes in collaborative development.
  `,
}
  // Add more posts here
};

export default function BlogPost({ params }) {

  const post =  blogPosts[params.slug];

  if (!post) return <div className="p-10">Post not found.</div>;

  return (
    <div className="h-[100vh] w-[100vw] md:h-[100vh] md:-w-[] mt-20">
        <div className="p-10 ">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <div className="whitespace-pre-line">{post.content}</div>
        </div>
    </div>
  );
}
