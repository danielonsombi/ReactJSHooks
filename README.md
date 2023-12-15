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

With useEffect, we can also Mimic the componentWillUnmount life cycle hook.
If the event listener above had a toggle button to either show or hide it, even when hidden the event listener will still be listening to the mousemove. This should not be the case. If the component is hidden, all it is subscribers and listeners should be unmounted.

In componentWillUnmount we could do this by removing the listener:
 componentWillUnmount() {
  window.removeEventListener('mousemove', this.logMousePosition)
 }

 we can mic this life cycle functionality in useEffect by using a return function in the useEffect method as:

 useEffect(() => {
  window.addEventListener('mousemove', logMousePosition)

  return () => {
    window.removeEventListener('mousemove', logMousePosition)
  }
 }, [])


With use effect, one can at times run into incorrect dependencies. For instance, the useEffect can be used for both componentDidMount and componentDidUnmount. This can have a side effect on a timer functionality directly translated from a class component. Consider:


class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}


If directly translated using hooks then it becomes:

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, []) 
  return (
    <div>
      {count}
    </div>
  )
}


However the second will not watch for any changes for it will execute ones. The counter will therefore stop at 1 and not increment. We should therefore figure out a way to make react watch out for any changes. The count should/must therefore be added as a dependency that useEffect should watch out for. The correct useEffect function should therefore be:

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count]) 

    The same can also be achieved without using a dependency count. By use of the prevCount = prevCount+1 on the tick method.

    const tick = () => {
        setCount(prevCount = prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

With this alway think through the problme before adding an empty dependency.
sometime you may want to call a function from useEffect, it is always best practice to create the function within use effect. This will allow the function use the props without necessarily having to pass them from useEffect to a function created outside the useEffect method.

    useEffect(() => {
      function doSomething(){
        console.log(someProp)
      }
      doSomething()

      const interval = setInterval(tick, 1000)

      return () => {
          clearInterval(interval)
      }
    }, [someProp])

Such an approach will help you remember of some props that must be considered/should be added as dependencies.

You can have multiple useEffect methods within the same React function but it is not possible to have multiple life cycle methods of the same kind within the same class. This allows you to group together related code and not have separate functionalities within the same useEffect method. 

We can then use the useEffect method with axios library to pull data from an endpoint as:
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
              console.log(res)
              setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  },[])

  useContext:
  On class component, there is need to nest several contexts to pass down a value from a parent down to its children. This make the code not easy to read e.g

  import {UserContect, ChannelContext} from '../app'

function ComponentF()
{
  return(
    <div>
      <UserContext.Consumer>
        {
          User => {
            return (
              <ChannelContext.Consumer>
                {
                  Channel => {
                    <div>
                      User context value {user}, channel context value {channel}
                    </div>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

The context hook helps simplify this.
To consume a context:
1. import useContext from react
2. import the necessary context
3. call the useContext function passing in the contexts as its parameters then assign all the values to variable that can be called in the JSX

The code is reduced significantly to:

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
      {/* <ComponentF/> */}
      User - {user} Channel - {channel}
    </div>
  )
}

useReducers Hook:
A useReducer is a hook used for state management. It is an alternative to useState.
useState is built using useReducer.

What is a reducer?
Some of the reducers in vanilla javascript include, foreach, map and reduce.
The reduce() method executes a reducer function on each element of the array, resulting in a single output value e.g.,

const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
//expected output: 10

//5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); //gets the sum total of the first parameter and adds it to the second parameter.
//expected output: 15

There is a huge similarity between the reduce and useReducer method:

Reduce in Javascript                                       useReducer in React
array.reduce(reducer, initialValue)                   useReducer(reducer, initialState)
singleValue = reducer(accumulater,itemValue)          newState = reducer(currentState, action)
reduce method returns a single value                  useReducer returns a pair of values [newState, dispatch]


UseReduce can be used with decimals and strings but also with objects. See CounterOne and CounterTwo implementations.
Other than using state and action as objects to do multiple counters within the same functional component (Counter two), if working with local state manegement, you can instead use multiple useReducers to within the same component when not working with variables to be accessed globally.

useReducer with useContext:
useReducer - used in local state management.
To share state between components (Global state amanegement) you can use the useReducer  + useContext.
To use this, you need to create the reducer function on the app.js file then have the count as part of the JSX.
The dispatch functionality will however be implemented in the nested component. This will make use of the context api.


useState vs useReducer:
Scenario                              useState                    useReducer
Type of state                       Number, String,Boolean     Object or Array
Number of State transitions         one or two                 Too Many (Best since can manage them centrally)
Related state transitions?          No                         Yes 
Business Logic                      No business logic          Complex business logic
Local vs global                     Local                      Global


useReducer makes it easier to reason through code since all the related code and transitions are kept together as opposed to the useState hook.
useReducer makes it easier to use context with one dispatch state that can be used with global variables that should be accessed by other components in the tree.

UseCallback Hook.
If one creates several components with one as the parent Component and the rested called within it, everytime a button on the components is clicked, all the components are re-rendered. Such is an indication that the code is not optimized. With lots of components and updating one having all the others rerender, you will face perfomance challenges. The system should be in a way that only the updated component should be rerendered.
The optimization can be achieved using the React.Memo - This is a HOC that will prevent a functional component from being rerendered if its props do not change.
You can wrap your ccomponents around the react.memo prop to prevent the component from rerendering unless there is a change as React.memo(Title) or React.memo(Count)
With React.memo, some of the component might not be rendered but not all of them. The intention is to only render the changed components.If the button being clicked, all the functions within the parent component are rerendered each time the parent component rerenders. We therefore need to consider reference equality. The function before the rerender is different from the function after the rerender and since the function is a prop, React.memo says the prop has changed and won't prevent the rerender.

To prevent this feature, we use the:
=> useCallback hook - This is a hook that will return a memorized version of the callback function that only changes if one of the dependencies has changed. It will cache the function and return it if no changes in dependencies. This prevents unnecessary renders. It is usefull when passing callbacks (functions as props) to optimized child components that rely on reference equality to prevent unnecessary renders.t
The syntax is as:
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

Why not use it every single time to ensure our code is optimized? With every line of code written, there is a cost attached in terms of memory allocation both for the created function and the array call.

const dispense = candy => {
  setCandies(allCandies => allCandies.filter(c => c !== candy))
}

and 

const dispense = candy => {
  setCandies(allCandies => allCandies.filter(c => c !== candy))
}
const dispenseCallback = React.useCallback(dispense, [])


As much as the useCallback prevents rerenders, the first is executed faster than the second one because of the lines of code and the memory reserved for the empty array. hence a better performance for the first and not the second.

Also, on the second render of the component, the original `dispense` function gets garbage collected (freeing up memory space) and then a new one is created. However, with the useCallback, the original `dispense` function won't get collected and a new one created , so you're worse-off from a memory perspective as well. Reason, it keep copies of old velues to return in the event we get the same dependencies as given previously.
Checkout :
  https://kentcdodds.com/blog/usememo-and-usecallback

useMemo Hook:
Can also be used to optimize perfomance.
At times you may have a function that is not so good with perfomance. Could be fetching thousands of records, mapping the array, filtering and sorting an array. This makes the rerendering really slow. and this is likely to affect the other components that are rerendered.

Consider:
import React, { useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = () => {
        //Try to make the response slower through a long array of entries:
        let i = 0;
        while(i < 20000000) i++
        return counterOne % 2 === 0
    }
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven() ? ' Even ' : ' Odd '}</span>
      </div>
      <div><button onClick={incrementTwo}>Count two - {counterTwo}</button></div>
    </div>
  )
}

export default Counter


We need to tell react not to check if counter one is even or odd when changing counter two values. This is where useMemo hook comes in to avoid expensive calculations on every render. This is done by first importing it then use it on the function to be recomputed.

This is kinda similar to the useCallback hook. The difference is, useCallback caches the provides function instance itself whereas useMomo caches the result of the invoked function.

useRef Hook:
Used to manipulate the DOM. e.g., to focus on a field.












