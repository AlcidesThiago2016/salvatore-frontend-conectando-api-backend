import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {

  const [devmons, setDevmons] = useState([])

  async function fetchData(){

    const apiUrl = 'https://salvatore-backend-integrando-front-end.onrender.com/personagem'

    const response = await fetch(apiUrl)

    const data = await response.json()

    setDevmons(data)
    
  }

  useEffect(function (){
    fetchData()
  }, [])

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon){
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
    </>
  )
}

export default App
