### What is Emmet?
- A plugin for web development.
- Helps write HTML and CSS faster with abbreviations.
- Expands short abbreviations into complete code snippets.
- Supported by many popular code editors.
- Customizable and supports syntax highlighting and formatting.

### Difference between a Library and Framework?
- **Library**:
  - Developer calls the library’s functions.
  - Used for specific tasks.
  - Modular and can be included as needed.
  - Example: jQuery.
- **Framework**:
  - Framework calls the developer’s code.
  - Provides a comprehensive solution for building applications.
  - Enforces structure and conventions.
  - Example: Angular.

### What is CDN? Why do we use it?
- **CDN (Content Delivery Network)**:
  - System of distributed servers delivering web content based on geographic location.
- **Benefits**:
  - Faster loading times by serving content from the nearest server.
  - Handles more visitors and traffic spikes.
  - Increases reliability with redundancy and failover.
  - Provides protection against DDoS attacks.
  - Offers global reach for consistent user experiences.
  - Reduces bandwidth costs and infrastructure needs.

### Why is React known as React?
- Named for its ability to quickly **react** to data changes.
- Builds dynamic, interactive UIs that update efficiently.
- Uses a component-based architecture to manage UI updates.

### What is crossorigin in script tag?
- An attribute to handle cross-origin requests for scripts.
- **Values**:
  - `anonymous`: No credentials sent with the request.
  - `use-credentials`: Credentials sent with the request.
- Example:
  ```html
  <script src="https://example.com/script.js" crossorigin="anonymous"></script>
  ```

### What is difference between React and ReactDOM?
- **React**:
  - For building and defining UI components.
  - Manages how components interact.
- **ReactDOM**:
  - Renders React components to the web page.
  - Handles updates to the DOM.

### What is difference between react.development.js and react.production.js files via CDN?
- **react.development.js**:
  - Used during development.
  - Includes warnings and error messages for debugging.
  - Larger file size.
- **react.production.js**:
  - Used in production.
  - Stripped of development-only code.
  - Optimized for performance and smaller file size.

### What is async and defer?
- **async**:
  - Loads the script asynchronously.
  - Executes as soon as it's downloaded.
  - Good for independent scripts.
  - Example:
    ```html
    <script src="script.js" async></script>
    ```
- **defer**:
  - Loads the script asynchronously.
  - Executes after the HTML is fully parsed.
  - Good for scripts that depend on the DOM.
  - Example:
    ```html
    <script src="script.js" defer></script>
    ```
