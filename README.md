# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Summary notes:
Use of state hooks simplifies the need for class componenets and the complications that come with the use of 'this' keyword.
For instance, with use of the class component, one has to create a constructor to initialize count, and create another function to increament count using the useState method.

However, with the use of hooks, the code is much more simplified and with just one line of code and the array destructuring concept, this can still be achieved. below is an example:


function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++)
        {
            setCount(count + 1)
        }
    }

  return (
    <div>  
        Count: {count} <br></br>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

The above approach is however not safe. especially when increamenting the count by five, the for loop count is never taken into consideration. Instead of calling the setcount as above, call it with a function that that has access to the previous count.

A state Variable can be a string a number, boolean, object or even an array and can use them based on your requirements: const [name, setName] = useState({firstName: '', lastName: ''})

When working with objects, there is need also to ensure that the other variables remain intact while modifying any of the elements within the object. Consider:
function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <form>
        <input 
            type='text' 
            value={name.firstName} 
            onChange={e => setName({firstName: e.target.value})}
        />
        <input 
            type='text' 
            value={name.lastName} 
            onChange={e => setName({lastName: e.target.value})}
        />

        <h2>Your first name is - {name.firstName} </h2>
        <h2>Your last name name is - {name.lastName} </h2>
    </form>
  )
}

when the first name is changed, the last name is cleared and vice versa.
This is becuase useState does not automatically update the object. This is the difference between use state and set state. setState will merge the state whereas useState won't, you have to do it manually using the spread operator ... name as:


function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <form>
        <input 
            type='text' 
            value={name.firstName} 
            onChange={e => setName({...name, firstName: e.target.value})}
        />
        <input 
            type='text' 
            value={name.lastName} 
            onChange={e => setName({...name, lastName: e.target.value})}
        />

        <h2>Your first name is - {name.firstName} </h2>
        <h2>Your last name name is - {name.lastName} </h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

State hook summary:
1. The useState hook lets you add state to functional components
2. in classes, the state is always an object while the useState hook, the state doesn't have to be an object. 
3. The useState hook returns an array with 2 elements, the first being the current value of the state,and the  second element is a state setter function.
4. New state value depends ont he previous state value? you can pass a function to the setter function.
5. When dealing with objects or arrays, alwaays make sure to spread your state variable and then call the setter function.


