Answer the following questions below:

- What is React? When and why would you use it?
React is a front end JavaScript library that was developed by Facebook and is now free and open source. It is a very high level programming language and is concerned with state management and rendering to the DOM.

- What is Babel?
It is a javascript compiler

- What is JSX?
An extention of javascript and stands for Javascript XML. Allows
programmers to write HTML in react.

- How is a Component created in React?
Much like a function. The component is written as an 
extension to JS, and then the component must be rendered

- What are some difference between state and props?
props are properties and can be used to pass date from one compoinent to another.
State is changaeble and is local only to the component.

- What does "downward data flow" refer to in React?
unidirectional flow from top to bottom giving better control to the programmer.

- What is a controlled component?
a controlled component is handled by a React Component by writing the event handler for state updates. 

- What is an uncontrolled component?
Data that is handled by the DOM itself. values are set by the user.

- What is the purpose of the `key` prop when rendering a list of components?
A key prop keeps track of different elements. If you remove, changed or hid things.
The key prop keys the data in sync on what react is rendering. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
react can get confused when something is changed in the array, or if something is 
added or deleted. It should only be used as a last resort. 

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a built in hook from React. It can be used for "side effect"
examples of side effects are fetching data, starting a timer, and 
manually changing the DOM. it will run after the first render, and all rerenders.
A good use case is when we want to use a callback after each render. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useref is a hook that allows the eprogrammer to persist values between renders.
It is used to store mutable (changeable) values.
a change in ref value or any mutations to the ref value does not cause a rerender. 

- When would you use a ref? When wouldn't you use one?
accessing underlying DOM elements and setting up timers are a good use for ref.
We should not use useRef to control the state of the DOM. we want to do that 
through react as much as possible. 

- What is a custom hook in React? When would you want to write one?
Custom hooks are hooks created to do a certain task such as abstract logic.
or handling repeated tasks. we would want to write our own if we want to 
toggle something on or off.
