import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const produtos = [
  {
    nome: 'Caneta Montblanc Meisterstück LeGrand',
    preco: '7100,00',
    categoria: 'Papelaria',
    descricao: 'Caneta elegante para momentos especiais.',
    destaque: true,
    oferta: false,
    estoque: true,
    imagem: 'https://montblancbr.vtexassets.com/arquivos/ids/174466/caneta-tinteiro-meisterstuck-legrand-revestida-a-platina-f-132442_3.jpg?v=638574399382270000',
  },
  {
    nome: 'Caneta Bic Preta',
    preco: '1,50',
    categoria: 'Papelaria',
    descricao: 'Praticidade para escrever todos os dias.',
    destaque: false,
    oferta: true,
    estoque: true,
    imagem: 'https://framepapelaria.cdn.magazord.com.br/img/2024/06/produto/23482/design-sem-nome-2024-06-15t115434-680.png?ims=fit-in/800x800/filters:fill(white)',
  },
  {
    nome: 'Caneca Polimero Branca 325ml',
    preco: '6,00',
    categoria: 'Cozinha',
    descricao: 'Uma caneca leve para sua rotina.',
    destaque: false,
    oferta: false,
    estoque: true,
    imagem: 'https://cdn.awsli.com.br/800x800/866/866032/produto/34846525/caneca-de-polimero-9schkj519f.png',
  },
  {
    nome: 'Caderno de Anotações',
    preco: '24,90',
    categoria: 'Papelaria',
    descricao: 'Páginas para organizar ideias e planos.',
    destaque: false,
    oferta: true,
    estoque: true,
    imagem: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  },
  {
    nome: 'Garrafa de Vidro',
    preco: '39,90',
    categoria: 'Cozinha',
    descricao: 'Design simples para acompanhar seu dia.',
    destaque: false,
    oferta: false,
    estoque: false,
    imagem: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
  },
]

function Home() {
  const [carrinho, setCarrinho] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const produtosDisponiveis = produtos.filter((produto) => produto.estoque)

  function adicionarAoCarrinho(produto) {
    setCarrinho((itens) => [...itens, produto])
  }

  function alternarFavorito(produto) {
    setFavoritos((itens) =>
      itens.includes(produto)
        ? itens.filter((item) => item !== produto)
        : [...itens, produto],
    )
  }

  return (
    <section>
      <div className="section-heading">
        <h2 id="products-title">Escolhas da semana</h2>
        <span>{carrinho.length} no carrinho | {favoritos.length} favoritos</span>
      </div>
      {produtosDisponiveis.length === 0 && (
        <p className="empty-message">Não há produtos disponíveis no momento.</p>
      )}
      <div className="product-grid">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.nome}
            {...produto}
            favoritado={favoritos.includes(produto)}
            onAdicionar={() => adicionarAoCarrinho(produto)}
            onFavoritar={() => alternarFavorito(produto)}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
