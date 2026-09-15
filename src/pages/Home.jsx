import ProductCard from '../components/ProductCard'

const produtos = [
  {
    nome: 'Caneta Montblanc Meisterstück LeGrand',
    preco: '7100,00',
    categoria: 'Papelaria',
    imagem: 'https://montblancbr.vtexassets.com/arquivos/ids/174466/caneta-tinteiro-meisterstuck-legrand-revestida-a-platina-f-132442_3.jpg?v=638574399382270000',
  },
  {
    nome: 'Caneta Bic Preta',
    preco: '1,50',
    categoria: 'Papelaria',
    imagem: 'https://framepapelaria.cdn.magazord.com.br/img/2024/06/produto/23482/design-sem-nome-2024-06-15t115434-680.png?ims=fit-in/800x800/filters:fill(white)',
  },
  {
    nome: 'Caneca Polimero Branca 325ml',
    preco: '6,00',
    categoria: 'Cozinha',
    imagem: 'https://cdn.awsli.com.br/800x800/866/866032/produto/34846525/caneca-de-polimero-9schkj519f.png',
  },
]

function Home() {
  return (
    <section>
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
