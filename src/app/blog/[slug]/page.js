// app/blogs/[slug]/page.js

const blogPosts = {
  'javascript-tips': {
    title: 'JavaScript Tips and Tricks',
    date: 'April 10, 2024',
    content: `
      JavaScript is a powerful language, and these tips will help you write cleaner and more efficient code:
      
      1. Use optional chaining to avoid null checks.
      2. Destructure objects and arrays for cleaner code.
      3. Use async/await instead of .then() for better async code.
       Example:
         const getData = async () => {
           try {
             const res = await fetch('/api/data');
             const data = await res.json();
             console.log(data);
           } catch (err) {
             console.error(err);
           }
         };

      4. Use default parameters in functions.
       Example:
         function greet(name = 'Guest') {
           console.log('Hello, ' + name);
         }

      5. Use the spread operator (...) to clone or merge arrays and objects.
       Example:
         const newArray = [...oldArray];
         const newObj = { ...obj1, ...obj2 };

      6. Use template literals for dynamic strings.
       Example: \`Hello, \${user.name}!\`

      7. Use Array.map, Array.filter, and Array.reduce for functional-style coding.
       Example:
         const completed = tasks.filter(task => task.done);

      8. Use Object.entries() and Object.keys() for object iteration.
       Example:
         for (const [key, value] of Object.entries(obj)) {
           console.log(\`\${key}: \${value}\`);
         }

      9. Short-circuit evaluation with && and ||.
       Example:
         const isAdmin = user.role === 'admin' && 'You have admin access';

      10. Use Set to get unique values from an array.
        Example:
          const unique = [...new Set(myArray)];

      ...and much more!
    `,
  },
  'react-hooks-guide': {
  title: 'Mastering React Hooks',
  date: 'April 18, 2024',
  content: `
    React Hooks allow you to use state and lifecycle features in functional components without writing classes. Mastering them is key to building modern React apps:

    🔹 useState – Manage local component state.
        Example:
          const [count, setCount] = useState(0);

    🔹 useEffect – Handle side effects like data fetching, event listeners, or timers.
        Example:
          useEffect(() => {
            document.title = \`Count: \${count}\`;
          }, [count]);

    🔹 useContext – Share state globally without prop drilling.
        Example:
          const theme = useContext(ThemeContext);

    🔹 useRef – Persist mutable values without causing re-renders. Great for DOM refs.
        Example:
          const inputRef = useRef(null);

    🔹 useMemo – Memoize expensive calculations.
        Example:
          const sortedList = useMemo(() => expensiveSort(data), [data]);

    🔹 useCallback – Memoize functions to avoid unnecessary re-renders.
        Example:
          const handleClick = useCallback(() => doSomething(), []);

    🔹 useReducer – Ideal for complex state logic, similar to Redux pattern.
        Example:
          const [state, dispatch] = useReducer(reducer, initialState);

    🔹 Custom Hooks – Extract reusable logic into custom functions.
        Example:
          function useWindowWidth() {
            const [width, setWidth] = useState(window.innerWidth);
            useEffect(() => {
              const handleResize = () => setWidth(window.innerWidth);
              window.addEventListener('resize', handleResize);
              return () => window.removeEventListener('resize', handleResize);
            }, []);
            return width;
          }

    🚀 Mastering these hooks will make your React components cleaner, more modular, and easier to manage.
  `,
},
  'mongodb-mongoose-guide': {
  title: 'MongoDB & Mongoose Guide',
  date: 'May 5, 2024',
  content: `
    MongoDB is a NoSQL document database perfect for flexible and scalable apps. Mongoose is an ODM (Object Data Modeling) tool for Node.js and MongoDB.

    📌 Key Topics:

    🔹 Connecting to MongoDB using Mongoose:
        Example:
          mongoose.connect('mongodb://localhost:27017/myapp');

    🔹 Defining Schemas and Models:
        Example:
          const userSchema = new mongoose.Schema({
            name: String,
            email: { type: String, required: true, unique: true },
            createdAt: { type: Date, default: Date.now }
          });
          const User = mongoose.model('User', userSchema);

    🔹 Performing CRUD operations:
        - Create: await User.create({ name: 'Alice' });
        - Read: const users = await User.find();
        - Update: await User.updateOne({ name: 'Alice' }, { name: 'Bob' });
        - Delete: await User.deleteOne({ name: 'Bob' });

    🔹 Using Mongoose Middleware:
        - Pre/post hooks for saving, updating, deleting.
        Example:
          userSchema.pre('save', function(next) {
            this.name = this.name.trim();
            next();
          });

    🔹 Validation:
        - Required fields, custom validators, async validation.
        Example:
          email: {
            type: String,
            required: true,
            validate: {
              validator: (v) => /.+@.+\..+/.test(v),
              message: props => \`\${props.value} is not a valid email!\`
            }
          }

    🔹 Populating References:
        - Join-like operations using .populate().
        Example:
          Post.find().populate('author');

    🔹 Indexes and Performance:
        - Improve query speed with indexes.
        Example:
          userSchema.index({ email: 1 });

    This guide gives you the practical tools to build and manage data in full-stack MERN applications with confidence.
  `,
},
'tailwind-css-tips': {
  title: 'Tailwind CSS Tips',
  date: 'May 12, 2024',
  content: `
    Tailwind CSS enables utility-first CSS development and saves tons of time when designing responsive UIs.

    💡 Pro Tips to Master Tailwind:

    1. Use @apply to extract common styles into reusable classes.
       Example (in a .css file):
         .btn-primary {
           @apply bg-blue-600 text-white px-4 py-2 rounded;
         }

    2. Responsive Design is built-in:
       Use breakpoints like sm:, md:, lg:, xl: to adapt layouts.
       Example:
         <div class="text-sm md:text-base lg:text-lg">

    3. Dark Mode made easy:
       Enable it with \`darkMode: 'class'\` in tailwind.config.js
       Then use classes like:
         <div class="bg-white dark:bg-gray-900 text-black dark:text-white">

    4. Customize Tailwind:
       Edit tailwind.config.js to define custom colors, spacing, fonts, etc.
       Example:
         extend: {
           colors: {
             primary: '#4F46E5',
             secondary: '#10B981'
           }
         }

    5. Use Plugins:
       - @tailwindcss/forms – Better form styles
       - @tailwindcss/typography – Beautiful prose
       - @tailwindcss/aspect-ratio – Useful for images/videos

    6. Use arbitrary values:
       No need to write custom CSS.
       Example:
         <div class="mt-[13px] w-[72%] bg-[#f5f5f5]">

    7. IntelliSense Plugin for VSCode:
       Boost productivity with autocomplete and suggestions.

    🛠️ Once you're comfortable with the utility classes, you'll be building polished, responsive interfaces 10x faster.
  `,
},

'nextjs-app-router': {
  title: 'Next.js App Router Guide',
  date: 'June 1, 2024',
  content: `
    The App Router in Next.js (v13+) introduces a flexible, modern approach to routing based on the /app directory.

    🧭 Topics Covered:

    🔹 File-based Routing:
        Each folder in /app becomes a route. Use page.js for route content.
        Example:
          /app/blog/page.js → /blog

    🔹 Layouts:
        Shared UI for routes (like headers/footers).
        Example:
          /app/layout.js applies globally.
          /app/blog/layout.js is scoped to /blog.

    🔹 Templates:
        Use templates when you want to reset state on navigation.
        Example:
          Useful for modals or pages that need to fully re-render.

    🔹 Dynamic Routing:
        Create dynamic routes with [slug].
        Example:
          /app/blog/[slug]/page.js → /blog/hello-world

    🔹 Loading and Error UI:
        Add loading.js, error.js, and not-found.js inside routes.
        Example:
          /app/blog/loading.js → Shows during fetch delay

    🔹 Server Components:
        Load data on the server by default.
        Use "use client" at the top of a file to make it a Client Component.

    🔹 Data Fetching:
        Use async functions directly in components.
        Example:
          const data = await fetch(...)

    🔹 Metadata API:
        Define dynamic meta tags in head.
        Example:
          export const metadata = { title: 'My Blog Post' }

    🧠 The App Router is built to support modern use cases like partial rendering, server-side streaming, and scalable layouts.
  `,
},
'git-tips-every-dev': {
  title: 'Git Tips Every Developer Should Know',
  date: 'June 10, 2024',
  content: `
    Git is essential for version control and collaboration. Here are key tips every developer should master:

    🔹 Use Branches:
        Keep main clean. Create a branch for each feature or fix.
        Example:
          git checkout -b feature/login-page

    🔹 Stash Your Work:
        Save uncommitted changes temporarily.
        Example:
          git stash
          git stash pop

    🔹 Clean Commit History:
        Use interactive rebase to squash commits before merging.
        Example:
          git rebase -i HEAD~3

    🔹 Git Log Like a Pro:
        Get a clear view of your commits.
        Example:
          git log --oneline --graph --all

    🔹 Undo Mistakes:
        Revert a commit:
          git revert <commit-hash>
        Reset a commit (careful!):
          git reset --hard <commit-hash>

    🔹 Tag Important Releases:
        Example:
          git tag v1.0.0
          git push origin v1.0.0

    🔹 Use .gitignore:
        Prevent sensitive or unnecessary files from being tracked.
        Example:
          node_modules/
          .env

    🔹 Resolve Merge Conflicts:
        1. Identify conflict markers.
        2. Edit file and remove markers.
        3. git add <file>, then git commit.

    🔹 Cherry-Pick:
        Apply a specific commit from another branch.
        Example:
          git cherry-pick <commit-hash>

    🚀 Once you’re comfortable with Git, version control becomes a superpower — not a source of stress.
  `,
},

  // Add more posts here
};

export default async function BlogPost({ params }) {

  const { slug } = await params
  const post =  blogPosts[slug];

  if (!post) return <div className="p-10">Post not found.</div>;

  return (
    <div className="min-h-screen w-full mt-20 flex justify-center">
      <div className="p-6 md:p-10 w-full md:w-[50vw]">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-2">{post.date}</p>
        <div className="whitespace-pre-line">{post.content}</div>
      </div>
    </div>
  );
}
