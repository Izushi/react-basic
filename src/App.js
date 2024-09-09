import Article from "./components/Article";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import BadCounter from "./components/BadCounter";
import ToggleButton from "./components/ToggleButton";
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // return (
  //   <div>
  //     <Article
  //       title={'新・日本一分かりやすいReact入門'}
  //       content={'importとexportを使いこなそう'}
  //     />
  //     <TextInput />
  //     <Counter />
  //     <BadCounter />
  //     <ToggleButton />
  //   </div>
  // );
  const [name, setName] = useState('')
  const [id, setId] = useState('Izushi')
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <h1>GitHub User Info</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  )
}

export default App;
