import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/form"
import Display from "./components/display"

function App() {

  const [results, setResults] = React.useState({})

  const url = "http://taco-randomizer.herokuapp.com/random/?full-tack=true"

  const getResults = async  (searchterm) => {
    const response = await fetch(url + searchterm)
    const data = await response.json()
    setResults(data)
  }

  React.useEffect(()=> {
    const tacos = ["Chopped Pork", "onion"]

    const index = Math.floor(Math.random() * tacos.length )

    getResults (tacos[index]) 
  }, [])

  return (
<>
<Form search = {getResults} />  
<Display taco = {results} />

</>
  )}

export default App;
