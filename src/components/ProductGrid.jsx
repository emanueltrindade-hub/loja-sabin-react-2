import React, { useState } from 'react';

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const allProducts = [
    {
      id: 1,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 2,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 3,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 4,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon:  'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 5,
      name:  'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 6,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 7,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id:  8,
      name: 'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 9,
      name: 'Brucella Spp DNA',
      price: 'R$ 669,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    // Página 2
    {
      id: 10,
      name:  'Pesquisa de Larvas - Baerman E Moraes (8ª Amostra)',
      price: 'R$ 149,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 11,
      name: 'pH Urinário',
      price: 'R$ 35,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id:  12,
      name: 'Progesterona Após Pregynil',
      price: 'R$ 129,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 13,
      name: 'Exame de Sangue Completo',
      price: 'R$ 99,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 14,
      name: 'Teste de Covid-19',
      price: 'R$ 150,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 15,
      name: 'Exame de Urina',
      price: 'R$ 45,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 16,
      name: 'Exame de Fezes',
      price: 'R$ 40,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 17,
      name: 'Hemograma Completo',
      price: 'R$ 120,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 18,
      name: 'Exame de Glicose',
      price: 'R$ 80,00',
      icon: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    }
  ];

  const productsPerPage = 9;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return allProducts.slice(startIndex, endIndex);
  };

  return (
    <div className="flex-1 pl-6">
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        {getCurrentProducts().map((product) => (
          <div key={product.id} className="border rounded flex flex-col items-start relative shadow-sm hover:shadow-md transition h-[250px]">
            <div className="w-full h-1/2 bg-white flex items-center justify-center">
              <img
                src={product.icon}
                alt={product.name}
                className="w-4 h-4 object-contain"
              />
            </div>
            <div className="w-full h-1/2 bg-gray-100 p-4 flex flex-col justify-between">
              <h3 className="text-lg mb-2">{product.name}</h3>
              <div className="flex flex-col mt-auto w-full">
                <p className="text-gray-600 mb-4 text-lg">{product.price}</p>
                <div className="flex gap-2">
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
          </div>
        ))}
      </div>

     
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 border rounded cursor-pointer transition-colors duration-300 ${
              currentPage === idx + 1
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