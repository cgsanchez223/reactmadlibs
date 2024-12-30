### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library for building user interfaces. It is a front end library. It can be used along side JavaScript to create interactive UI (user interface) for web applications.

- What is Babel?
Babel is a JavaScript transcompiler that can convert ECMAScript 2015+ code into backwards compatible JS code that can run older JS engines.

- What is JSX?
JSX is JavaScriptXML. It is an XML extension for JS. Can be used for enabling HTML type code in JS files.

- How is a Component created in React?
A component can be defined as either the JavaScript class or function. React can then extend that component and use its own applications.

- What are some difference between state and props?
State represents mutable data, or data that can change in a specific component. A prop is immutable data that is passed from a parent component to a child.

- What does "downward data flow" refer to in React?
Downward data flow refers to how information is read in React. Typically you have parent components passing down information to child components with the help of props.

- What is a controlled component?
A controlled component is a form element where the value is measured by the React state. React can make it so that changes to the component will completely re-render the component each time.

- What is an uncontrolled component?
Uncontrolled component is not directly measured by the React state. It is controlled by the DOM component that is originated from.

- What is the purpose of the `key` prop when rendering a list of components?
When creating a list of components in React, a key prop is used to identify changes, additions, or removals made.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
An array can cause issues with the order of the components when updating the list.

- Describe useEffect.  What use cases is it used for in React components?
In React, useEffect is a hook that allows for executing side effects within functional components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is also a hook in React. useEffect creates mutable objects that can reference DOM elements or values without re-rendering everything.

- When would you use a ref? When wouldn't you use one?
You would use a ref when working with a DOM element, or when you are maintaining a mutable value and do not want to re-render everytime.

- What is a custom hook in React? When would you want to write one?
A custom hook in React is something you can custom make. You will want to write one when you need to reuse logic across multiple components inside a React application.