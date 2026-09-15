import './App.css'
import Cabecalho from './components/Cabecalho'
import Inicio from './pages/Inicio'

function App() {
  return (
    <div className="aplicativo">
      <Cabecalho />
      <main>
        <section className="introducao">
          <p className="rotulo">Curadoria para o seu dia</p>
          <h1>Casa Nativa</h1>
          <p>Produtos gerais, bonitos e funcionais.</p>
        </section>
        <Inicio />
      </main>
    </div>
  )
}

export default App
