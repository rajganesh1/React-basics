/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css';
import  Greet  from './components/Greet';
import React, { Component,useReducer } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
//import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
//import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HClassCounter from './components/HClassCounter';
import HHookCounter from './components/HHookCounter';
import HHookCounter2 from './components/HHookCounter2';
import HHookCounter3 from './components/HHookCounter3';
import HHookCounter4 from './components/HHookCounter4';
import HHookCounter5 from './components/HHookCounter5';
import HClassMouse from './HClassMouse';
import HHooksMouse from './components/HHooksMouse';
import HMouseContainer from './components/HMouseContainer';
import HIntervalClassCounter from './components/HIntervalClassCounter';
import HHookIntervalCounter from './components/HHookIntervalCounter';
import HDataFetching from './components/HDataFetching';
import HComponentC from './components/HComponentC';
import HCounter7 from './components/HCounter7';
import HCounter8 from './components/HCounter8';
import HCounter9 from './components/HCounter9';
import ComponentA from './context-reducer/ComponentA';
import ComponentB from './context-reducer/ComponentB';
import ComponentC from './context-reducer/ComponentC';
import DataFetching1 from './context-reducer/DataFetching1';
import DataFetching2 from './context-reducer/DataFetching2';
import ParentComp from './useCallBack/ParentComp';
import Counter11 from './useCallBack/Counter11';
import FocusInput12 from './useCallBack/FocusInput12';
import ClassTimer from './useCallBack/ClassTimer';
import HookTimer from './useCallBack/HookTimer';
import DocTitle1 from './customHooks/DocTitle1';
import DocTitle2 from './customHooks/DocTitle2';
import Counter12 from './customHooks/Counter12';
import Counter13 from './customHooks/Counter13';
import UserForm from './customHooks/UserForm';
import UseState from './Rendering/UseState/UseState';
import UseReducer from './Rendering/UseReducer/UseReducer';
import ObjectUseState from './Rendering/ImmutableState/ObjectUseState';
import ArrayUseState from './Rendering/ImmutableState/ArrayUseState';
import ArrayUseStateReducer from './Rendering/ImmutableState/ArrayUseStateReducer';
import Parent from './Rendering/ParentChild/Parent';
import Parent1 from './Rendering/Optimization/Parent1';
import Child1 from './Rendering/Optimization/Child1';
import GrandParent from './Rendering/Optimization/GrandParent';
import Parent2 from './Rendering/Optimization/Parent2';
import Parent3 from './Rendering/IncorrectOptimization/Parent3';
import Parent4 from './Rendering/IncorrectOptimization/Parent4';
import ContextParent from './Rendering/Context/ContextParent';
import { ChildA } from './Rendering/Context/ContextChild';

export const  UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state,action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  // state = {
  //   counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 }
  //   ],
  //   tags: ['tag1','tag2','tag3']
  // }
  
  //  add=()=> {
  //     console.log('touched');
  //  }
  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index].value++;
  //   this.setState({ counters });
  // }
  // renderTags=()=> {
  //   return (<ul>{this.state.tags.map((tag) => <li>{tag}</li>)}</ul>)
  // }

    const [count, dispatch] = useReducer(reducer, initialState);

  //render() {
  return (
      <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
      <div className="App">
        <ContextParent >
          <ChildA />
        </ContextParent>


        {/* <Parent4 /> */}
        {/* <Parent3 /> */}
        {/* <Parent2 /> */}
        {/* <GrandParent /> */}
        {/* <Parent1><Child1/></Parent1> */}
        {/* <ArrayUseStateReducer /> */}
        {/* <ArrayUseState /> */}
        {/* <ObjectUseState /> */}
        {/* <UseState /> */}
        {/* <UseReducer /> */}






        {/* <UserForm />
        <Counter12 />
        <br></br>
        <br></br>
        <Counter13 /> */}
        {/* <DocTitle1 />
        <DocTitle2 />
        <FocusInput12 />
        <ClassTimer />
        <HookTimer /> */}
        {/* <ParentComp /> */}
        {/* <Counter11 /> */}
        {/* <DataFetching1 />
        <DataFetching2 /> */}
        {/* <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        {/* <HCounter9 /> */}
        {/* <HCounter7 />
        <HCounter8 /> */}
       {/*} <UserContext.Provider value={'Ganesh'}>
          <ChannelContext.Provider value={'ZoomInfo'}>
            <HComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>



        <br></br>
        <HDataFetching />
        <HIntervalClassCounter />
        <HHookIntervalCounter />
        <HMouseContainer />
        {/*<HHooksMouse />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HHookCounter5 />
        <HHookCounter4 />
        <HHookCounter3 />
        <br></br>
        <br></br>
        <br></br>
        <HClassCounter />
        {/*<HHookCounter />
        <HHookCounter2 />*/}
        {/*<PostForm />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <PostList />
        <UserProvider value='Raj Ganesh'>
          <ComponentC />
        </UserProvider>
        <Counter2 render={(count,incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount} />}/>
        <Counter2 render={(count,incrementCount)=> <HoverCounter2 count={count} incrementCount={incrementCount}/>}/>
        {/*<ClickCounter2 />
        <HoverCounter2 />
    <User render={(isLoggedIn)=>isLoggedIn? 'Raj' :'Ganesh'} />
        <br></br>
        <br></br>
        <br></br>
        <ClickCounter name='Raj'/>
        <HoverCounter name='Raj' />
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker" />
      </ErrorBoundary>
        
        <PortalDemo />
        <FRParentInput />
        <br></br>
        <br></br>
        <FocusInput />
        <RefsDemo />
        <ParentComp />
        <Table />
        <FragmentDemo />
        <h3 className='error'>Error</h3>
        <h3 className={styles.success}>Success</h3>
        <header className="App-header">
          <LifecycleA />
          <Form />
          <Inline />
          <StyleSheet primary={true}/>
          <NameList/>
          <UserGreeting />
          <ParentComponent/>
          <EventBind />
          <FunctionClick />
          <ClassClick />
          {/*{this.renderTags()}
          {this.state.counters.map((counter)=>
            <Greet name='Ganesh'
              key={counter.id}
              onAdd={this.add}
              onIncrement={this.handleIncrement}
              counter={counter} />)}
          <Message />
          <Counter />
          <Welcome/>
        </header>*/}
      </div> 
      </CountContext.Provider>
    );
  //}
}

export default App;


/*

stateless functional component

function Greet(props){
  return <h1>{props.name}</h1>
}


stateful class component

class Greet extends Component {
  render(){
    return (<h1>{this.props.name}</h1>);
  }
}



*/
