import ProductCard from '../components/ProductCard'

const produtos = [
  {
    nome: 'Vaso Brisa',
    preco: '89,90',
    categoria: 'Casa',
    imagem: 'https://images.unsplash.com/photo-1612196808214-b8e1f7f7d2f4?auto=format&fit=crop&w=900&q=80',
  },
  {
    nome: 'Caderno Aurora',
    preco: '42,00',
    categoria: 'Papelaria',
    imagem: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
  },
  {
    nome: 'Caneca Terra',
    preco: '58,50',
    categoria: 'Cozinha',
    imagem: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
  },
]

function Home() {
  return (
    <section aria-labelledby="products-title">
      <div className="section-heading">
        <h2 id="products-title">Escolhas da semana</h2>
        <span>03 itens</span>
      </div>
      <div className="product-grid">
        {produtos.map((produto) => (
          <ProductCard key={produto.nome} {...produto} />
        ))}
      </div>
    </section>
  )
}

export default Home
