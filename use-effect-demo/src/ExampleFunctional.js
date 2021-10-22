import React from 'react'

/**
 * a functional component that has componentDidMount, componentDidUpdate, 
 * and componentWillUnmount combined within a useEffect call
 */
export default function ExampleFunctional() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // componentDidMount + componentDidUpdate functionality
        document.title = `You clicked ${count} times`; 

        // componentWillUnmount functionality
        return function cleanup() {
            document.title = `You clicked ${count} times`; 
            alert("bye")
        }
    }, [count]) //runs the function when count CHANGES

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
        </div>
    );
}