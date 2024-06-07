Writing Scripts in package.json
Q: What converts new code to older code (for older version browsers)?

A: Babel
Babel automatically handles polyfills.
Commands:

npx: Executes commands without downloading packages.
npm: Downloads required packages.
Note on Parcel:

Parcel does not remove console.log automatically.
To remove console.log, use the package babel-plugin-transform-remove-console.
Installation: npm install babel-plugin-transform-remove-console --save-dev or -D
Usage:
Via .babelrc (recommended)
Via CLI
Via NodeAPI
React-Key Reconciliation
When there are siblings in an array, each sibling needs a unique key.
Homework: Read about React-key Reconciliation from React Docs.
React.createElement and JSX
React.createElement:

Returns an object, which is then converted to HTML and inserted into the DOM.
JSX:

Uses React.createElement behind the scenes, which returns an object, then converts it to HTML and inserts it into the DOM.
Babel converts JSX.
JSX was developed by Facebook.
Babel is necessary to use JSX.
Q: Is JSX HTML inside JS?

A: No. JSX is a HTML-like syntax, not HTML inside JS.
Babel
Babel:
A compiler for JavaScript.
Documentation: babeljs.io
GitHub Repo: Explore its algorithms.
Babel comes along with Parcel.
React Components
Types:

Functional Component - NEW
Class-Based Component - OLD
Functional Components:

Just a normal function that returns some JSX or a React element.
Component names typically start with a capital letter (best practice).
Syntax:

When returning multiple lines in a component, use parentheses () and a semicolon ; at the end.
Part 2 of Notes
Differences Between React Element & React Component
React Element:

Returns an object.
React Component:

A function that returns JSX, a React element, or another function.
Rendering Syntax:

React Element: root.render(element_name);
React Component: root.render(<ComponentName />);
JavaScript Code in JSX:

Any piece of JavaScript code can be written within {}.
XSS (Cross Site Scripting)
An attack where malicious scripts are injected into trusted websites.
JSX mitigates XSS risks.
Interview Q: Component Composition
A: Component Composition: Passing one component inside another.
Homework
Read about React-key Reconciliation from React Docs.
Replicate everything done in the session

### Understanding JSX and React Concepts

**JSX (JavaScript XML)**

- **Definition**: A syntax extension for JavaScript that looks similar to HTML.
- **Example**: `<h1>Hello, world!</h1>`
- **Purpose**: Makes it easier to write and understand the structure of UI components in React.

**React.createElement vs. JSX**

- **React.createElement**: A function to create React elements.
  - **Example**: `React.createElement('h1', null, 'Hello, world!')`
- **JSX**: A syntactic sugar for `React.createElement`.
  - **Example**: `<h1>Hello, world!</h1>`
- **Benefits of JSX**:
  - **Easier to Read and Write**: JSX is more intuitive as it looks like HTML.
  - **Enhanced Error Messages**: JSX provides better error messages compared to `React.createElement`.

**Behind the Scenes of JSX**

- **Compilation**: JSX is not understood by browsers directly. Tools like Babel compile JSX into `React.createElement` calls.
- **Example**:
  - JSX: `<h1>Hello, world!</h1>`
  - Compiled: `React.createElement('h1', null, 'Hello, world!')`

**Role of Babel & Parcel in JSX**

- **Babel**: Transpiles JSX into JavaScript.
- **Parcel**: A bundler that packages all the assets (JavaScript, CSS, etc.) for the application.
- **Example**: Writing JSX in your code and using Babel to transpile it before it's bundled by Parcel.

**Components in React**

- **Functional Components**: Simple functions that return React elements.
  - **Example**:
    ```javascript
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```
- **Composing Components**: Using components inside other components.
  - **Example**:
    ```javascript
    function App() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
    ```

**Specific JSX Scenarios**

- **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`**:
  - **`{TitleComponent}`**: Refers to the component itself.
  - **`{<TitleComponent/>}` or `{<TitleComponent></TitleComponent>}`**: Used to render the component.

### Coding Assignment

1. **Nested Header Element with `React.createElement`**

   ```javascript
   const element = React.createElement(
     "div",
     { className: "title" },
     React.createElement("h1", null, "Heading 1"),
     React.createElement("h2", null, "Heading 2"),
     React.createElement("h3", null, "Heading 3")
   );
   ```

2. **Same Element using JSX**

   ```jsx
   const element = (
     <div className="title">
       <h1>Heading 1</h1>
       <h2>Heading 2</h2>
       <h3>Heading 3</h3>
     </div>
   );
   ```

3. **Functional Component with JSX**

   ```jsx
   function Header() {
     return (
       <div className="title">
         <h1>Heading 1</h1>
         <h2>Heading 2</h2>
         <h3>Heading 3</h3>
       </div>
     );
   }
   ```

4. **Passing Attributes into JSX**

   ```jsx
   const element = <img src="logo.png" alt="Logo" />;
   ```

5. **Composition of Components**

   ```jsx
   function Welcome() {
     return <h1>Hello, world!</h1>;
   }

   function App() {
     return (
       <div>
         <Welcome />
       </div>
     );
   }
   ```

6. **Header Component from Scratch**

   ```jsx
   function Header() {
     return (
       <div className="header">
         <img src="logo.png" alt="Logo" className="logo" />
         <input type="text" placeholder="Search..." className="search-bar" />
         <img src="user-icon.png" alt="User" className="user-icon" />
       </div>
     );
   }
   ```

   ```css
   .header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px;
     background-color: #f0f0f0;
   }
   .logo {
     height: 40px;
   }
   .search-bar {
     flex-grow: 1;
     margin: 0 20px;
     padding: 5px;
   }
   .user-icon {
     height: 40px;
   }
   ```
