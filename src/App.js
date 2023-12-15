import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import ClassCounterOne from './Components/ClassCounterOne';
import ClassMouse from './Components/ClassMouse';
import HookCounter from './Components/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterOne from './Components/HookCounterOne';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCounterTwo';
import HookMouse from './Components/HookMouse';
import IntervalClassCounter from './Components/IntervalClassCounter';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ReducerComponentA from './Components/ReducerComponentA';
import ReducerComponentB from './Components/ReducerComponentB';
import ReducerComponentC from './Components/ReducerComponentC';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
import ClassTimer from './Components/ClassTimer';
import HookTimer from './Components/HookTimer';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';
import CustomHookCounterOne from './Components/CustomHookCounterOne';
import CustomHookCounterTwo from './Components/CustomHookCounterTwo';
import CustomHookUserForm from './Components/CustomHookUserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext =  React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  //Example of useReducer with useContext for global state management:
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CustomHookUserForm/>
      {/* <CustomHookCounterOne/>
      <CustomHookCounterTwo/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <HookTimer/> */}
      {/* <ClassTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne/> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ReducerComponentA/>
        <ReducerComponentB/>
        <ReducerComponentC/>
      </CountContext.Provider> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
      
      {/* <UserContext.Provider value={'Daniel'}>
        <ChannelContext.Provider value = {'Onsombi'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching /> */}
      {/* <IntervalHookCounter />
      <IntervalClassCounter/> */}

      {/* <MouseContainer/> */}
      {/* <HookMouse />
      <ClassMouse /> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounterOne/> */}

      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
