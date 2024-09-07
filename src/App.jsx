
//useEffect -> tells react to do some code when the component rerenders, the component mounts, the state of a value changes 

// useEffect(function, [dependencies])

/* 
1. useEffect(() => {})               Runs after every rerender
2. useEffect(() => {}, [])           Runs only on mount
3. useEffect(() => {}, [value])      Runs on mount + when value changes 
*/


/*

Event Listeners , DOM Manipulation, Real time updates, Fetching data from api , clean up when a component unmounts
*/
import UseEffectDemo from "./useEffectDemo";

function App() {
  return <UseEffectDemo/>
}

export default App;
