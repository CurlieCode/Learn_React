# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# Props 
Props stand for "Properties." They are read-only components
It gives a way to pass data from one component to other components ( Parent to Child component)
<Component key = value />

# Prop Types 
a mechanism that ensures that the passed value is of correct datatype
age : propTypes.number

# Default Props 
Default values for props in case they are not passed from the parent component 
name : "Guest"


# Conditional Rendering 
It allows you to control what gets rendered in app based on certain conditions
(show, hide, change components)



# App Overview: Recipe Finder Application

Front end: Users will input ingredients, and the app will display recipes that match those ingredients. React will handle user inputs, API requests, and the display of recipe results.

Back end: A Node.js server will store recipes in memory (a JavaScript array) and respond to requests based on the ingredients provided by the user.





## Key Differences and Why You’d Use useRef:
# Avoiding Re-renders:

useState causes the component to re-render every time the state value is updated.
useRef does not trigger a re-render when its value changes.

# Why use useRef here?
If you're managing a value that doesn't need to trigger a UI update (like form input values before submission), useRef is more efficient because it doesn’t cause unnecessary re-renders, whereas useState would.
if you only need to store input field values temporarily (as in a form) and don't need to render them to the screen immediately, useRef is more efficient. You can grab the input values when the form is submitted, without rerendering every keystroke.

