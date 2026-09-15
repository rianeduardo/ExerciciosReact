import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="intro">
          <p className="eyebrow">Curadoria para o seu dia</p>
          <h1>Casa Nativa</h1>
          <p>Produtos simples, bonitos e feitos para deixar a rotina mais leve.</p>
        </section>
        <Home />
      </main>
    </div>
  )
}

export default App
