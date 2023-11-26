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

useState hook summary:
1. The useState hook lets you add state to functional components
2. in classes, the state is always an object while the useState hook, the state doesn't have to be an object. 
3. The useState hook returns an array with 2 elements, the first being the current value of the state,and the  second element is a state setter function.
4. New state value depends ont he previous state value? you can pass a function to the setter function.
5. When dealing with objects or arrays, alwaays make sure to spread your state variable and then call the setter function.


UseEffect Hook:
During development say when updating the header with the current counter value or calling APIs, with class components we use the life cycle methods like componentDidMount and ComponentDidUpdate. We will have the initialization done once using the componentDidMount and to update the value we use the componentDidMount method to have it incremented.
To update the title, we write the code twice, i.e., initialize on componentDidMount and update upsing the componentDidUpdate. 
For a timer, the code will also be added to the componentDidMount and componentWillUnmount to initialize the time and destroy it respectively.

Code for timer and updating the DOM which are completely unrelated are put together. But it would be nice to only group related code and also not to repeat code. This is what the effectHook helps us to achieve.
Therefore, three life cycle methods can be handled by the useEffect hook:
1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

The effect Hook lets you perfom side effects in functional components.

The useEffect is a function that gets executed after every render of the component. It runs after the first render and every other render/update.
It is accessed within the component and with this we can access its props without having to write any extra code.

With the class counter, whenever you change a value, the componentDidMount is called and keep and thus calling unnecessary code. Consider:
class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: '',
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate = (prevProps, prevState) => {
      console.log('Updatingdocumet Title!')
        document.title = `Clicked ${this.state.count} times`
    }
    
  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={e => {
          this.setState({
            name: e.target.value
          })
        }}/>
        <button onClick={() => this.setState({ count: this.state.count + 1})}> Clicked {this.state.count} times </button>
      </div>
    )
  }
}

Changing the componetDidUpdate code to this:
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.count !== this.state.count) {
      console.log('Updatingdocumet Title!')
      document.title = `Clicked ${this.state.count} times` 
    }
  }

will conditionally update the title when the count changes.

When the name is changed, console.log('Updatingdocumet Title!') gets logged every time which is unnecessary. On a class component you can use the prevProps and prevState parameters to control whether the update will be made or not.

The same can be achieved using the useEffect hook:
function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updated the title!')
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

by default, any change will execute the useEffect function. However, conditional effects can be achieved using the second parameter of the useEffects function that uses an array with props which can be checked and if they change the effect is then executed.

With componentDidMount, you can create an event once and it can be executed several times e.g
class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }

    logMousePosition = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    
    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }
  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

the same can also be achieved using useEffects:
function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect called')
        window.addEventListener('mousemove',logMousePosition)
    })

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

By default, the useEffect Called will be logged multiple times. to mimic the componentDidMount which is only called once, we pass an empty array to the useEffect method:

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect called')
        window.addEventListener('mousemove',logMousePosition)
    }, [])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

With this the function and the 'useEffect called' will be called once.







