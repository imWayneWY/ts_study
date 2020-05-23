import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';


function App() {
  // let firstValue: string = 'Manny';
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2,3,56];
  // let firstValue: Array<string> = ['2','3','65'];
  
  // // tuple
  // let aTuple: [string, number] = ['Manny', 34];
  // // enum
  // enum Codes {first = 1, second};
  // // any
  // let firstName: any = 'Manny';
  // // void
  // const warning = ():void => {
  //   console.log('Warning');
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          The value {firstName} is of {typeof firstName} type!
        </p> */}
        <Message name='Manny' message='This is a simple message'/>
      </header>
    </div>
  );
}

export default App;
