import './App.css';
import { useEffect, useState } from 'react';

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello world')
//   }, 5000 )
// });

// myPromise
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

function App() {

  const [message, setMessage] = useState('penis')

  useEffect(() => {


    // const myPromise = new Promise((res, rej)=> {
    //   setTimeout(()=>{
    //     res('Cau Pasule!')
    //   }, 100)
    // })

    // myPromise.then(res => {setMessage(res)})
    fetch('http://localhost:8000/')
      .then((res) => {
        console.log(res)
      })

  }, [])


  return (
    <div className="App">
      <h1>{message}</h1>
      <input type="text" placeholder={'penis'}></input>
    </div>
  );
}

export default App;
