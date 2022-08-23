import React,{Fragment} from 'react';
import './App.css';

// we call the components that we gonna use
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
   <Fragment>
    <div className='container'>
      <InputTodo/>
      <ListTodo/>
    </div>
   </Fragment>
  );
}

export default App;
