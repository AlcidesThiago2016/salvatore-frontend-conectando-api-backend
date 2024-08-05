import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [devmons, setDevmons] = useState([])

  async function fetchData(){

    const apiUrl = 'https://salvatore-backend-integrando-front-end.onrender.com/personagem'

    const response = await fetch(apiUrl).catch(function (error) {
      console.error('Erro ao chamar endopoint /personagem', error)
      toast.error('Error ao carregar a lista de Devmon.')
    })

    if (response.ok){
      const data = await response.json()

      setDevmons(data)
    }else {
      toast.error('Erro ao carregar lista de Devmon.')
    }
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
      <ToastContainer />
    </>
  )
}

export default App
