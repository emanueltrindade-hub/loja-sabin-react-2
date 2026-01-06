import React from 'react';

const PopularServices = () => {
  return (
    <>
      <section id="serviçosMaisBuscados" className="bg-white py-8">
        <div className="w-full max-w-[1108px] mx-auto px-4"> 
          <h2 className="text-xl font-bold mb-6">Serviços mais buscados:</h2>

          <div className="grid grid-cols-4 gap-4">
            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col w-[240px] mx-auto"> {/* Largura aumentada */}
              <div className="absolute w-[36px] h-[36px] bg-gray-100 rounded-tl-lg rounded-br-lg flex items-center justify-center" style={{ top: 0, left: 0 }}>
                <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/6d865f811cb7478325d4b615b32a20ea.svg" alt="laboratorio vermelho" className="w-5 h-5" />
              </div>
              <div className="px-6 pt-12 pb-[24px]">
                <p className="font-'Museo Sans Rounded' text-bleck text-[18px]">Vacina Quadrivalente da Gripe (Cepas 2025)</p>
              </div>
              <div className="bg-gray-50 border-t border-gray-200 py-4">
                <div className="bg-purple-50 text-purple-600 text-sm font-medium p-3 mx-4 mb-3 rounded-md">
                  Serviço fora de estoque no momento.
                </div>
                <div className="mt-4 flex justify-center gap-3">
                  <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100">SAIBA MAIS</button>
                  <button className="px-4 py-1.5 bg-gray-700 text-white rounded-full text-sm font-semibold hover:bg-gray-800">AVISE-ME</button>
                </div>
              </div>
            </div>

            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col w-[240px] mx-auto"> {/* Largura aumentada */}
              <div className="absolute w-[36px] h-[36px] bg-gray-100 rounded-tl-lg rounded-br-lg flex items-center justify-center" style={{ top: 0, left: 0 }}>
                <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg" alt="laboratorio vermelho" className="w-5 h-5" />
              </div>
              <div className="px-4 pt-12 pb-4 mb-[51px]">
                <p className="font-'Museo Sans Rounded' text-black text-[18px]">Sexagem Fetal</p>
              </div>
              <div className="bg-gray-50 border-t border-gray-200 py-4">
                <p className="text-black text-lg px-4">R$ 280,00</p>
                <p className="text-gray-500 text-sm font-normal px-4">2x sem juros (R$140,00 cada)</p>
                <div className="mt-4 flex justify-center gap-3">
                  <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100">SAIBA MAIS</button>
                  <button className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 flex items-center">
                    <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/72ddd775408239f5370d04922affcaa9.svg" alt="Carrinho" className="w-4 h-4 mr-1" /> COMPRAR
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col w-[240px] mx-auto"> {/* Largura aumentada */}
              <div className="absolute w-[36px] h-[36px] bg-gray-100 rounded-tl-lg rounded-br-lg flex items-center justify-center" style={{ top: 0, left: 0 }}>
                <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/6d865f811cb7478325d4b615b32a20ea.svg" alt="laboratorio vermelho" className="w-5 h-5" />
              </div>
              <div className="px-4 pt-12 pb-4 mb-11">
                <p className="font-'Museo Sans Rounded' text-gray-900 text-[18px]">Check-up Saúde em Dia Mulher</p>
              </div>
              <div className="bg-gray-50 border-t border-gray-200 py-4">
                <p className="text-black px-4 text-lg">R$ 120,00</p>
                <div className="mt-4 flex justify-center gap-3">
                  <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100">SAIBA MAIS</button>
                  <button className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 flex items-center">
                    <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/72ddd775408239f5370d04922affcaa9.svg" alt="Carrinho" className="w-4 h-4 mr-1" /> COMPRAR
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col w-[240px] mx-auto"> {/* Largura aumentada */}
              <div className="absolute w-[36px] h-[36px] bg-gray-100 rounded-tl-lg rounded-br-lg flex items-center justify-center" style={{ top: 0, left: 0 }}>
                <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg" alt="laboratorio vermelho" className="w-5 h-5" />
              </div>
              <div className="px-4 pt-12 pb-4 mb-[71px]">
                <p className="font-'Museo Sans Rounded' text-black text-[18px]">Somatomedina IGF-1</p>
              </div>
              <div className="bg-gray-50 border-t border-gray-200 py-4">
                <p className="text-black text-lg px-4">R$ 161,00</p>
                <div className="mt-4 flex justify-center gap-3">
                  <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100">SAIBA MAIS</button>
                  <button className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 flex items-center">
                    <img src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/72ddd775408239f5370d04922affcaa9.svg" alt="Carrinho" className="w-4 h-4 mr-1" /> COMPRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularServices;