import React, { useState } from 'react';

const ProductGrid = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const todosProdutos = [
    {
      id: 1,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 2,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 3,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 4,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem:  'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 5,
      nome:  'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 6,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 7,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id:  8,
      nome: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 9,
      nome: 'Brucella Spp DNA',
      preco: 'R$ 669,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    // Página 2
    {
      id: 10,
      nome:  'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      preco: 'R$ 149,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 11,
      nome: 'pH Urinário',
      preco: 'R$ 35,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id:  12,
      nome: 'Progesterona Após Pregynil',
      preco: 'R$ 129,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 13,
      nome: 'Exame de Sangue Completo',
      preco: 'R$ 99,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 14,
      nome: 'Teste de Covid-19',
      preco: 'R$ 150,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 15,
      nome: 'Exame de Urina',
      preco: 'R$ 45,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 16,
      nome: 'Exame de Fezes',
      preco: 'R$ 40,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 17,
      nome: 'Hemograma Completo',
      preco: 'R$ 120,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 18,
      nome: 'Exame de Glicose',
      preco: 'R$ 80,00',
      imagem: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    }
  ];

  const produtosPorPagina = 9;
  const totalDePaginas = Math.ceil(todosProdutos.length / produtosPorPagina);

  const pegaProdutosAtuais = () => {
    const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
    const indiceFinal = indiceInicial + produtosPorPagina;
    return todosProdutos.slice(indiceInicial, indiceFinal);
  };

  return (
    <div className="flex-1 pl-6">
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        {pegaProdutosAtuais().map((produto) => (
          <div key={produto.id} className="border rounded flex flex-col items-start relative shadow-sm hover:shadow-md transition h-[250px]">
            <div className="w-full h-1/2 bg-white p-4 flex flex-col justify-center">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-4 h-4 object-contain mb-2"
              />
              <h3 className="text-lg text-center">{produto.nome}</h3>
            </div>
            <div className="w-full h-1/2 bg-gray-100 p-4 flex flex-col justify-between">
              <p className="text-gray-600 text-lg text-center">{produto.preco}</p>
              <div className="flex gap-2 justify-center">
                <button className="px-4 py-1.5 bg-white text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                  Informações
                </button>
                <button className="px-4 py-1.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center justify-center gap-2">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/72ddd775408239f5370d04922affcaa9.svg"
                    alt="Carrinho"
                    className="w-4 h-4"
                  />
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(totalDePaginas)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setPaginaAtual(idx + 1)}
            className={`px-4 py-2 border rounded cursor-pointer transition-colors duration-300 ${
              paginaAtual === idx + 1
                ? 'bg-sabin-red text-white border-sabin-red'
                : 'bg-white hover:bg-sabin-red hover:text-white border-gray-300'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;