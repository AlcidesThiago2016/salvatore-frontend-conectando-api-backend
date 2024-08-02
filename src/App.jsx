import './App.css'
import Card from './components/Card/Card'

function App() {

  /* const java = {
    nome: 'Java',
    imagem: 'https://salvatore.academy/devmon/1_java.png',
    evoluiPara: 'Kotlin'
  }

  const kotlin = {
    nome: 'Kotlin',
    imagem: 'https://salvatore.academy/devmon/2_kotlin.png',
    evoluiPara: 'Android'
  }

  const android = {
    nome: 'Android',
    imagem: 'https://salvatore.academy/devmon/3_android.png'
  }

  const c = {
    nome: 'C',
    imagem: 'https://salvatore.academy/devmon/4_c.png',
    evoluiPara: 'C++'
  }

  const cplusplus = {
    nome: 'C++',
    imagem: 'https://salvatore.academy/devmon/5_cpp.png',
    evoluiPara: 'C#'
  }


  const devmons = [java, kotlin, android, c, cplusplus]
  */

  const devmons = []

  async function fetchData(){

    const apiUrl = 'https://salvatore-backend-integrando-front-end.onrender.com/personagem'

    const response = await fetch(apiUrl)

    const data = await response.json()

    console.log(45, data)
  }

  fetchData()

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
