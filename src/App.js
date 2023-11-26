import React from 'react';
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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Daniel'}>
        <ChannelContext.Provider value = {'Onsombi'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>

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
